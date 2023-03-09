import Image from 'next/image'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 20.5rem;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BgImage = styled(Image)`
  object-fit: cover;
  height: 20.5rem;
  position: absolute;
  inset: 0;
  width: 100%;

  z-index: -1;
`

export const LogoImage = styled(Image)`
  margin-bottom: 7rem;
`
