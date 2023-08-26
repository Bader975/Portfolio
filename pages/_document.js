import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang="en">
      <Head >
        <meta charSet="UTF-8" />
        <meta name="description" content="This is my portfolio website showcasing my work and skills."/>
        <meta name="keywords" content="portfolio, web development, design, projects"/>
        <meta name="author" content="Bader Alyami"/>
        <link rel="icon" href="/space-ship.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
