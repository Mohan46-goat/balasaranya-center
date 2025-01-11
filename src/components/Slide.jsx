import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import "../styles/Slide.scss";

const Slide = ({ imageSrc, title, subtitle }) => (
  <>
    <img src={imageSrc} alt={title} />
    <div className="carousel-caption">
      <h3 className="carousel-caption-title">{title}</h3>
      <p className="carousel-caption-subtitle">{subtitle}</p>
    </div>
  </>
);

const CarouselButton = ({ useTriangle, color, disabled, clickHandler, icon, isLeftIcon }) => (
  <div className={`carousel-${isLeftIcon ? 'left' : 'right'}-arrow carousel-control`}>
    <div
      className={useTriangle ? `${isLeftIcon ? 'left' : 'right'}-triangle` : ''}
      style={{
        ...(isLeftIcon
          ? { borderLeftColor: useTriangle ? color : '' }
          : { borderRightColor: useTriangle ? color : '' }),
      }}
    />
    <button
      className={!useTriangle ? `padding-${isLeftIcon ? 'left' : 'right'}-15` : ''}
      disabled={disabled}
      onClick={clickHandler}
    >
      {icon}
    </button>
  </div>
);

const CarouselIndicators = ({
  position,
  nextActiveIndex,
  indicatorsColor,
  clickHandler,
  slides,
}) => (
  <ol className={`carousel-indicators ${position}`}>
    {slides.map((el, i) => (
      <li
        key={i}
        className={i === nextActiveIndex ? 'active' : ''}
        style={{ '--indicatorsColor': indicatorsColor }}
        onClick={() => {
          slides.length !== 1 && i !== nextActiveIndex ? clickHandler(i) : null;
        }}
      />
    ))}
  </ol>
);

