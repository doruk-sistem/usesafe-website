import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

function buildSmtpOptions(): SMTPTransport.Options {
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = process.env.SMTP_PASS?.trim() ?? "";
  const host = (process.env.SMTP_HOST?.trim() || "smtp.gmail.com").replace(
    /^"|"$/g,
    "",
  );
  const port = Number.parseInt(process.env.SMTP_PORT?.replace(/^"|"$/g, "") || "587", 10);

  const isGmail =
    host.includes("gmail.com") || process.env.SMTP_SERVICE?.trim() === "gmail";

  if (isGmail) {
    return {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user, pass },
    };
  }

  return {
    host,
    port,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
  };
}

export const transporter = nodemailer.createTransport(buildSmtpOptions());
