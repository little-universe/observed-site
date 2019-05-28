// @flow

import { combineReducers } from 'redux';
import { headerReducer } from './header';
import { lightboxReducer } from './lightbox';

const rootReducer = combineReducers({
  header: headerReducer,
  lightbox: lightboxReducer,
});

export default rootReducer;
