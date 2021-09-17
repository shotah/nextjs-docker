import Head from 'next/head';
import NavBar from './navbar';

export default function Header () {
  return (
    <>
      <Head>
        <title>Astro</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <NavBar />
    </>
  );
}