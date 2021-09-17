import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useEmblaCarousel } from 'embla-carousel/react';
import { PrevButton, NextButton } from './emblacarouselbuttons';
import { Slide } from "./emblacarouselslide";
import { mediaByIndex } from '../public';

const EmblaCarousel = ({ slides }) => {
  const [slidesInView, setSlidesInView] = useState([]);
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

  const findSlidesInView = useCallback(() => {
    if (!embla) return;

    setSlidesInView((slidesInView) => {
      if (slidesInView.length === embla.slideNodes().length) {
        embla.off("select", findSlidesInView);
      }
      const inView = embla
        .slidesInView(true)
        .filter((index) => slidesInView.indexOf(index) === -1);
      return slidesInView.concat(inView);
    });
  }, [embla, setSlidesInView]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    findSlidesInView();
    embla.on("select", onSelect);
    embla.on("select", findSlidesInView);
  }, [embla, onSelect, findSlidesInView]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <Slide
              key={index}
              imgSrc={mediaByIndex(index)}
              inView={slidesInView.indexOf(index) > -1}
            />
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

EmblaCarousel.propTypes = {
  slides: PropTypes.array
};

export default EmblaCarousel;
