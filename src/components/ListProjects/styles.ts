import styled from 'styled-components'

export const ListProjectsContainer = styled.section`
  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    grid-gap: 2rem;
  }
`
