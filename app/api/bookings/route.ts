import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { typeName, time, name, email } = body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aprakhanna5@gmail.com",
      subject: `New booking request from ${name}`,
      html: `<p><strong>Type:</strong> ${typeName}</p>
             <p><strong>Time:</strong> ${time}</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}