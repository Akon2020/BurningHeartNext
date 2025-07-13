"use client";

import type React from "react";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { NewsletterModal } from "@/components/modals/newsletter-modal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="bg-secondary pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Burning Heart</h3>
              <p className="text-muted-foreground mb-4">
                Communauté dédiée à ravivez la flamme de l'espérance dans vos
                cœur. Rejoignez notre communauté pour grandir spirituellement,
                trouver du soutien et discerner la volonté de Dieu dans votre
                vie.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://facebook.com/burningheart87"
                    className="hover:bg-primary hover:text-white"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://instagram.com/burningheart87"
                    className="hover:bg-primary hover:text-white"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://youtube.com/@burningheart-bhis"
                    className="hover:bg-primary hover:text-white"
                    aria-label="Youtube"
                  >
                    <Youtube size={18} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/a-propos"
                    className="hover:text-primary transition-colors"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/evenements"
                    className="hover:text-primary transition-colors"
                  >
                    Événements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    259 Avenue Patrice Emery Lumumba, Q. Nyalukemba, Bukavu,
                    République Democratique du Congo
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span>+243 849 005 240</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span>burningheartihs@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Inscrivez-vous pour recevoir nos dernières nouvelles et
                événements.
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/10"
                />
                <Button onClick={handleSubscribe} className="w-full">
                  Inscription
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; {currentYear} Burning Heart. Tous droits réservés.</p>
            <div className="mt-2 flex justify-center gap-4 text-sm">
              <Link
                href="/mentions-legales"
                className="hover:text-primary transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/admin"
                className="hover:text-primary transition-colors"
              >
                Administration
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <NewsletterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialEmail={email}
      />
    </>
  );
};

export default Footer;
