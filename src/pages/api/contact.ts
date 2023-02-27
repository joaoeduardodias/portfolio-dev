import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const email = process.env.MAIL_ADDRESS
const password = process.env.MAIL_PASSWORD

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  // secure: true,
  auth: {
    user: email,
    pass: password,
  },
})

interface MailerProps {
  senderMail: string
  name: string
  text: string
}

const mailer = ({ senderMail, name, text }: MailerProps): Promise<unknown> => {
  const from =
    name && senderMail ? `${name} <${senderMail}> ` : `${name || senderMail}`

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text: `Email - <${senderMail}> \n ${text}`,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    })
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { senderMail, name, content } = req.body

  if (senderMail === '' || name === '' || content === '') {
    return res.status(403).json({ error: 'Missing information!' })
  }

  const mailerRes = await mailer({ senderMail, name, text: content })
  res.send(mailerRes)
}
