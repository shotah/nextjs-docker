import React from 'react';
import { Container } from 'react-bootstrap';
import Counter from '../components/counter';
import dynamic from 'next/dynamic';
export const EmblaCarousel = dynamic(() =>
  import('../components/emblacarousel')
);

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home () {
  return (
    <Container className="md-container">
      <Container>
        <h1> Welcome to Astro! </h1>
        <p> Get started! </p>
        <EmblaCarousel slides={slides} />
        <Counter />
      </Container>
    </Container>
  );
}
