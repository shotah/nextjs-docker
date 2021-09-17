import React from 'react';
import { Container } from 'react-bootstrap';
import Counter from '../components/counter';
import LazyLoad from 'react-lazyload';
import EmblaCarousel from '../components/emblacarousel';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home () {
  return (
      <Container className='md-container'>
        <Container>
          <h1> Welcome to Astro! </h1>
          <p> Get started! </p>
          <LazyLoad>
            <EmblaCarousel slides={slides} />
          </LazyLoad>
        <Counter />
        </Container>
      </Container>
  );
}
