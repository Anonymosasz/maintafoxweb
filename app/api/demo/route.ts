import { NextResponse } from 'next/server';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

const Schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(5),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.DEMO_REQUEST_TO || 'contact@maintafox.systems';
  const from = process.env.DEMO_REQUEST_FROM || 'no-reply@maintafox.systems';
  if (!apiKey) {
    return NextResponse.json({ error: 'Email not configured' }, { status: 500 });
  }
  sgMail.setApiKey(apiKey);

  const { name, company, email, phone, message } = parsed.data;
  const content = `New demo request:\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

  try {
    await sgMail.send({ to, from, subject: 'Maintafox Demo Request', text: content });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
