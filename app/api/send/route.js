import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}`,
  });

  return Response.json({ success: true });
}