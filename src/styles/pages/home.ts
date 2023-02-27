import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 1rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 864px;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 864px;

  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 8px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin: -7.3rem auto 4.5rem auto;

  display: flex;
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 462px) {
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    margin-top: -10.3rem;
  }
`

export const InfoContent = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 0.5rem;
    @media (max-width: 462px) {
      text-align: center;
    }
  }
  p {
    font-size: ${({ theme }) => theme.textSizes['text-text-m']};
    line-height: 160%;
    margin-bottom: 1.5rem;
    @media (max-width: 462px) {
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      width: 90%;
      margin: 0 auto;
      text-align: center;
    }
  }
`

export const ListInfos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media (max-width: 780px) {
    justify-content: center;
    gap: 1rem;
  }
`
export const BaseButtonContact = styled.li`
  border-radius: 4px;
  cursor: pointer;
  color: white;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 1rem;

    gap: 0.5rem;
    @media (max-width: 780px) {
      padding: 0.2rem 0.5rem;
    }
  }
  svg {
    font-size: 1rem;
    margin-bottom: 2px;
  }
`

export const ButtonMail = styled(BaseButtonContact)`
  color: black !important;
  background: ${({ theme }) => theme.colors['base-title']};
`
export const ButtonLinkedin = styled(BaseButtonContact)`
  background: #0a66c2;
`
export const ButtonGithub = styled(BaseButtonContact)`
  background: #1c1f23;
`
export const ButtonWhatsapp = styled(BaseButtonContact)`
  background: #0ea52d;
`

export const ExternalLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['brand-blue']};
  border: 1px solid ${({ theme }) => theme.colors['base-profile']};
  margin-top: -0.3rem;
  svg {
    width: 0.7031rem;
    height: 0.7031rem;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors['brand-blue']};
    transition: 0.2s;
  }
`
export const TechnologiesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 2rem;
  grid-auto-flow: dense;
  margin-bottom: 4rem;

  h2 {
    grid-column-start: 1;
    grid-column-end: -1;
    font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 700;
    @media (max-width: 460px) {
      text-align: center;
    }
  }
`
export const Technology = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors['base-post']};
  height: 5rem;
  padding: 1rem;

  // border animation

  --border-width: 2px;
  position: relative;
  border-radius: var(--border-width);

  &:hover::after {
    position: absolute;

    content: '';
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      rgba(97, 218, 251, 1) 20%,
      rgba(163, 164, 164, 1) 58%,
      rgba(73, 110, 161, 1) 66%,
      rgba(41, 199, 32, 1) 74%,
      rgba(100, 154, 168, 1) 100%,
      rgba(34, 35, 101, 1) 40%,
      rgba(33, 34, 34, 1) 41%,
      rgba(182, 52, 214, 1) 86%
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
  }

  h3 {
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    color: ${({ theme }) => theme.colors['base-title']};
  }

  svg {
    font-size: 3rem;
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: 460px) {
    justify-content: center;
  }
`
export const Footer = styled.footer`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`
