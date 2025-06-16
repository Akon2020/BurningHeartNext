import HomeHeader from "@/components/home/home-header"
import Hero from "@/components/home/hero"
import AboutSection from "@/components/home/about-section"
import ServicesSection from "@/components/home/services-section"
import EventsSection from "@/components/home/events-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import NewsletterSection from "@/components/home/newsletter-section"
import ContactSection from "@/components/home/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </>
  )
}
