import axios from 'axios'

interface SenderMailProps {
  name: string
  email: string
  message: string
}

export const sendMail = async ({
  name,
  email,
  message,
}: SenderMailProps): Promise<any> => {
  try {
    return axios.post('/api/contact', {
      name,
      email,
      message,
    })
  } catch (error) {
    return error
  }
}
