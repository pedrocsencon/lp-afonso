import { GoogleBodyPixel } from '@/components/Pixels/GoogleBodyPixel'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
        <meta
          name="description"
          content="7 semanas para transformar o seu negócio: Domine o Instagram, conquiste milhares de seguidores e venda muito todo dia"/>
        <meta name="author" content="Afonso Molina" />
        <meta name="keywords" content="Next.JS, Typescript" />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="copyright" content="© 2023 Afonso Molina" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
        <meta name="generator" content="Next.JS" />
        <meta name="facebook-domain-verification" content="04u1ac8l35g1lyub7kzj6vro998hyq" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Outfit:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <GoogleBodyPixel/>
        <NextScript />
      </body>
    </Html>
  )
}
