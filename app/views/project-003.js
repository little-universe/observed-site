// @flow

import React from 'react';
import { ProjectSliderContainer } from '../containers/project-slider';
import { PROJECT_003_SLIDES } from '../constants/projects/projects';
import { ARWrapper } from '../components/ar-wrapper';

export const Project003View = () => (
  <div className='project'>
    <ARWrapper>
      <ProjectSliderContainer
        projectIndex={3}
        slides={PROJECT_003_SLIDES}
      />
    </ARWrapper>
  </div>
);
