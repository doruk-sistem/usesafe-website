import { transporter } from "@/lib/nodemailer-transporter";

// IP addresses and last request times
const ipRequestMap = new Map<string, number>();
const RATE_LIMIT_MINUTES = 5;

export async function POST(req: Request) {
  // get ip address
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const lastRequestTime = ipRequestMap.get(ip);

  // check if request is made in last 5 minutes
  if (
    lastRequestTime &&
    now - lastRequestTime < RATE_LIMIT_MINUTES * 60 * 1000
  ) {
    return Response.json("Too many requests. Please wait 5 minutes.", {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": `${RATE_LIMIT_MINUTES * 60}`,
      },
    });
  }

  // update ip and time
  ipRequestMap.set(ip, now);

  const { email, product, message, name, company, phone } = await req.json();

  if (!email || !message || !name || !company) {
    return new Response("Invalid request", { status: 400 });
  }

  await transporter.sendMail({
    from: '"UseSafe Website" <info@doruksistem.com.tr>',
    to: "info@doruksistem.com.tr",
    subject: "UseSafe Website - Contact",
    text: `please complete your registration.`,
    html: `
            <b>Hello, there is somebody who wants to get in touch for UseSafe website.</b>
            <b>Sender Information:</b>
            <br />
            <br />
            <p>Name: <b>${name}</b></p>
            <br />
            <p>Email: <b>${email}</b></p>
            <br />
            <p>Company: ${company}</p>
            <br />
            <p>Phone: <b>${phone}</b></p>
            <br />
            <p>Product: <b>${product}</b></p>
            <br />
            <p>Message: <b>"${message}"</b></p>
            <br />
            <a href="mailto:${email}">Click to reply</a>
        `,
  });

  return Response.json({ message: "Email sent" }, { status: 200 });
}