const Carousel = ({
  autoPlay = false,
  activeSlideDuration = 3000,
  interactionMode = 'swipe',
  indicatorsColor = '#ffffff',
  alignIndicators = 'center',
  alignCaption = 'center',
  useRightLeftTriangles = false,
  leftTriangleColor = '#ffffff',
  leftIcon,
  rightTriangleColor = '#ffffff',
  rightIcon,
  slides = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextActiveIndex, setNextActiveIndex] = useState(0);
  const [activeIndexClasses, setActiveIndexClasses] = useState(['active-slide']);
  const [nextActiveIndexClasses, setNextActiveIndexClasses] = useState([]);
  const [disablePrevNext, setDisablePrevNext] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(null);
  const [indicatorPosition, setIndicatorPosition] = useState('position-center');
  const animationDuration = 600;
  const autoSlide = useRef(null);
  const direction = useRef('to-left');

  useEffect(() => {
    if (alignIndicators === 'right') {
      setIndicatorPosition('position-right');
    } else if (alignIndicators === 'left') {
      setIndicatorPosition('position-left');
    }
  }, [alignIndicators]);

  const animateSliding = useCallback(() => {
    let newActiveIndexClasses = [];
    let newNextActiveIndexClasses = [];

    if (direction.current === 'to-left') {
      newActiveIndexClasses.push('active-slide', 'exit-to-left');
      newNextActiveIndexClasses.push('active-slide', 'next-active-slide', 'enter-to-left');
    } else {
      newActiveIndexClasses.push('active-slide', 'exit-to-right');
      newNextActiveIndexClasses.push('active-slide', 'next-active-slide', 'enter-to-right');
    }

    setActiveIndexClasses(newActiveIndexClasses);
    setNextActiveIndexClasses(newNextActiveIndexClasses);
  }, []);

  const setActiveSlide = (nextActiveI) => {
    setActiveIndex(nextActiveI);
    setActiveIndexClasses(['active-slide']);
    setNextActiveIndexClasses([]);
    setDisablePrevNext(false);
  };

  const restartAutoSliding = useCallback(
    (nextAcIn) => {
      setNextActiveIndex(nextAcIn);
      setDisablePrevNext(true);
      animateSliding();

      let startId = null;
      startId = setTimeout(() => {
        setActiveSlide(nextAcIn);
        clearInterval(startId);
      }, animationDuration);

      autoSlide.current = autoPlay
        ? setInterval(() => {
            stopAutoSliding();
            direction.current = 'to-left';
            let nextActiveI = activeIndex + 1;
            if (nextActiveI === slides.length) {
              nextActiveI = 0;
            }
            restartAutoSliding(nextActiveI);
          }, activeSlideDuration)
        : null;
    },
    [animateSliding, activeSlideDuration, activeIndex, autoPlay, slides.length]
  );

  const nextSlide = useCallback(() => {
    stopAutoSliding();
    direction.current = 'to-left';
    let nextActiveI = activeIndex + 1;
    if (nextActiveI === slides.length) {
      nextActiveI = 0;
    }
    restartAutoSliding(nextActiveI);
  }, [activeIndex, slides.length, restartAutoSliding]);

  const startAutoSliding = useCallback(() => {
    autoSlide.current = autoPlay ? setInterval(nextSlide, activeSlideDuration) : null;
  }, [autoPlay, activeSlideDuration, nextSlide]);

  const stopAutoSliding = () => {
    clearInterval(autoSlide.current);
  };

  useEffect(() => {
    startAutoSliding();
    return () => stopAutoSliding();
  }, [startAutoSliding]);

  const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);
  const getSetXCoordinate = (e) => setXCoordinate(unify(e).clientX);
  const moveSlide = (e) => {
    if (xCoordinate || xCoordinate === 0) {
      const dx = unify(e).clientX - xCoordinate;
      const s = Math.sign(dx);
      if (s < 0) {
        nextSlide();
      } else if (s > 0) {
        prevSlide();
      }
    }
  };

  const prevSlide = () => {
    stopAutoSliding();
    direction.current = 'to-right';
    let nextActiveI = activeIndex - 1;
    if (nextActiveI < 0) {
      nextActiveI = slides.length - 1;
    }
    restartAutoSliding(nextActiveI);
  };

  const onCarouselIndicator = (index) => {
    stopAutoSliding();
    let nextActiveI = index;
    if (nextActiveI < activeIndex) {
      direction.current = 'to-right';
    } else {
      direction.current = 'to-left';
    }
    restartAutoSliding(nextActiveI);
  };

  return (
    <div
      className="carousel-slider-wrapper"
      style={{
        cursor: interactionMode === 'swipe' ? 'pointer' : '',
      }}
      onMouseDown={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        getSetXCoordinate(e);
      }}
      onTouchStart={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        getSetXCoordinate(e);
      }}
      onMouseUp={(e) => {
        if (disablePrevNext || interactionMode !== 'swipe') {
          return;
        }
        moveSlide(e);
      }}
      onTouchEnd={(e) => {
        if (disablePrevNext || interactionMode !== 'swipe') {
          return;
        }
        moveSlide(e);
      }}
      onMouseMove={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        e.preventDefault();
      }}
      onTouchMove={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        e.preventDefault();
      }}
    >
      {slides.map((el, i) => {
        let classes = '';
        if (i === activeIndex) {
          classes = activeIndexClasses.join(' ');
        } else if (i === nextActiveIndex) {
          classes = nextActiveIndexClasses.join(' ');
        }

        return (
          <div
            key={i}
            className={`carousel-slide ${classes} ${interactionMode === 'swipe' ? 'swipe' : ''}`}
            style={{ textAlign: alignCaption }}
            onMouseEnter={() => {
              if (interactionMode !== 'hover') {
                return;
              }
              stopAutoSliding();
            }}
            onMouseLeave={() => {
              if (interactionMode !== 'hover') {
                return;
              }
              startAutoSliding();
            }}
          >
            <Slide imageSrc={el.image} title={el.title} subtitle={el.subtitle} />
          </div>
        );
      })}
      <CarouselButton
        useTriangle={useRightLeftTriangles}
        color={leftTriangleColor}
        disabled={disablePrevNext}
        clickHandler={() => {
          slides.length !== 1 ? prevSlide() : null;
        }}
        icon={
          leftIcon ? (
            leftIcon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              fill={useRightLeftTriangles ? '#000000' : '#ffffff'}
            >
              <path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
            </svg>
          )
        }
        isLeftIcon
      />
      <CarouselButton
        useTriangle={useRightLeftTriangles}
        color={rightTriangleColor}
        disabled={disablePrevNext}
        clickHandler={() => {
          slides.length !== 1 ? nextSlide() : null;
        }}
        icon={
          rightIcon ? (
            rightIcon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              fill={useRightLeftTriangles ? '#000000' : '#ffffff'}
            >
              <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
            </svg>
          )
        }
      />
      <CarouselIndicators
        position={indicatorPosition}
        nextActiveIndex={nextActiveIndex}
        indicatorsColor={indicatorsColor}
        clickHandler={onCarouselIndicator}
        slides={slides}
      />
    </div>
  );
};

// Add default export for Carousel
export default Carousel;
