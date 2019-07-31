// @flow

import React from 'react';
import { ProjectSliderContainer } from '../containers/project-slider';
import { PROJECT_004_SLIDES } from '../constants/projects/projects';
import { ARWrapper } from '../components/ar-wrapper';

export const Project004View = () => (
  <div className='project'>
    <ARWrapper>
      <ProjectSliderContainer
        projectIndex={4}
        slides={PROJECT_004_SLIDES}
      />
    </ARWrapper>
  </div>
);
