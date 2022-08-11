import Head from 'next/head';
import '../styles/globals.scss';
import '../components/FollowToggle/FollowToggle.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Card</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
