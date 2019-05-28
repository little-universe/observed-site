// @flow

import React from 'react';
import cx from 'classnames';

type Props = {
  children: any,
  backgroundImage?: string,
  isContactPage?: boolean,
}

export const ARWrapper = (props: Props) => {
  const arWrapperClassnames = cx({
    'ar-wrapper': true,
    'ar-wrapper--contact-page': props.isContactPage,
  });

  return (
    <div
      className={arWrapperClassnames}
      style={{
        backgroundImage: `url(${String(props.backgroundImage)})`,
      }}
    >
      <div className='ar-wrapper__content'>
        {props.children}
      </div>
    </div>
  );
};

ARWrapper.defaultProps = {
  backgroundImage: '',
  isContactPage: false,
};
