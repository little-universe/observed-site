// @flow

import React, { PureComponent } from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import cx from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SHARE_URL = 'https://weareobserved.com';
const SHARE_TEXT = 'Have you heard the good word about OBSERVED? The world waits...';
const SHARE_HASHTAG = 'weareobserved';

type State = {
  isDropdownOpened: boolean,
};

class ShareButton extends PureComponent<{}, State> {
  state = { isDropdownOpened: false };

  toggleDropdown = () => this.setState(prevState => ({
    isDropdownOpened: !prevState.isDropdownOpened,
  }));

  render() {
    const { isDropdownOpened } = this.state;
    const dropdownClassnames = cx({
      'share-button__dropdown': true,
      'share-button__dropdown--opened': isDropdownOpened,
    });

    return (
      <div className='share-button'>
        <div className={dropdownClassnames}>
          <TwitterShareButton
            url={SHARE_URL}
            title={SHARE_TEXT}
            hashtag={[SHARE_HASHTAG]}
          >
            <div className='share-button__dropdown-item'>
              Twitter
            </div>
          </TwitterShareButton>
          <FacebookShareButton
            url={SHARE_URL}
            quote={SHARE_TEXT}
            hashtag={`#${SHARE_HASHTAG}`}
          >
            <div className='share-button__dropdown-item'>
              Facebook
            </div>
          </FacebookShareButton>
          <CopyToClipboard text='https://weareobserved.com'>
            <button className='share-button__dropdown-item'>
              Copy Link
            </button>
          </CopyToClipboard>
        </div>
        <div className='share-button__selector-wrapper'>
          <button
            onClick={this.toggleDropdown}
            className='share-button__selector'
          >
            Share
          </button>
        </div>
      </div>
    );
  }
}

export { ShareButton };
