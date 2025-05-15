"use server"
import { ContactFormFields } from "./schemas"
import nodemailer from "nodemailer"
export const ContactOnSubmit = async (data: ContactFormFields) => {
    const transporter = nodemailer.createTransport({
        host: "mail.smtp2go.com",
        port: 2525,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })
    //todo: return not found if honeypot
    const send = async () => {
        await transporter.sendMail({
            from: `"${data.name}" <shift@chase-horton.com>`,
            to: "admin@chase-horton.com",
            subject: `Inquiry from - ${data.email}`,
            html: `<p>${data.message}</p>`, // HTML body
        })
    }
    send()
}