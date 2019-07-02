// @flow

import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import Carousel from 'nuka-carousel';
import cx from 'classnames';
import { AboutSlide } from '../components/about-slide';
import { ARWrapper } from '../components/ar-wrapper';
import {
  ABOUT_SLIDE_1,
  ABOUT_SLIDE_2,
  ABOUT_SLIDE_3,
} from '../constants/about';
// import backgroundImage from '../assets/images/background/about.jpg';
import arrowLeftImage from '../assets/images/arrow-left.svg';
import arrowRightImage from '../assets/images/arrow-right.svg';
import chevronRightImage from '../assets/images/chevron-right.svg';
import chevronLeftImage from '../assets/images/chevron-left.svg';

const DELAY_FADE_INTRO = 1000;
const SLIDE_INDEXES = [1, 2, 3]; // skips empty 0 slide

type State = {
  slideIndex: number,
};

class AboutView extends PureComponent<{}, State> {
  state = {
    slideIndex: 0,
  }

  componentDidMount() {
    document.addEventListener(
      'keydown',
      debounce(this.keyboardShorcutHandler, 300),
      false,
    );

    const { slideIndex } = this.state;

    setTimeout(() => {
      if (slideIndex === 0) this.setState(() => ({ slideIndex: 1 }));
    }, DELAY_FADE_INTRO);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardShorcutHandler);
  }

  keyboardShorcutHandler = (event: Object) => {
    const { keyCode } = event;
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;

    if (keyCode === RIGHT_ARROW) {
      this.goToNextSlide();
    } else if (keyCode === LEFT_ARROW) {
      this.goToPreviousSlide();
    }
  }

  goToPreviousSlide = () => {
    this.setState((prevState) => {
      if (
        prevState.slideIndex !== 0 &&
            prevState.slideIndex !== SLIDE_INDEXES[0]
      ) {
        return {
          slideIndex: prevState.slideIndex - 1,
        };
      }

      return { slideIndex: prevState.slideIndex };
    });
  }

  goToNextSlide = () => {
    this.setState((prevState) => {
      if (prevState.slideIndex !== SLIDE_INDEXES[SLIDE_INDEXES.length - 1]) {
        return {
          slideIndex: prevState.slideIndex + 1,
        };
      }

      return { slideIndex: 1 };
    });
  }

  renderControls = () => {
    const { slideIndex } = this.state;
    const baseWidth = `calc(100% / ${SLIDE_INDEXES.length - 1})`;

    const getControlClassNames = num => cx({
      about__control: true,
      'about__control--active': slideIndex === num,
    });

    return (
      <div className='about__controls-wrapper'>
        {SLIDE_INDEXES.map(num => (
          <div // eslint-disable-line
            key={num}
            style={{ width: baseWidth }}
            className={getControlClassNames(num)}
            onClick={() => this.setState(() => ({ slideIndex: num }))}
          >
            <div className='about__control-line' style={{ }} />
          </div>
        ))}
      </div>
    );
  }

  renderNextArrow = () => {
    const { slideIndex } = this.state;

    if (slideIndex === SLIDE_INDEXES[SLIDE_INDEXES.length - 1]) return null;

    const onClick = debounce(this.goToNextSlide, 300);

    return (
      <button
        onClick={onClick}
        className='about__arrow-wrapper'
      >
        <img
          src={chevronRightImage}
          alt='Next Slide'
          className='about__arrow-next about__arrow-next--mobile'
        />
        <img
          src={arrowRightImage}
          alt='Next Slide'
          className='about__arrow-next about__arrow-next--desktop'
        />
      </button>
    );
  }

  renderPrevArrow = () => {
    const { slideIndex } = this.state;

    if (slideIndex === 0 || slideIndex === SLIDE_INDEXES[0]) return null;

    const onClick = debounce(this.goToPreviousSlide, 300);

    return (
      <button
        onClick={onClick}
        className='about__arrow-wrapper'
      >
        <img
          src={chevronLeftImage}
          alt='Previous Slide'
          className='about__arrow-prev about__arrow-prev--mobile'
        />
        <img
          src={arrowLeftImage}
          alt='Previous Slide'
          className='about__arrow-prev  about__arrow-prev--desktop'
        />
      </button>
    );
  }

  render() {
    const { slideIndex } = this.state;

    const debouncedNextSlide = debounce(this.goToNextSlide, 300);

    return (
      <div className='about'>
        <ARWrapper >
          <div className='about__slider-wrapper'>
            <Carousel
              className='about__slider'
              transitionMode='fade'
              slideIndex={slideIndex}
              renderCenterRightControls={this.renderNextArrow}
              renderCenterLeftControls={this.renderPrevArrow}
            >
              <AboutSlide
                data={[]}
                onClick={debouncedNextSlide}
                className='about-slide-0'
              />
              <AboutSlide
                data={ABOUT_SLIDE_1}
                onClick={debouncedNextSlide}
                className='about-slide-1'
              />
              <AboutSlide
                data={ABOUT_SLIDE_2}
                onClick={debouncedNextSlide}
                className='about-slide-2'
              />
              <AboutSlide
                data={ABOUT_SLIDE_3}
                onClick={debouncedNextSlide}
                className='about-slide-3'
                showLogo
              />
            </Carousel>
            {this.renderControls()}
          </div>
        </ARWrapper>
      </div>
    );
  }
}

export { AboutView };
