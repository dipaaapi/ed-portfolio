import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/brand/ed-mark.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/brand/ed-mark-1024.png" />
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
