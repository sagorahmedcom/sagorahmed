import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, budgetOptions } from "@/lib/contact-schema";
import ContactEmail from "@/emails/ContactEmail";

async function verifyTurnstile(token: string, remoteip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);
  if (remoteip) formData.append("remoteip", remoteip);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
    }

    const { name, email, budget, message, turnstileToken } = parsed.data;

    const remoteip = request.headers.get("x-forwarded-for");
    const humanVerified = await verifyTurnstile(turnstileToken, remoteip);
    if (!humanVerified) {
      return NextResponse.json(
        { ok: false, error: "Verification failed. Please retry the checkbox and submit again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set — contact form cannot send email yet.");
      return NextResponse.json({ ok: false, error: "Email service isn't configured yet." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const budgetLabel = budgetOptions.find((o) => o.value === budget)?.label ?? budget;

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "iamsagorahmed@gmail.com",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      react: ContactEmail({ name, email, budgetLabel, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: "Failed to send your message. Try again later." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unhandled /api/contact error:", err);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
