import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ToastContainer
        role="alert"
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progressStyle={undefined}
        theme="colored"
      />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
