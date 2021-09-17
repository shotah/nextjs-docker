import '../style/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import Header from '../components/header';
import Footer from '../components/footer';

export default function MyApp ({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};
