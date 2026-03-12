import { NextResponse } from "next/server";

import { transporter } from "@/lib/nodemailer-transporter";
import { RECAPTCHA_ACTION } from "@/lib/recaptcha";

const RECAPTCHA_SCORE_THRESHOLD = 0.5;

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return true; // Skip verification if not configured (e.g. local dev)
  }

  const params = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }
  );

  const data = (await response.json()) as {
    success: boolean;
    score?: number;
    action?: string;
    hostname?: string;
    "error-codes"?: string[];
  };

  if (!data.success) {
    return false;
  }
  if (data.action !== RECAPTCHA_ACTION) {
    return false;
  }
  if (
    typeof data.score === "number" &&
    data.score < RECAPTCHA_SCORE_THRESHOLD
  ) {
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      workEmail,
      phoneNumber,
      companyName,
      jobTitle,
      country,
      reasonForReachingOut,
      message,
      recaptchaToken,
    } = body;

    // reCAPTCHA v3 verification (when secret key is configured)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken || typeof recaptchaToken !== "string") {
        return NextResponse.json(
          { error: "reCAPTCHA verification required" },
          { status: 400 }
        );
      }
      const isValid = await verifyRecaptcha(recaptchaToken);
      if (!isValid) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    }

    const CONTACT_FROM_EMAIL =
      process.env.CONTACT_FROM_EMAIL || "info@doruksistem.com.tr";
    const CONTACT_TO_EMAIL =
      process.env.CONTACT_TO_EMAIL || "info@doruksistem.com.tr";
    const CONTACT_CC_EMAIL = process.env.CONTACT_CC_EMAIL;

    const mailOptions = {
      // From: use a brand / generic address instead of a personal mailbox
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      // CC only if configured – avoids hard‑coding a personal address
      cc: CONTACT_CC_EMAIL || undefined,
      replyTo: workEmail,
      subject: `New UsesafeContact Form Submission: ${reasonForReachingOut}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Usesafe Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #1e40af; padding: 30px; text-align: center;">
                      <img src="https://usesafe.com/logos/USESAFE_MARKA.png" alt="Usesafe Logo" style="max-width: 120px; height: auto; margin-bottom: 20px; filter: brightness(0) invert(1);" />
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        New Contact Form Submission
                      </h1>
                      <p style="color: #e0e7ff; margin: 8px 0 0 0; font-size: 16px;">
                        Usesafe Contact Form
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <!-- Contact Information Section -->
                        <tr>
                          <td style="padding-bottom: 30px;">
                            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                              👤 Contact Information
                            </h2>
                            <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 15px;">
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; width: 140px; font-weight: 600; color: #374151;">Full Name:</td>
                                <td style="padding: 12px; color: #1f2937;">${fullName}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; font-weight: 600; color: #374151;">Work Email:</td>
                                <td style="padding: 12px; color: #1f2937;"><a href="mailto:${workEmail}" style="color: #3b82f6; text-decoration: none;">${workEmail}</a></td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; font-weight: 600; color: #374151;">Phone:</td>
                                <td style="padding: 12px; color: #1f2937;"><a href="tel:${phoneNumber}" style="color: #3b82f6; text-decoration: none;">${phoneNumber}</a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <!-- Company Information Section -->
                        <tr>
                          <td style="padding-bottom: 30px;">
                            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                              🏢 Company Information
                            </h2>
                            <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 15px;">
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; width: 140px; font-weight: 600; color: #374151;">Company:</td>
                                <td style="padding: 12px; color: #1f2937;">${companyName}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; font-weight: 600; color: #374151;">Job Title:</td>
                                <td style="padding: 12px; color: #1f2937;">${jobTitle}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; font-weight: 600; color: #374151;">Country:</td>
                                <td style="padding: 12px; color: #1f2937;">${country}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <!-- Inquiry Details Section -->
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                              💬 Inquiry Details
                            </h2>
                            <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 15px;">
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; width: 140px; font-weight: 600; color: #374151; vertical-align: top;">Reason:</td>
                                <td style="padding: 12px; color: #1f2937;">${reasonForReachingOut}</td>
                              </tr>
                              <tr>
                                <td style="background-color: #f9fafb; padding: 12px; border-radius: 6px; font-weight: 600; color: #374151; vertical-align: top;">Message:</td>
                                <td style="padding: 12px; color: #1f2937; background-color: #fefefe; border-radius: 8px; border-left: 4px solid #3b82f6;">
                                  ${message.replace(/\n/g, "<br>")}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="color: #6b7280; margin: 0; font-size: 14px;">
                        📧 This email was sent from the Usesafe website contact form
                      </p>
                      <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 12px;">
                                                 ${new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })} (Turkey Time)
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch {
    // Error sending email
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
