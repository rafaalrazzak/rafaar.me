import '@/css/tailwind.css'
import '@/css/prism.css'

import localFont from 'next/font/local'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Globals } from '@react-spring/shared'
import LayoutWrapper from '@/components/LayoutWrapper'
import RSS from '@/components/Rss'
import { ClientReload } from '@/components/ClientReload'
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const JakartaSans = localFont({
  src: '../public/static/fonts/PlusJakartaSans-VariableFont_wght.ttf',
})

export default function App({ Component, pageProps, router }) {
  console.warn = function () {}

  Globals.assign({
    frameLoop: 'always',
  })

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <LayoutWrapper>
        <Component {...pageProps} key={router.route} className={JakartaSans.className} />
      </LayoutWrapper>
      <RSS />
    </ThemeProvider>
  )
}
