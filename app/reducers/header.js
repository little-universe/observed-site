// @flow

import {
  SET_MENU_CLOSED,
  SET_MENU_OPENED,
} from '../constants/actions';
import type { HeaderType } from '../types/header';

const initialState = {
  isMenuOpened: false,
  title: 'Gallery',
  subtitle: '001',
};

export const headerReducer = (
  state: HeaderType = initialState,
  action: Object,
) => {
  switch (action.type) {
    case SET_MENU_CLOSED:
      return {
        ...state,
        isMenuOpened: false,
      };
    case SET_MENU_OPENED:
      return {
        ...state,
        isMenuOpened: true,
      };
    default:
      return state;
  }
};
