import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Globals } from '@react-spring/shared'
import LayoutWrapper from '@/components/LayoutWrapper'
import RSS from '@/components/Rss'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps, router }) {
  // https://github.com/pmndrs/react-spring/issues/1586
  console.warn = function () {}

  Globals.assign({
    frameLoop: 'always',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y:-20 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      key={router.route}
    >
      <ThemeProvider attribute="class" enableSystem={true}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <LayoutWrapper>
          <Component {...pageProps} key={router.route} />
        </LayoutWrapper>
        <RSS />
      </ThemeProvider>
    </motion.div>
  )
}
