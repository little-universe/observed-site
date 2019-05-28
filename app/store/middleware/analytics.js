// @flow

import ReactGA from 'react-ga';

const ROUTER_CHANGE_PAGE = '@@router/LOCATION_CHANGE';

const options = {};
const trackPage = (page) => {
  ReactGA.set({
    page,
    ...options,
  });

  ReactGA.pageview(page);
};

let currentPage = '';

export const googleAnalyticsMiddleware = () => (next: Function) =>
  (action: Object) => {
    if (action.type === ROUTER_CHANGE_PAGE) {
      const nextPage = `${action.payload.pathname}${action.payload.search}`;

      if (currentPage !== nextPage) {
        currentPage = nextPage;
        trackPage(nextPage);
      }
    }

    return next(action);
  };
