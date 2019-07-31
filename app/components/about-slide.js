// @flow

import React from 'react';
import { ulid } from 'ulid';
import logoImage from '../assets/images/logo.svg';

type Props = {
  data: Array<string>,
  showLogo?: boolean,
  onClick: Function,
  className: string
}

export const AboutSlide = (props: Props) => (
  <button
    className={`about__slide ${props.className}`}
    onClick={props.onClick}
  >
    <div className='about__slide-content'>
      {props.data.length ?
        props.data.map(p => (
          <p
            key={ulid()}
            className='about__paragraph'
          >
            {p}
          </p>
        )) : null
      }
      {!props.showLogo ? null : (
        <div className='about__logo-wrapper'>
          <img
            src={logoImage}
            alt='Observed'
            className='about__logo'
          />
        </div>
      )}
    </div>
  </button>
);

AboutSlide.defaultProps = {
  showLogo: false,
};
