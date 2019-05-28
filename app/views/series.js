// @flow

import React from 'react';
import { SeriesSlider } from '../components/series-slider';
import { ARWrapper } from '../components/ar-wrapper';
import { SERIES } from '../constants/series';

export const SeriesView = () => (
  <div className='series'>
    <ARWrapper>
      <SeriesSlider projects={SERIES} />
    </ARWrapper>
  </div>
);
