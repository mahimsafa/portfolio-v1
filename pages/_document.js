import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <meta property="og:url"                content="mahimsafa.github.io" />
        <meta property="og:image"              content="https://mahimsafa.github.io/images/me/me1.jpg" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument