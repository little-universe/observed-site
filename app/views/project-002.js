// @flow

import React from 'react';
import { ProjectSliderContainer } from '../containers/project-slider';
import { PROJECT_002_SLIDES } from '../constants/projects/projects';
import { ARWrapper } from '../components/ar-wrapper';

export const Project002View = () => (
  <div className='project'>
    <ARWrapper>
      <ProjectSliderContainer
        projectIndex={2}
        slides={PROJECT_002_SLIDES}
      />
    </ARWrapper>
  </div>
);
