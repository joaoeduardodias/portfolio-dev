import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 864px;

  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 8px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin: -5.3rem auto 4.5rem auto;

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
`

export const InfoContent = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 0.5rem;
  }
  p {
    font-size: ${({ theme }) => theme.textSizes['text-text-m']};
    line-height: 160%;
    margin-bottom: 1.5rem;
  }
`

export const ListInfos = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 18px;
    }
  }
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
