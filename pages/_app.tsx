import '../styles/styles.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blindharp Studio - Atelier of Wonder</title>
        <meta name="description" content="An independent video game development studio." />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
