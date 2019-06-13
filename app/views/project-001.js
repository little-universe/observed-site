// @flow

import React from 'react';
import { ProjectSliderContainer } from '../containers/project-slider';
import { PROJECT_001_SLIDES } from '../constants/projects/projects';
import { ARWrapper } from '../components/ar-wrapper';

export const Project001View = () => (
  <div className='project'>
    <ARWrapper>
      <ProjectSliderContainer
        projectIndex={1}
        slides={PROJECT_001_SLIDES}
      />
    </ARWrapper>
  </div>
);
