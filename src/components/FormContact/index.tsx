import { FormHTMLAttributes } from 'react'
import {
  FormContactContainer,
  InputContainer,
  TextAreaContainer,
} from './styles'

type FormContactProps = FormHTMLAttributes<HTMLFormElement>

export function FormContact({ ...props }: FormContactProps) {
  return (
    <FormContactContainer {...props}>
      <h2>Entre em contato</h2>

      <InputContainer>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
      </InputContainer>
      <TextAreaContainer>
        <label htmlFor="message">Sua Mensagem</label>
        <textarea name="message" id="message" />
      </TextAreaContainer>
      <button>Enviar</button>
    </FormContactContainer>
  )
}
