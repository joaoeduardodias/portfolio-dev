import { BgImage, HeaderContainer, LogoImage } from './styles'

import headerBg from '../../assets/headerBg.png'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <BgImage src={headerBg} alt="background image" />
      <LogoImage src={logoImg} alt="" width={122} height={98} loading="lazy" />
    </HeaderContainer>
  )
}
