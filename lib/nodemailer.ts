import nodemailer from "nodemailer"
import { render } from "@react-email/render"
import NewsletterSignupEmail from "@/emails/newsletter-signup"
import EventPublishedEmail from "@/emails/event-published"
import NewUserEmail from "@/emails/new-user"

// Créer un transporteur SMTP
// Pour la production, utilisez vos propres identifiants SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "user@example.com",
    pass: process.env.SMTP_PASSWORD || "password",
  },
})

// Fonction pour envoyer un email de confirmation d'inscription à la newsletter
export async function sendNewsletterSignupEmail(email: string, name: string) {
  const html = render(NewsletterSignupEmail({ name }))

  const mailOptions = {
    from: `"Burning Heart" <${process.env.SMTP_FROM || "noreply@burningheart.org"}>`,
    to: email,
    subject: "Bienvenue à notre newsletter",
    html,
  }

  return transporter.sendMail(mailOptions)
}

// Fonction pour envoyer un email de notification d'événement publié
export async function sendEventPublishedEmail(subscribers: { email: string; name: string }[], event: any) {
  const promises = subscribers.map((subscriber) => {
    const html = render(EventPublishedEmail({ name: subscriber.name, event }))

    const mailOptions = {
      from: `"Burning Heart" <${process.env.SMTP_FROM || "noreply@burningheart.org"}>`,
      to: subscriber.email,
      subject: `Nouvel événement: ${event.title}`,
      html,
    }

    return transporter.sendMail(mailOptions)
  })

  return Promise.all(promises)
}

// Fonction pour envoyer un email de bienvenue à un nouvel utilisateur
export async function sendNewUserEmail(email: string, name: string, password: string) {
  const html = render(NewUserEmail({ name, password }))

  const mailOptions = {
    from: `"Burning Heart" <${process.env.SMTP_FROM || "noreply@burningheart.org"}>`,
    to: email,
    subject: "Bienvenue sur Burning Heart",
    html,
  }

  return transporter.sendMail(mailOptions)
}
