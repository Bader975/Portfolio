import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang="en">
      <Head>

        <meta charSet="UTF-8" />
        <meta name="description" content="This is my portfolio website showcasing my work and skills."/>
        <meta name="keywords" content="portfolio, web development, design, projects"/>
        <link rel="canonical" href="https://www.portfolio-bader.online" />
        <meta name="author" content="Bader Alyami"/>
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
