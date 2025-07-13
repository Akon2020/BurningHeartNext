export interface User {
  idUser: number;
  nomComplet: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetAllUsersResponse {
  nombre: number;
  usersInfo: User[];
}

export type ContactStatut = "nouveau" | "lu" | "traite" | "archive";

export interface Contact {
  idContact: number;
  nomComplet: string;
  email: string;
  sujet: string;
  message: string;
  statut: ContactStatut;
  repondu: boolean;
  createdAt: string;
}

export interface GetAllContactsResponse {
  nombre: number;
  contactsInfo: Contact[];
}

export interface Equipe {
  idEquipe: number;
  nomComplet: string;
  fonction: string;
  biographie: string;
  photoProfil?: string;
  ordre: number;
  actif: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllEquipesResponse {
  total: number;
  equipes: Equipe[];
}

export interface GetAllAuthResponse {
  message: string;
  data: Auth;
}

export interface Auth {
  token: string;
  userInfo: User;
}