// @flow

import React, { Fragment } from 'react';
import { ProjectSliderContainer } from '../containers/project-slider';
import { PROJECT_002_SLIDES } from '../constants/projects/projects';
import { ARWrapper } from '../components/ar-wrapper';

import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { LightboxContainer } from '../containers/lightbox';

export const Project002View = () => (
  <Fragment>
  <HeaderContainer />
  <MenuContainer />
  <LightboxContainer />
  <div className='project'>
    <ARWrapper>
      <ProjectSliderContainer
        projectIndex={2}
        slides={PROJECT_002_SLIDES}
      />
    </ARWrapper>
  </div>
  </Fragment>
);
