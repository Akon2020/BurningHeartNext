"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Samuel Diambu",
    role: "Membre depuis 2018",
    quote:
      "Burning Heart a complètement transformé ma vie spirituelle. J'ai trouvé ici une famille qui me soutient dans tous les aspects de ma vie.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Isaac Akonkwa",
    role: "Membre depuis 2020",
    quote:
      "Les enseignements profonds et la communauté chaleureuse m'ont aidé à traverser des moments difficiles. Je suis reconnaissant pour cette communauté.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "David Cubaka",
    role: "Membre depuis 2019",
    quote:
      "J'ai rejoint Burning Heart il y a quelques années et c'est la meilleure décision que j'ai prise. Ma foi s'est approfondie et j'ai rencontré des amis pour la vie.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Témoignages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment Burning Heart a impacté la vie de nos membres.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-center mb-6">
                <Quote className="h-10 w-10 text-primary/20 mx-auto mb-4" />
                <p className="text-lg italic mb-6">
                  {testimonials[currentIndex].quote}
                </p>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
