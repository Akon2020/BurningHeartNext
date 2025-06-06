import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface EventPublishedEmailProps {
  name?: string
  event: {
    title: string
    date: string
    time: string
    location: string
    description: string
    imageUrl?: string
  }
}

export default function EventPublishedEmail({ name = "ami(e)", event }: EventPublishedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouvel événement: {event.title}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://via.placeholder.com/150x50?text=Burning+Heart"
            width="150"
            height="50"
            alt="Burning Heart"
            style={logo}
          />
          <Heading style={heading}>Nouvel événement à ne pas manquer !</Heading>

          {event.imageUrl && <Img src={event.imageUrl} width="600" height="300" alt={event.title} style={eventImage} />}

          <Section style={section}>
            <Heading as="h2" style={eventTitle}>
              {event.title}
            </Heading>

            <Section style={eventDetails}>
              <Text style={detailText}>
                <strong>Date:</strong> {event.date}
              </Text>
              <Text style={detailText}>
                <strong>Heure:</strong> {event.time}
              </Text>
              <Text style={detailText}>
                <strong>Lieu:</strong> {event.location}
              </Text>
            </Section>

            <Text style={text}>{event.description}</Text>

            <Button style={button} href="#">
              En savoir plus
            </Button>
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

const eventImage = {
  width: "100%",
  borderRadius: "5px 5px 0 0",
  marginBottom: "-5px",
}

const section = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
}

const eventTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 20px",
  color: "#333333",
}

const eventDetails = {
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "5px",
  marginBottom: "20px",
}

const detailText = {
  fontSize: "16px",
  margin: "5px 0",
  color: "#333333",
}

const text = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#333333",
}

const button = {
  backgroundColor: "#dc2626",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 20px",
  margin: "30px auto 0",
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
