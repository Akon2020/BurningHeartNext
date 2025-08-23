"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/logoN.png?height=800&width=600"
              alt="À propos de Burning Heart"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-primary mb-6">À Propos de Nous</h2>
            <p className="text-lg mb-6">
              <b>Burning Heart - Pèlerins avec le Christ</b> est un apostolat spirituel et médiatique à but
              non lucratif désirant soutenir les préférences apostoliques
              universelles de la Compagnie de Jésus concernant l&apos;aide à
              porter aux âmes, à trouver Jésus-Christ et à le suivre.
            </p>
            <p className="text-lg mb-6">
              Il se veut un outil pour la{" "}
              <b>promotion du discernement et des Exercices Spirituels</b> et
              devra{" "}
              <b>
                cheminer avec les jeunes, les accompagner dans la création
                d&apos;un avenir plein d&apos;espoir.
              </b>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">Notre Mission</h4>
                <p>
                  Ouvrir l&apos;accès aux exercices spirituels à tous les hommes
                  assoiffés de Dieu pour qu&apos;ils en jouissent et
                  s&apos;attachent au créateur de toute chose.
                </p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">Notre Vision</h4>
                <p>
                  Devenir un outil de rayonnement spirituel et une référence
                  pour l&apos;expansion évangélique à travers les Exercices
                  Spirituels.
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href="/a-propos">
                En savoir plus <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
