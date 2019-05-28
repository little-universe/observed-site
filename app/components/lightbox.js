// @flow

import React, { PureComponent } from 'react';
import cx from 'classnames';
import debounce from 'lodash.debounce';
import {
  Player,
  ControlBar,
  BigPlayButton,
} from 'video-react';
import { ClickOutsideComponent } from './click-outside';
import {
  SLIDE_IMAGE_TYPE,
  SLIDE_AUDIO_TYPE,
} from '../constants/projects/types';
import { isMobile } from '../utils/mobile';
import closeImage from '../assets/images/gallery-close.svg';
import arrowLeftImage from '../assets/images/arrow-left.svg';
import arrowRightImage from '../assets/images/arrow-right.svg';
import chevronRightImage from '../assets/images/chevron-dark-bg-right.svg';

type Props = {
  // Data
  lightbox: Object,

  // Actions
  setLightboxClosed: Function,
}

type State = {
  currentSlide: number,
};

class LightboxComponent extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentSlide: props.lightbox.currentSlide,
    };
  }

  componentDidMount() {
    document.addEventListener(
      'keydown',
      debounce(this.keyboardShorcutHandler, 150),
      false,
    );
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.lightbox.slides.length) {
      this.setState(() => ({
        currentSlide: nextProps.lightbox.currentSlide,
      }));
    }
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.keyboardShorcutHandler,
    );
  }

  getVideoRef = (ref: any) => {
    this.videoRef = ref;
  }

  videoRef: any;

  keyboardShorcutHandler = (event: Object) => {
    const { setLightboxClosed } = this.props;
    const { keyCode } = event;
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;
    const ESC_KEY = 27;

    if (keyCode === RIGHT_ARROW) {
      this.goToNextSlide();
    } else if (keyCode === LEFT_ARROW) {
      this.goToPreviousSlide();
    } else if (keyCode === ESC_KEY) {
      setLightboxClosed();
      this.videoRef.pause(); // stop video
    }
  }

  goToNextSlide = () => {
    const { lightbox: { slides } } = this.props;

    this.setState((prevState) => {
      if (prevState.currentSlide !== (slides.length - 1)) {
        return { currentSlide: prevState.currentSlide + 1 };
      }

      return { currentSlide: prevState.currentSlide };
    });
  }

  goToPreviousSlide = () => {
    this.setState((prevState) => {
      if (prevState.currentSlide !== 0) {
        return { currentSlide: prevState.currentSlide - 1 };
      }

      return { currentSlide: prevState.currentSlide };
    });
  }

  renderLeftSideControl = () => {
    const { currentSlide } = this.state;

    if (currentSlide <= 0) return null;

    const onClick = () => {
      if (this.videoRef) this.videoRef.pause();
      this.goToPreviousSlide();
    };

    return (
      <div
        id='left-arrow'
        className='lightbox__left-control-wrapper'
      >
        <button
          id='left-arrow'
          className='lightbox__left-arrow'
          onClick={onClick}
        >
          <img
            id='left-arrow'
            src={arrowLeftImage}
            alt='Previous'
            className='lightbox__left-arrow-image lightbox__left-arrow-image--desktop'
          />
          <div
            id='left-arrow'
            className='lightbox__left-arrow-mobile-wrapper'
          >
            <img
              id='left-arrow'
              src={chevronRightImage}
              alt='Previous'
              className='lightbox__left-arrow-image lightbox__left-arrow-image--mobile'
            />
          </div>
        </button>
      </div>
    );
  }

  renderRightSideControl = () => {
    const { lightbox: { slides } } = this.props;
    const { currentSlide } = this.state;

    if (currentSlide >= slides.length - 1) return null;

    const onClick = () => {
      if (this.videoRef) this.videoRef.pause();
      this.goToNextSlide();
    };

    return (
      <div
        id='right-arrow'
        className='lightbox__right-control-wrapper'
      >
        <button
          id='right-arrow'
          className='lightbox__right-arrow'
          onClick={onClick}
        >
          <img
            id='right-arrow'
            src={arrowRightImage}
            alt='Next'
            className='lightbox__right-arrow-image lightbox__right-arrow-image--desktop'
          />
          <div
            id='right-arrow'
            className='lightbox__right-arrow-mobile-wrapper'
          >
            <img
              id='right-arrow'
              src={chevronRightImage}
              alt='Next'
              className='lightbox__right-arrow-image lightbox__right-arrow-image--mobile'
            />
          </div>
        </button>
      </div>
    );
  }

  renderImage = () => {
    const { currentSlide } = this.state;
    const {
      setLightboxClosed,
      lightbox: { slides },
    } = this.props;
    const currentSlideObj = slides.length ? slides[currentSlide] : {};

    const onClickOutside = (event) => {
      const { target } = event;

      if (
        target.id !== 'right-arrow' &&
        target.id !== 'left-arrow'
      ) {
        event.preventDefault();
        setLightboxClosed();
      }
    };

    return (
      <ClickOutsideComponent
        className='lightbox__click-outside'
        onClickOutside={onClickOutside}
      >
        <img
          src={currentSlideObj.image}
          alt='Observed'
        />
      </ClickOutsideComponent>
    );
  }

  renderVideo = () => {
    const { currentSlide } = this.state;
    const {
      setLightboxClosed,
      lightbox: {
        slides,
      },
    } = this.props;
    const currentSlideObj = slides.length ? slides[currentSlide] : {};

    const closeVideo = () => {
      setLightboxClosed();
      this.videoRef.pause();
    };

    const onClickOutside = (event) => {
      const { target } = event;

      if (
        target.id === 'right-arrow' ||
        target.id === 'left-arrow'
      ) {
        this.videoRef.pause();
      } else {
        this.videoRef.pause();
        setLightboxClosed();
      }
    };

    return (
      <ClickOutsideComponent
        className='lightbox__video-wrapper'
        onClickOutside={onClickOutside}
      >
        <button
          className='lightbox__close lightbox__close--video'
          onClick={closeVideo}
        >
          <img
            src={closeImage}
            alt='Close'
          />
        </button>
        <Player
          autoPlay
          aspectRatio='16:9'
          src={currentSlideObj.video}
          poster={!isMobile() ? null : currentSlideObj.image}
          ref={this.getVideoRef}
        >
          <ControlBar autoHide />
          <BigPlayButton position='center' />
        </Player>
      </ClickOutsideComponent>
    );
  }

  render() {
    const {
      lightbox: { isLightboxOpened, slides },
      setLightboxClosed,
    } = this.props;
    const { currentSlide } = this.state;
    const currentSlideObj = slides.length ? slides[currentSlide] : {};

    const isNotVideoSlide =
      currentSlideObj.type === SLIDE_IMAGE_TYPE ||
      currentSlideObj.type === SLIDE_AUDIO_TYPE;

    const lightboxClassnames = cx({
      lightbox__container: true,
      'lightbox__container--opened': isLightboxOpened,
    });

    return (
      <div className={lightboxClassnames}>
        <div className='lightbox__content'>
          {this.renderLeftSideControl()}
          {this.renderRightSideControl()}
          <div className='lightbox__asset-wrapper'>
            <button
              className='lightbox__close'
              onClick={setLightboxClosed}
            >
              <img
                src={closeImage}
                alt='Close'
              />
            </button>
            {
              isNotVideoSlide ?
                this.renderImage() :
                this.renderVideo()
            }
          </div>
        </div>
      </div>
    );
  }
}

export { LightboxComponent };
