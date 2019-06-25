import { SHOP_LINK } from '../constants/shop';
import { trackClickedToShop } from './analytics';

export const navigateToShop = (e) => {
  if (e) e.preventDefault();
  trackClickedToShop();
  window.location.assign(SHOP_LINK);
};
