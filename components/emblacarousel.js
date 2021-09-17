import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { PrevButton, NextButton } from './emblacarouselbuttons';
import { useEmblaCarousel } from 'embla-carousel/react';
import { mediaByIndex } from '../public';

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <Image
                  className='embla__slide__img'
                  src={mediaByIndex(index)}
                  alt='A cool something.'
                  width='670'
                  height='400'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

EmblaCarousel.propTypes = {
  slides: PropTypes.object
};

export default EmblaCarousel;
