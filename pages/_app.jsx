import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import NavBar from '../components/navbar';

import '../style/index.css';

export default function MyApp ({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>Astro</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};
