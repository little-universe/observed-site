// @flow

import React from 'react';
import cx from 'classnames';
import { INSTAGRAM_LINK } from '../constants/social';

type Props = {
  isNotFullWidth?: boolean,
  className?: string,
};

export const InstagramSocialComponent = (props: Props) => {
  const { isNotFullWidth, className } = props;
  const buttonClassnames = cx({
    social: true,
    'social--not-fw': isNotFullWidth,
    'share-button__dropdown-item': true,
    'share-button__dropdown-item--link': true,
  }, className);

  return (
    <a
      href={INSTAGRAM_LINK}
      className={buttonClassnames}
      target='_blank'
      rel='noopener noreferrer'
    >
      Instagram
    </a>
  );
};

InstagramSocialComponent.defaultProps = {
  isNotFullWidth: false,
  className: '',
};
