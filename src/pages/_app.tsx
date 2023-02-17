import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
