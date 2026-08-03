import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO = process.env.CONTACT_TO ?? "projects@ramleytech.com";
const CC = (
  process.env.CONTACT_CC ??
  "rodneymupanduki@gmail.com, rodney@ramleytech.com"
)
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);
const FROM =
  process.env.CONTACT_FROM ?? '"Ramley Technologies" <noreply@ramleytech.com>';

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  type?: string;
  description?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getTransport() {
  const user = process.env.SMTP_USER ?? "emailapikey";
  const pass = process.env.SMTP_PASS;

  if (!pass) return null;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.zeptomail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    auth: { user, pass },
  });
}

function buildEnquiryEmail(data: {
  name: string;
  email: string;
  company: string;
  type: string;
  description: string;
}) {
  const { name, email, company, type, description } = data;
  const when = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  });

  const rows = [
    ["Name", escapeHtml(name)],
    [
      "Email",
      `<a href="mailto:${escapeHtml(email)}" style="color:#3b82f6;text-decoration:none;">${escapeHtml(email)}</a>`,
    ],
    ["Company", escapeHtml(company)],
    ["Project type", escapeHtml(type)],
  ]
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #1f1f1f;width:120px;vertical-align:top;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#71717a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          ${label}
        </td>
        <td style="padding:14px 0;border-bottom:1px solid #1f1f1f;vertical-align:top;font-size:15px;line-height:1.5;color:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          ${value}
        </td>
      </tr>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Project enquiry</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111111;border:1px solid #222;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#60a5fa,#3b82f6,#1d4ed8);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#3b82f6;font-weight:600;">
                Ramley Technologies
              </p>
              <h1 style="margin:0;font-size:22px;line-height:1.3;color:#fafafa;font-weight:700;">
                New project enquiry
              </h1>
              <p style="margin:8px 0 0;font-size:13px;color:#71717a;">
                ${escapeHtml(when)}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
              <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#71717a;">
                Message
              </p>
              <div style="padding:16px 18px;background:#0a0a0a;border:1px solid #1f1f1f;border-radius:12px;font-size:15px;line-height:1.65;color:#e4e4e7;white-space:pre-wrap;">${escapeHtml(description)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
              <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: Project enquiry — ${name}`)}"
                 style="display:inline-block;padding:12px 20px;background:#3b82f6;color:#ffffff;text-decoration:none;border-radius:10px;font-size:14px;font-weight:600;">
                Reply to ${escapeHtml(name.split(" ")[0] || name)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;border-top:1px solid #1f1f1f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
              <p style="margin:0;font-size:12px;color:#52525b;line-height:1.5;">
                Sent from the ramleytech.com contact form. Reply goes directly to the sender.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    "New project enquiry — Ramley Technologies",
    when,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Project type: ${type}`,
    "",
    "Message:",
    description,
  ].join("\n");

  return { html, text };
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const type = body.type?.trim() ?? "";
  const description = body.description?.trim() ?? "";

  if (!name || !email || !company || !type || !description) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const transport = getTransport();
  if (!transport) {
    console.error("SMTP_PASS is not set — contact form cannot send mail.");
    return NextResponse.json(
      {
        error:
          "Form is not configured yet. Email us at projects@ramleytech.com.",
      },
      { status: 503 }
    );
  }

  const { html, text } = buildEnquiryEmail({
    name,
    email,
    company,
    type,
    description,
  });

  try {
    await transport.sendMail({
      from: FROM,
      to: TO,
      cc: CC,
      replyTo: email,
      subject: `Project enquiry — ${name} (${company})`,
      text,
      html,
    });
  } catch (err) {
    console.error("SMTP send error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
