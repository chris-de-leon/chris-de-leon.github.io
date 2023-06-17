import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    const gtag = 'G-BB0Z8BSLC8'
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
            rel="stylesheet"
          />
          {process.env['NODE_ENV'] === 'production' && (
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
              strategy="afterInteractive"
            />
          )}
          {process.env['NODE_ENV'] === 'production' && (
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
