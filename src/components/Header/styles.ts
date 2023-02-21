import styled from 'styled-components'
import headerBg from '../../assets/headerBg.png'

export const HeaderContainer = styled.header`
  background: url(${headerBg.src}) no-repeat center;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors['base-background']};
  width: 100%;
  height: 20.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 7rem;
  }
`
