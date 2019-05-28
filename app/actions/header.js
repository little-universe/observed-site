// @flow

import {
  SET_MENU_OPENED,
  SET_MENU_CLOSED,
} from '../constants/actions';

export const setMenuOpened = () => ({
  type: SET_MENU_OPENED,
  payload: {},
});

export const setMenuClosed = () => ({
  type: SET_MENU_CLOSED,
  payload: {},
});
