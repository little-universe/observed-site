// @flow

import React, { Fragment } from 'react';
import { ProjectSliderContainer } from '../containers/project-slider';
import { PROJECT_003_SLIDES } from '../constants/projects/projects';
import { ARWrapper } from '../components/ar-wrapper';

import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { LightboxContainer } from '../containers/lightbox';

export const Project003View = () => (
  <Fragment>
  <HeaderContainer />
  <MenuContainer />
  <LightboxContainer />
  <div className='project'>
    <ARWrapper>
      <ProjectSliderContainer
        projectIndex={3}
        slides={PROJECT_003_SLIDES}
      />
    </ARWrapper>
  </div>
  </Fragment>
);
