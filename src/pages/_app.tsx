import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OSAMEC - Bosch Diesel Service - Bosch Car Service</title>
      </Head>
      <Component {...pageProps} />
    </>
    
  )
}
