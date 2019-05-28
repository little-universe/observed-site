// @flow

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AboutView } from '../views/about';
import { ContactView } from '../views/contact';
import { SeriesView } from '../views/series';
import { NotFoundView } from '../views/not-found';
import { ShopView } from '../views/shop';
import { HomeView } from '../views/home';
import { Project001View } from '../views/project-001';
import { Project002View } from '../views/project-002';
import { Project003View } from '../views/project-003';

import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { LightboxContainer } from '../containers/lightbox';

import {
  SERIES_ROUTE,
  PROJECT_INTRO_ROUTE,
  PROJECT_001_ROUTE,
  PROJECT_002_ROUTE,
  PROJECT_003_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
  SHOP_ROUTE,
  HOME_ROUTE,
} from '../constants/routes';
import { ProjectIntroView } from '../views/project-intro';

export default () => (
  <Fragment>
    <HeaderContainer />
    <MenuContainer />
    <LightboxContainer />
    <Switch>
      <Route
        path={HOME_ROUTE}
        exact
        component={HomeView}
      />
      <Route
        path={CONTACT_ROUTE}
        component={ContactView}
      />
      <Route
        path={SHOP_ROUTE}
        component={ShopView}
      />
      <Route
        path={ABOUT_ROUTE}
        component={AboutView}
      />
      <Route
        path={SERIES_ROUTE}
        component={SeriesView}
      />
      <Route
        path={PROJECT_INTRO_ROUTE}
        component={ProjectIntroView}
      />
      <Route
        path={PROJECT_001_ROUTE}
        component={Project001View}
      />
      <Route
        path={PROJECT_002_ROUTE}
        component={Project002View}
      />
      <Route
        path={PROJECT_003_ROUTE}
        component={Project003View}
      />
      <Route component={NotFoundView} />
    </Switch>
  </Fragment>
);
