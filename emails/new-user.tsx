import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components"

interface NewUserEmailProps {
  name?: string
  password?: string
}

export default function NewUserEmail({ name = "nouvel utilisateur", password = "********" }: NewUserEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Bienvenue sur Burning Heart</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://via.placeholder.com/150x50?text=Burning+Heart"
            width="150"
            height="50"
            alt="Burning Heart"
            style={logo}
          />
          <Heading style={heading}>Bienvenue sur Burning Heart !</Heading>
          <Section style={section}>
            <Text style={text}>Cher(e) {name},</Text>
            <Text style={text}>
              Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter à notre plateforme avec les
              identifiants suivants:
            </Text>

            <Section style={credentials}>
              <Text style={credentialText}>
                <strong>Email:</strong> Votre adresse email
              </Text>
              <Text style={credentialText}>
                <strong>Mot de passe temporaire:</strong> {password}
              </Text>
            </Section>

            <Text style={text}>
              Pour des raisons de sécurité, nous vous recommandons de changer votre mot de passe dès votre première
              connexion.
            </Text>

            <Text style={text}>Si vous avez des questions ou besoin d'aide, n'hésitez pas à nous contacter.</Text>

            <Text style={text}>Cordialement,</Text>
            <Text style={text}>L'équipe de Burning Heart</Text>
          </Section>
          <Section style={footer}>
            <Text style={footerText}>© {new Date().getFullYear()} Burning Heart. Tous droits réservés.</Text>
            <Text style={footerText}>123 Avenue Maison, 243 Bukavu, République Democratique du Congo</Text>
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

const credentials = {
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "5px",
  margin: "20px 0",
}

const credentialText = {
  fontSize: "16px",
  margin: "10px 0",
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
