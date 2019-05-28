// @flow

import {
  SET_LIGHTBOX_OPENED,
  SET_LIGHTBOX_CLOSED,
} from '../constants/actions';

export const setLightboxOpened = (
  slides: Array<*>,
  currentSlide: number,
) => ({
  type: SET_LIGHTBOX_OPENED,
  payload: {
    slides,
    currentSlide,
  },
});

export const setLightboxClosed = () => ({
  type: SET_LIGHTBOX_CLOSED,
  payload: {},
});
