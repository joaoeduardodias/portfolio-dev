import axios from 'axios'

interface SenderMailProps {
  name: string
  email: string
  content: string
}

export const sendMail = async ({
  content,
  name,
  email,
}: SenderMailProps): Promise<any> => {
  const data = {
    name,
    email,
    content,
  }
  try {
    return axios.post('/api/contact', data)
  } catch (error) {
    return error
  }
}
