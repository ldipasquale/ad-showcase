import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import globalStyle from '../stylesheets/global.sass'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head } = renderPage()
    return { html, head }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/static/css/bundle.css' />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}