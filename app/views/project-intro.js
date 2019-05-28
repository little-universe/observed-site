// @flow

import React from 'react';
import { ProjectSliderContainer } from '../containers/project-slider';
import { PROJECT_INTRO_SLIDES } from '../constants/projects/projects';
import { ARWrapper } from '../components/ar-wrapper';

export const ProjectIntroView = () => (
  <div className='project'>
    <ARWrapper>
      <ProjectSliderContainer
        slides={PROJECT_INTRO_SLIDES}
      />
    </ARWrapper>
  </div>
);
