"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MoreHorizontal,
  Plus,
  Filter,
  Pencil,
  Trash,
} from "lucide-react";
import Link from "next/link";
import AddUserModal from "@/components/modals/add-user-modal";
import EditUserModal from "@/components/modals/edit-user-modal";
import DeleteConfirmationModal from "@/components/modals/delete-confirmation-modal";
import { toast } from "@/components/ui/use-toast";

// Exemple de données utilisateurs
const users = [
  {
    id: 1,
    name: "Isaac Akonkwa",
    email: "akonkwaushindi@gmail.com",
    role: "admin",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Il y a 2 heures",
  },
  {
    id: 2,
    name: "Samuel Diambu",
    email: "samueldiambu@gmail.com",
    role: "member",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Il y a 5 heures",
  },
  {
    id: 3,
    name: "David Cubaka",
    email: "davidcubaka@gmail.com",
    role: "editor",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Jamais",
  },
  {
    id: 4,
    name: "Wani Rudendeza",
    email: "wanirudendeza@gmail.com",
    role: "member",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Il y a 2 jours",
  },
  {
    id: 5,
    name: "Japhet Weza",
    email: "japhetweza@gmail.com",
    role: "member",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Il y a 2 semaines",
  },
  {
    id: 6,
    name: "Jibu Maroyi",
    email: "jibumaroy@gmail.com",
    role: "member",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Il y a 1 jour",
  },
  {
    id: 7,
    name: "Père Ciza",
    email: "pere.ciza@gmail.com",
    role: "administrator",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Il y a 3 jours",
  },
  {
    id: 8,
    name: "Akonkwa Ushindi",
    email: "akonkwa.ushindi@ucbukavu.ac.cd",
    role: "member",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Jamais",
  },
  {
    id: 9,
    name: "Akonkwa Ushindi",
    email: "akonkwa.ushindi@ucbukavu.ac.cd",
    role: "member",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
    lastLogin: "Jamais",
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [usersList, setUsersList] = useState(users);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Filtrer les utilisateurs en fonction de la recherche
  const filteredUsers = usersList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddUser = () => {
    setIsAddModalOpen(true);
  };

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteUser = (user: any) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteUser = async () => {
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Supprimer l'utilisateur de la liste
    setUsersList(usersList.filter((user) => user.id !== selectedUser.id));

    toast({
      title: "Utilisateur supprimé",
      description: `L'utilisateur ${selectedUser.name} a été supprimé avec succès.`,
    });
  };

  const refreshUsersList = () => {
    // Dans un environnement réel, vous feriez un appel API ici
    // Pour la démo, nous simulons juste un rafraîchissement
    toast({
      title: "Liste mise à jour",
      description: "La liste des utilisateurs a été mise à jour.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Utilisateurs</h1>
        <Button onClick={handleAddUser}>
          <Plus className="h-4 w-4 mr-2" />
          Nouvel utilisateur
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un utilisateur..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtres
        </Button>
      </div>

      {/* Users Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Utilisateur</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Dernière connexion</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {user.role === "admin"
                      ? "Administrateur"
                      : user.role === "editor"
                        ? "Éditeur"
                        : "Membre"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === "active"
                        ? "default"
                        : user.status === "pending"
                          ? "outline"
                          : "secondary"
                    }
                  >
                    {user.status === "active"
                      ? "Actif"
                      : user.status === "pending"
                        ? "En attente"
                        : "Inactif"}
                  </Badge>
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/users/${user.id}`}>
                          Voir le profil
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditUser(user)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-red-500 focus:text-red-500"
                        onClick={() => handleDeleteUser(user)}
                      >
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Affichage de <strong>1</strong> à{" "}
          <strong>{filteredUsers.length}</strong> sur{" "}
          <strong>{usersList.length}</strong> utilisateurs
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Précédent
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            Suivant
          </Button>
        </div>
      </div>

      {/* Modals */}
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={refreshUsersList}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
        onSuccess={refreshUsersList}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteUser}
        title="Supprimer l'utilisateur"
        description={`Êtes-vous sûr de vouloir supprimer l'utilisateur ${selectedUser?.name} ? Cette action est irréversible.`}
      />
    </div>
  );
}
