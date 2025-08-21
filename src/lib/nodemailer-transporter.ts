import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || "gmail",
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});
