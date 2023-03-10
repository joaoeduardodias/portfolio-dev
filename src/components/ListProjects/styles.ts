import styled from 'styled-components'

export const ListProjectsContainer = styled.section`
  margin-bottom: 2rem;
  h2 {
    font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 700;
    margin-bottom: 1.5rem;
    @media (max-width: 460px) {
      text-align: center;
    }
  }

  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
  }
`
