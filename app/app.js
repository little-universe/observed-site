// @flow

import React from 'react';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configure';
import Router from './router';
import { GA_TRACKING_CODE } from './constants/analytics';

const store = configureStore({});

ReactGA.initialize(GA_TRACKING_CODE);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);
