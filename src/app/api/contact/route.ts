import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, goal, message } = await req.json();

    // 1. Validate inputs
    if (!name || !email || !goal) {
      return NextResponse.json(
        { error: "Name, email, and primary goal are required." },
        { status: 400 }
      );
    }

    // 2. Set up SMTP transport using env variables
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || "587"),
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 3. Compose email html/text
    const mailOptions = {
      from: process.env.MAIL_FROM || `"Fit With Developer" <noreply@fitwithdeveloper.com>`,
      to: "support@fitwithdeveloper.com",
      replyTo: email,
      subject: `New Lead: ${name} - ${goal.toUpperCase()}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Goal: ${goal}
Message: ${message || "No message provided."}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fcfcfc;">
          <h2 style="color: #3F5E4A; border-bottom: 2px solid #E58A65; padding-bottom: 10px; margin-top: 0;">New Transformation Strategy Call Booking</h2>
          <p style="font-size: 14px; color: #555;">You have received a new consultation request from your website contact form:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; border-bottom: 1px solid #eaeaea; width: 120px;">Name:</td>
              <td style="padding: 10px 0; color: #555; border-bottom: 1px solid #eaeaea;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; border-bottom: 1px solid #eaeaea;">Email:</td>
              <td style="padding: 10px 0; color: #555; border-bottom: 1px solid #eaeaea;"><a href="mailto:${email}" style="color: #E58A65; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; border-bottom: 1px solid #eaeaea;">Phone:</td>
              <td style="padding: 10px 0; color: #555; border-bottom: 1px solid #eaeaea;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; border-bottom: 1px solid #eaeaea;">Primary Goal:</td>
              <td style="padding: 10px 0; font-weight: bold; color: #E58A65; border-bottom: 1px solid #eaeaea; text-transform: uppercase;">${goal}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; border-bottom: 1px solid #eaeaea; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #555; border-bottom: 1px solid #eaeaea; white-space: pre-wrap;">${message || "No message provided."}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; font-size: 11px; color: #999; text-align: center;">
            This email was automatically generated and sent via Fit With Developer web portal.
          </div>
        </div>
      `,
    };

    // 4. Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error: any) {
    console.error("SMTP Mail Send Error: ", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
