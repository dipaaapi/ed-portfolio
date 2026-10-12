import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Orbitron } from 'next/font/google'
import Navigation from '../components/nav'

// Loaded once and self-hosted by Next; exposed as --font-main for Tailwind's `font-main`.
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'], variable: '--font-main', display: 'swap' })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${orbitron.variable} font-main`}>
      <Navigation />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
