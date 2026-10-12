import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/edLogo.png" />
        <link rel="apple-touch-icon" href="/edLogo.png" />
        <meta name="theme-color" content="#111827" />
        <meta name="author" content="John Edward Cabrera" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
