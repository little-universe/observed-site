// @flow

import React, { Fragment, PureComponent } from 'react';
import debounce from 'lodash.debounce';
import cx from 'classnames';
import { AudioPlayer } from './audio-player';
import { ShareButton } from './share';
import { SHOP_LINK } from '../constants/shop';
import { SLIDE_AUDIO_TYPE, SLIDE_IMAGE_TYPE } from '../constants/projects/types';
import { PROJECT_ROUTES } from '../constants/routes';
import { history } from '../store/configure';
import arrowLeftImage from '../assets/images/arrow-left.svg';
import arrowRightImage from '../assets/images/arrow-right.svg';
import projectArrowLeftImage from '../assets/images/project-arrow-left.svg';
import projectArrowRightImage from '../assets/images/project-arrow-right.svg';
import chevronRightImage from '../assets/images/chevron-dark-bg-right.svg';

// Need this to use these assets in SCSS
// $FlowFixMe
import enlargeImage from '../assets/images/gallery/enlarge.png'; // eslint-disable-line
import enlargeImageMobile from '../assets/images/gallery/enlarge-mobile.png'; // eslint-disable-line
import playButtonImage from '../assets/images/play.svg'; // eslint-disable-line

type Props = {
  // Data
  projectIndex: number,
  slides: Array<Object>,

  // Actions
  setLightboxOpened: Function,
};

type State = {
  activeIndex: number,
};

class ProjectSlider extends PureComponent<Props, State> {
  state = { activeIndex: 0 };

  componentDidMount() {
    document.addEventListener(
      'keydown',
      debounce(this.keyboardShorcutHandler, 150),
      false,
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.keyboardShorcutHandler,
    );
  }

  goToNextSlide = () => {
    const { slides } = this.props;

    this.setState((prevState) => {
      if (prevState.activeIndex !== (slides.length - 1)) {
        return { activeIndex: prevState.activeIndex + 1 };
      }

      return { activeIndex: prevState.activeIndex };
    });
  }

  goToPreviousSlide = () => {
    this.setState((prevState) => {
      if (prevState.activeIndex !== 0) {
        return { activeIndex: prevState.activeIndex - 1 };
      }

      return { activeIndex: prevState.activeIndex };
    });
  }

  goToNextProject = () => {
    const { projectIndex } = this.props;

    const isLastProject = projectIndex === PROJECT_ROUTES.length - 1;
    if (isLastProject) {
      history.push(PROJECT_ROUTES[0]);
    } else {
      history.push(PROJECT_ROUTES[projectIndex + 1]);
    }
  }

  goToPreviousProject = () => {
    const { projectIndex } = this.props;

    const isFirstProject = projectIndex === 0;
    if (isFirstProject) {
      history.push(PROJECT_ROUTES[PROJECT_ROUTES.length - 1]);
    } else {
      history.push(PROJECT_ROUTES[projectIndex - 1]);
    }
  }

