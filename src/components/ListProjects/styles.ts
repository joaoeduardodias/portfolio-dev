import styled from 'styled-components'

export const ListProjectsContainer = styled.section`
  h2 {
    font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 700;
    margin-bottom: 1rem;
  }

  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 22.5rem));
    grid-gap: 2rem;
  }
`
