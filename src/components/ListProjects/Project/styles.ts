import styled from 'styled-components'

export const ProjectContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 26rem;
    height: 13.75rem;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem 1.5rem 1.5rem;

    strong {
      font-size: ${({ theme }) => theme.textSizes['title-title-m']};
      color: ${({ theme }) => theme.colors['base-title']};
      line-height: 160%;
      margin-bottom: 0.6rem;
    }
    p {
      font-size: ${({ theme }) => theme.textSizes['text-text-m']};
    }
  }
`

export const TagsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['brand-blue']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  height: 1.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }

  li + li::before {
    content: '.';
    font-size: 2.5rem;
    margin-bottom: 1.3rem;
    margin-right: 0.5rem;
  }
`
