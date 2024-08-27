'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const description = formData.get('description')

    if (!name || !email || !subject || !description) {
        throw new Error('Missing required fields')
    }

    try {
        const data = await resend.emails.send({
            from: 'Contact <onboarding@resend.dev>',
            to: '22u1391@students.git.edu',
            subject: `New message from ${name}: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${description}
            `
        });
        console.log("success")
        return { success: true, data }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: error.message }
    }
};