import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class AppDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="description"
            content="&#10004;INCODEN. We design, promote, maintain and develop websites."
          />
          <meta
            name="keywords"
            content="domestic, home employ, job, helper"
          />
          <link
            rel="preload"
            href="/fonts/AvenirLTProBlack.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/AvenirLTProMedium.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}
