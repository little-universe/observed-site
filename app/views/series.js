// @flow

import React, { Fragment } from 'react';
import { SeriesSlider } from '../components/series-slider';
import { ARWrapper } from '../components/ar-wrapper';
import { SERIES } from '../constants/series';

import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { LightboxContainer } from '../containers/lightbox';

export const SeriesView = () => (
  <Fragment>
  <HeaderContainer />
  <MenuContainer />
  <LightboxContainer />
  <div className='series'>
    <ARWrapper>
      <SeriesSlider projects={SERIES} />
    </ARWrapper>
  </div>
  </Fragment>
);
