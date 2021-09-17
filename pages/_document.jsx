import React from 'react';
import crypto from 'crypto'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const cspHashOf = (text) => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  return `'sha256-${hash.digest('base64')}'`
}

// const generateCsp = () => {
//   const production = process.env.NODE_ENV === 'production';

//   let csp = ``;
//   csp += `default-src 'none';`;
//   csp += `base-uri 'self';`;
//   csp += `style-src https://fonts.googleapis.com 'unsafe-inline';`; // NextJS requires 'unsafe-inline'
//   csp += `script-src 'nonce-${nonce}' 'self' ${production ? '' : "'unsafe-eval'"};`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
//   csp += `font-src https://fonts.gstatic.com;`;
//   if (!production) csp += `connect-src 'self';`;
//   csp += `${cspHashOf(NextScript.getInlineScriptSource(this.props))}`;

//   return csp;
// };

export default class MyDocument extends Document {
  render() {
    let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
      NextScript.getInlineScriptSource(this.props)
    )}`
    if (process.env.NODE_ENV !== 'production') {
      csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
      )}`
    }

    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
