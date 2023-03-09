import { HeaderContainer } from './styles'

import Image from 'next/image'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Image
        src={logoImg}
        alt=""
        width={122}
        height={98}
        priority
        loading="lazy"
      />
    </HeaderContainer>
  )
}
