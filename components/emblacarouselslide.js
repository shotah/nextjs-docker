import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import Image from 'next/image';
const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

export const Slide = ({ imgSrc, inView }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <div className={`embla__slide ${hasLoaded ? "has-loaded" : ""}`}>
      <div className="embla__slide__inner">
        <Image
          className="embla__slide__img"
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          onLoad={setLoaded}
          alt="A cool something."
          layout='fill'
        />
      </div>
    </div>
  );
};

Slide.propTypes = {
  imgSrc: PropTypes.object,
  inView: PropTypes.func
};
