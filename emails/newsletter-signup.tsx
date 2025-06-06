import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components"

interface NewsletterSignupEmailProps {
  name?: string
}

export default function NewsletterSignupEmail({ name = "ami(e)" }: NewsletterSignupEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Merci de vous être inscrit à la newsletter de Burning Heart</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://via.placeholder.com/150x50?text=Burning+Heart"
            width="150"
            height="50"
            alt="Burning Heart"
            style={logo}
          />
          <Heading style={heading}>Bienvenue à notre newsletter !</Heading>
          <Section style={section}>
            <Text style={text}>Cher(e) {name},</Text>
            <Text style={text}>
              Merci de vous être inscrit(e) à la newsletter de Burning Heart. Nous sommes ravis de vous compter parmi
              notre communauté.
            </Text>
            <Text style={text}>
              Vous recevrez désormais régulièrement des nouvelles concernant nos événements, enseignements et activités.
              Nous espérons que ces informations vous aideront à rester connecté(e) et à grandir dans votre foi.
            </Text>
            <Text style={text}>Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.</Text>
            <Text style={text}>Que Dieu vous bénisse,</Text>
            <Text style={text}>L'équipe de Burning Heart</Text>
          </Section>
          <Section style={footer}>
            <Text style={footerText}>© {new Date().getFullYear()} Burning Heart. Tous droits réservés.</Text>
            <Text style={footerText}>123 Avenue Maison, 243 Bukavu, République Democratique du Congo</Text>
            <Text style={footerText}>
              <Link href="#" style={link}>
                Se désabonner
              </Link>{" "}
              ·{" "}
              <Link href="#" style={link}>
                Préférences
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
}

const logo = {
  margin: "0 auto 20px",
  display: "block",
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
  color: "#dc2626",
}

const section = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
}

const text = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#333333",
}

const footer = {
  margin: "20px 0",
  textAlign: "center" as const,
}

const footerText = {
  fontSize: "12px",
  color: "#666666",
  margin: "5px 0",
}

const link = {
  color: "#dc2626",
  textDecoration: "underline",
}
