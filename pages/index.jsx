import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Counter from '../components/counter';

export default function Home () {
  return (
      <Container className="md-container">
        <Container>
          <h1>
            Welcome to Astro!
          </h1>
          <p>
            Get started by editing <code>pages/index.js</code>
          </p>
        <Counter />
        </Container>
      </Container>
  );
}
