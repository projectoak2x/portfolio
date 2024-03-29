import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import Link from 'next/link'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name="description" content="Orlando Sarceda Jr Portfolio" />
          <link rel="icon" href="/favico.png" />
          <meta name='theme-color' content='#000000' />
          <meta property='og:title' content='Orly' />
          <meta property='og:site_name' content='Orly' />
          <meta property='og:description' content='Orly Site' />
          <meta property='og:url' content={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/`} />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/images/favico.png' />
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <Script type='text/javascript' src='bug-min.js' strategy="beforeInteractive"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