  goToSpecificSlide = (slideIndex: number) => {
    const { slides } = this.props;

    if (slideIndex < 0 || slideIndex > (slides.length - 1)) return;
    this.setState(() => ({ activeIndex: slideIndex }));
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

  renderSlides = () => {
    const { slides, setLightboxOpened } = this.props;
    const { activeIndex } = this.state;
    const {
      type,
      image,
      title,
      description,
      audio,
    } = slides[activeIndex];

    const getZIndex = id => id + 50;
    const getOpacity = id => ((activeIndex === id) ? 1 : 0);
    const getVisibility = id => ((activeIndex === id) ? 'visible' : 'hidden');

    const isAudioSlide = type === SLIDE_AUDIO_TYPE;
    const isNotVideoSlide =
      type === SLIDE_AUDIO_TYPE ||
      type === SLIDE_IMAGE_TYPE;

    const imageWrapperClassnames = cx({
      'project-slider__image-wrapper': true,
      'project-slider__image-wrapper--video': !isNotVideoSlide,
    });

    return (
      <div className='project-slider__slides-wrapper'>
        {slides.map(slide => (
          <div
            key={slide.id}
            className='project-slider__slide-content'
            style={{
              zIndex: getZIndex(slide.id),
              opacity: getOpacity(slide.id),
              visibility: getVisibility(slide.id),
            }}
          >
            <button
              onClick={() => {
                setLightboxOpened(slides, activeIndex);
              }}
              className={imageWrapperClassnames}
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className='project-slider__single-content'>
              <div className='project-slider__top-content'>
                <div className='project-slider__title-wrapper'>
                  {title}
                </div>
                <div className='project-slider__description-wrapper'>
                  <div className='project-slider__description'>
                    {description}
                  </div>
                </div>
                {!isAudioSlide ? null : (
                  <AudioPlayer
                    src={audio}
                    controls
                  />
                )}
              </div>
              {!slide.isShop ? null : (
                <div className='project-slider__bottom-content'>
                  <ShareButton
                    url='https://weareobserved.com'
                  />
                  <a
                    href={SHOP_LINK}
                    className='project-slider__shop-button'
                  >
                    Shop
                  </a>
                </div>
              )}
              {slide.isShop ? null : (
                <div className='project-slider__bottom-content'>
                  <ShareButton
                    url='https://weareobserved.com'
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  renderLeftSideControl = () => {
    const { activeIndex } = this.state;

    const isFirstSlide = activeIndex <= 0;
    const goToPrevious = isFirstSlide ?
      this.goToPreviousProject : this.goToPreviousSlide;
    const arrowLeft = isFirstSlide ?
      projectArrowLeftImage : arrowLeftImage;

    return (
      <Fragment>
        <div className='project-slider__left-control-wrapper'>
          <button
            className='project-slider__left-arrow'
            onClick={() => goToPrevious()}
          >
            <img
              src={arrowLeft}
              alt='Next'
              className='project-slider__left-arrow-image project-slider__left-arrow-image--desktop'
            />
          </button>
        </div>
        <div className='project-slider__left-control-wrapper-mobile'>
          <button
            className='project-slider__left-arrow project-slider__left-arrow--mobile'
            onClick={() => goToPrevious()}
          >
            <img
              src={chevronRightImage}
              alt='Next'
              className='project-slider__left-arrow-image project-slider__left-arrow-image--mobile'
            />
          </button>
        </div>
      </Fragment>
    );
  }

  renderRightSideControl = () => {
    const { slides } = this.props;
    const { activeIndex } = this.state;

    const isLastSlide = activeIndex >= slides.length - 1;
    const goToNext = isLastSlide ?
      this.goToNextProject : this.goToNextSlide;
    const arrowRight = isLastSlide ?
      projectArrowRightImage : arrowRightImage;

    return (
      <Fragment>
        <div className='project-slider__right-control-wrapper'>
          <button
            className='project-slider__right-arrow'
            onClick={() => goToNext()}
          >
            <img
              src={arrowRight}
              alt='Next'
              className='project-slider__right-arrow-image project-slider__right-arrow-image--desktop'
            />
          </button>
        </div>
        <div className='project-slider__right-control-wrapper-mobile'>
          <button
            className='project-slider__right-arrow project-slider__right-arrow--mobile'
            onClick={() => goToNext()}
          >
            <img
              src={chevronRightImage}
              alt='Next'
              className='project-slider__right-arrow-image project-slider__right-arrow-image--mobile'
            />
          </button>
        </div>
      </Fragment>
    );
  }

  renderBottomControls = () => {
    const { slides } = this.props;
    const { activeIndex } = this.state;

    const baseWidth = `calc(100% / ${slides.length - 1})`;
    const getItemClassName = (slide: Object) => cx({
      'project-slider__control-item': true,
      'project-slider__control-item--active': activeIndex === slide.id,
    });

    return (
      <div className='project-slider__controls-wrapper'>
        {slides.map(slide => (
          <button
            key={slide.id}
            style={{ width: baseWidth }}
            className={getItemClassName(slide)}
            onClick={() => this.goToSpecificSlide(slide.id)}
          >
            <span />
          </button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className='project-slider'>
        {this.renderSlides()}
        {this.renderBottomControls()}
        {this.renderLeftSideControl()}
        {this.renderRightSideControl()}
      </div>
    );
  }
}

export { ProjectSlider };
