import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  try {
    // Doctor ko notification
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aprakhanna5@gmail.com",
      subject: `New enquiry from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    // Patient ko confirmation
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We've received your message",
      html: `<p>Hi ${name},</p>
             <p>Thanks for reaching out. The clinic will get back to you within one business day.</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
