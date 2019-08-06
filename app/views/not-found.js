// @flow

import React, { Fragment } from 'react';

import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { LightboxContainer } from '../containers/lightbox';

export const NotFoundView = () => (
  <Fragment>
  <HeaderContainer />
  <MenuContainer />
  <LightboxContainer />
    <div>Not Found | 404</div>
  </Fragment>
);
