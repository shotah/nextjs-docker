import React from 'react';
import Image from 'next/image';
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
          <Container>
            <Counter />
          </Container>
        </Container>

        <footer className="cntr-footer">
          <a
            href="http://bldhosting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              src="/astro_logo.svg"
              alt="Astro Logo"
              className="sml-logo"
              width="50"
              height="50"
            />
          </a>
        </footer>
      </Container>
  );
}
