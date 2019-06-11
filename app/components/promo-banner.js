// @flow

import React from 'react';
import cx from 'classnames';

type Props = {
  isHomePage?: boolean,
}

export const PromoBanner = (props: Props) => {
  const promoBannerClassnames = cx({
    'promo-banner': true,
    'promo-banner--homepage': props.isHomePage,
  });

  return (
    <a href='https://shop.weareobserved.com/'>
      <div
        className={promoBannerClassnames}
        style={{ }}
      >
        <div className='promo-banner__content'>
          <p className='promo-banner__statement'>Our web shop is now live.</p>
        </div>
      </div>
    </a>
  );
};

PromoBanner.defaultProps = {
  isHomePage: false,
};
