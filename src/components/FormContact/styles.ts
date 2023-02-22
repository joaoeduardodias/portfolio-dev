import styled from 'styled-components'

export const FormContactContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  margin-bottom: 5rem;

  h2 {
    grid-column-start: 1;
    grid-column-end: -1;
    font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 700;
    margin-bottom: 1rem;
  }
  button {
    grid-column-start: 1;
    grid-column-end: -1;
    height: 3.125rem;
    width: 12rem;
    border: 0;
    border-radius: 6px;
    margin-left: auto;
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-title']};
    background: #0ea52d;
    transition: all 0.3s;

    &:hover {
      background: #0f7722;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-weight: bold;
    margin-left: 0.6rem;
  }
  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 6px;
    margin-top: 0.75rem;
    color: ${({ theme }) => theme.colors['base-text']};
    ::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: -1;

  label {
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-weight: bold;
    margin-left: 0.6rem;
  }
  textarea {
    resize: none;

    width: 100%;
    height: 10rem;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 6px;
    margin-top: 0.75rem;
    color: ${({ theme }) => theme.colors['base-text']};
    ::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
