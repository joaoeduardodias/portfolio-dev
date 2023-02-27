import { sendMail } from '@/services/SendMail'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as zod from 'zod'
import {
  FormContactContainer,
  InputContainer,
  TextAreaContainer,
} from './styles'

const contactSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  message: zod.string(),
})
type ContactForm = zod.infer<typeof contactSchema>

type FormContactProps = FormHTMLAttributes<HTMLFormElement>

export function FormContact({ ...props }: FormContactProps) {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  async function handleFormSubmit({ email, message, name }: ContactForm) {
    try {
      setIsLoading(true)

      await sendMail({ email, name, content: message })
      reset()
    } catch (error) {
      toast('Erro encontrado, por favor tente novamente!', {
        style: {
          background: 'red',
          color: 'white',
        },
      })
    } finally {
      setIsLoading(false)
      toast('Mensagem enviada com sucesso!', {
        style: {
          background: 'green',
          color: 'white',
        },
      })
    }
  }

  return (
    <FormContactContainer {...props} onSubmit={handleSubmit(handleFormSubmit)}>
      <h2>Entre em contato</h2>

      <InputContainer>
        <label htmlFor="name">Nome</label>
        <input type="text" {...register('name')} id="name" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <input type="email" {...register('email')} id="email" />
      </InputContainer>
      <TextAreaContainer>
        <label htmlFor="message">Sua Mensagem</label>
        <textarea
          {...register('message')}
          id="message"
          placeholder="Digite sua mensagem..."
        />
      </TextAreaContainer>
      <button disabled={isLoading}>Enviar</button>
    </FormContactContainer>
  )
}
