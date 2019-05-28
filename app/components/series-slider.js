// @flow

import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import cx from 'classnames';
import arrowLeftImage from '../assets/images/arrow-left.svg';
import arrowRightImage from '../assets/images/arrow-right.svg';
import chevronRightImage from '../assets/images/chevron-dark-bg-right.svg';

const IS_MOBILE = window.innerWidth <= 768;

type Props = {
  projects: Array<Object>,
};

type State = {
  activeIndex: number,
};

class SeriesSlider extends PureComponent<Props, State> {
  state = {
    activeIndex: 0,
  };

  componentDidMount() {
    document.addEventListener(
      'keydown',
      debounce(this.keyboardShorcutHandler, 150),
      false,
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardShorcutHandler);
  }

  goToNextSlide = () => {
    const { projects } = this.props;

    this.setState((prevState) => {
      if (prevState.activeIndex !== (projects.length - 1)) {
        return {
          activeIndex: prevState.activeIndex + 1,
        };
      }

      return {
        activeIndex: prevState.activeIndex,
      };
    });
  }

  goToPreviousSlide = () => {
    this.setState((prevState) => {
      if (prevState.activeIndex !== 0) {
        return {
          activeIndex: prevState.activeIndex - 1,
        };
      }

      return {
        activeIndex: prevState.activeIndex,
      };
    });
  }

  goToSpecificSlide = (slideIndex: number) => {
    const { projects } = this.props;

    if (slideIndex < 0 || slideIndex > (projects.length - 1)) return;
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

  renderProjectBackgrounds = () => {
    const { projects } = this.props;
    const { activeIndex } = this.state;

    return (
      <Fragment>
        {projects.map(project => (
          <div
            key={project.id}
            className='series-slider__series-background'
            style={{
              backgroundImage: `url(${project.background})`,
              opacity: (activeIndex === project.id) ? 1 : 0,
              zIndex: project.id + 50,
            }}
          />
        ))}
      </Fragment>
    );
  }

  renderProjectDetails = () => {
    const { projects } = this.props;
    const { activeIndex } = this.state;
    const {
      title,
      year,
      subtitle,
      description,
      link,
      extraDescription,
    } = projects[activeIndex];

    const numOfProjects = projects.length - 1;
    const spacing = `calc((100% - 300px) / ${numOfProjects})`;
    const leftStyle = `calc(${activeIndex} * ${spacing})`;
    const left = IS_MOBILE ? { left: 0 } : leftStyle;

    return (
      <div
        className='series-slider__series-details'
        style={{ left }}
      >
        <div className='series-slider__title-wrapper'>
          <div className='series-slider__details-title'>
            {title}
          </div>
          <div className='series-slider__details-year'>
            ({year})
          </div>
        </div>
        {(!subtitle || subtitle === '') ? null : (
          <div className='series-slider__details-subtitle'>
            {subtitle}
          </div>
        )}
        {(!description || description === '') ? null : (
          <div className='series-slider__details-description'>
            {description}
          </div>
        )}
        {(!extraDescription || extraDescription === '') ? null : (
          <div className='series-slider__details-extra'>
            {extraDescription}
          </div>
        )}
        {(!link || link === '') ? null : (
          <Link
            to={link}
            className='series-slider__details-link'
          >
            View Project
          </Link>
        )}
      </div>
    );
  }

  renderLeftSideControl = () => {
    const { activeIndex } = this.state;

    if (activeIndex <= 0) return null;

    return (
      <Fragment>
        <div className='series-slider__left-control-wrapper'>
          <button
            className='series-slider__left-arrow'
            onClick={() => this.goToPreviousSlide()}
          >
            <img
              src={arrowLeftImage}
              alt='Next'
              className='series-slider__left-arrow-image series-slider__left-arrow-image--desktop'
            />
          </button>
        </div>
        <div className='series-slider__left-control-wrapper-mobile'>
          <button
            className='series-slider__left-arrow series-slider__left-arrow--mobile'
            onClick={() => this.goToPreviousSlide()}
          >
            <img
              src={chevronRightImage}
              alt='Next'
              className='series-slider__left-arrow-image series-slider__left-arrow-image--mobile'
            />
          </button>
        </div>
      </Fragment>
    );
  }

  renderRightSideControl = () => {
    const { activeIndex } = this.state;
    const { projects } = this.props;

    if (activeIndex >= projects.length - 1) return null;

    return (
      <Fragment>
        <div className='series-slider__right-control-wrapper'>
          <button
            className='series-slider__right-arrow'
            onClick={() => this.goToNextSlide()}
          >
            <img
              src={arrowRightImage}
              alt='Next'
              className='series-slider__right-arrow-image series-slider__right-arrow-image--desktop'
            />
          </button>
        </div>
        <div className='series-slider__right-control-wrapper-mobile'>
          <button
            className='series-slider__right-arrow series-slider__right-arrow--mobile'
            onClick={() => this.goToNextSlide()}
          >
            <img
              src={chevronRightImage}
              alt='Next'
              className='series-slider__right-arrow-image series-slider__right-arrow-image--mobile'
            />
          </button>
        </div>
      </Fragment>
    );
  }

  renderBottomControls = () => {
    const { activeIndex } = this.state;
    const { projects } = this.props;

    const getItemClassName = (project: Object) => cx({
      'series-slider__control-item': true,
      'series-slider__control-item--active': activeIndex === project.id,
    });

    const baseWidth = IS_MOBILE ?
      `calc(100%/${projects.length - 1})` :
      `calc((100% - 300px) / ${projects.length - 1})`;

    return projects.map(project => (
      <button
        key={project.id}
        style={{ width: baseWidth }}
        className={getItemClassName(project)}
        onClick={() => this.goToSpecificSlide(project.id)}
      >
        <span>{project.controlLabel || project.title}</span>
      </button>
    ));
  }

  render() {
    return (
      <div className='series-slider'>
        <div className='series-slider__content-wrapper'>
          {this.renderProjectDetails()}
        </div>
        <div className='series-slider__background-wrapper'>
          {this.renderProjectBackgrounds()}
        </div>
        <div className='series-slider__controls-wrapper'>
          {this.renderBottomControls()}
        </div>
        {this.renderLeftSideControl()}
        {this.renderRightSideControl()}
      </div>
    );
  }
}

export { SeriesSlider };
