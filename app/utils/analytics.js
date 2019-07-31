import ReactGA from 'react-ga';
import {
  CLICKED_TO_ENTER,
  CLICKED_TO_SHOP,
  EXPANDED_IMAGE,
  CLICKED_TO_GALLERY,
} from '../constants/analytics';

export const trackClickedToEnter = () => {
  ReactGA.event(CLICKED_TO_ENTER);
};
export const trackClickedToShop = () => {
  ReactGA.event(CLICKED_TO_SHOP);
};
export const trackExpandedImage = () => {
  ReactGA.event(EXPANDED_IMAGE);
};
export const trackClickedToGallery = () => {
  ReactGA.event(CLICKED_TO_GALLERY);
};
