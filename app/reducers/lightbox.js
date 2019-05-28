// @flow

import {
  SET_LIGHTBOX_CLOSED,
  SET_LIGHTBOX_OPENED,
} from '../constants/actions';
import type { LightboxType } from '../types/lightbox';

const initialState = {
  isLightboxOpened: false,
  slides: [],
  currentSlide: 0,
};

export const lightboxReducer = (
  state: LightboxType = initialState,
  action: Object,
) => {
  switch (action.type) {
    case SET_LIGHTBOX_CLOSED:
      return {
        ...initialState,
      };
    case SET_LIGHTBOX_OPENED:
      return {
        ...state,
        slides: action.payload.slides,
        currentSlide: action.payload.currentSlide,
        isLightboxOpened: true,
      };
    default:
      return state;
  }
};
