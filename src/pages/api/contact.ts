import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const email = process.env.MAIL_ADDRESS
const emailLogin = process.env.MAIL_LOGIN
const password = process.env.MAIL_PASSWORD

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,

  auth: {
    user: emailLogin,
    pass: password,
  },
})

interface MailerProps {
  senderMail: string
  name: string
  message: string
}

const mailer = ({
  senderMail,
  name,
  message,
}: MailerProps): Promise<unknown> => {
  const from = name && email ? `${name} <${email}> ` : `${name || email}`

  const templateEmail = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text: `Nome: ${name} \n Email: ${senderMail} \n Mensagem: ${message}`,
    replyTo: `${name} <${senderMail}> `,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(templateEmail, (error, info) => {
      error ? reject(error) : resolve(info)
    })
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { email, name, message } = req.body

  if (!email || !name || !message) {
    return res.status(403).json({ error: 'Missing information!' })
  }

  const mailerRes = await mailer({ senderMail: email, name, message })
  res.send(mailerRes)
}
