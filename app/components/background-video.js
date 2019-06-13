// @flow

import React from 'react';
import cx from 'classnames';

type Props = {
  isHomePage?: boolean,
}

export const BackgroundVideo = (props: Props) => {
  const backgroundVideoClassnames = cx({
    'background-video': true,
    'background-video--homepage': props.isHomePage,
  });

  return (
    <div
      className={backgroundVideoClassnames}
      style={{ }}
    >
      <div className='background-video__content'>
        <video className='background-video__video' src="https://lu-assets.s3.us-east-2.amazonaws.com/observed/7666480-preview-optimized.mp4" playsinline autoplay muted loop></video>
      </div>
    </div>
  );
};

BackgroundVideo.defaultProps = {
  isHomePage: false,
};
