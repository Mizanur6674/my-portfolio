import { NewsLetterEmail } from "@/emails/newsletter";
import { Resend } from "resend";

const resend = new Resend(String(process.env.RESEND_API_KEY));

export async function POST(request: Request) {
  const { validationCode, email } = await request.json();

  const results = await resend.emails.send({
    from: String(process.env.FROM_EMAIL),
    to: email,
    subject: "Your Newsletter Info",
    react: NewsLetterEmail({
      validationCode,
    }),
  });

  return Response.json({
    data: results,
  });
}
