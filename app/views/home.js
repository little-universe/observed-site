// @flow

import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { SERIES_ROUTE } from '../constants/routes';
import { isMobile } from '../utils/mobile';
import loopImageAsset from '../assets/images/loop.gif';
import fadeImageAsset from '../assets/images/fade.gif';
import { trackClickedToEnter } from '../utils/analytics';

import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { LightboxContainer } from '../containers/lightbox';

type Props = {};
type State = {
  isLooping: boolean,
  showButton: boolean,
}

class HomeView extends PureComponent<Props, State> {
  state = {
    isLooping: false,
    showButton: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        isLooping: true,
      }));
    }, 0);
  }

  render() {
    const {
      isLooping,
      showButton,
    } = this.state;

    const fadeImage = `${fadeImageAsset.replace(/\?.*$/, '')}?x=${Math.random()}`;
    const loopImage = `${loopImageAsset.replace(/\?.*$/, '')}?x=${Math.random()}`;

    const loopImageClassNames = cx({
      'home__loop-image': true,
      'home__loop-image--active': isLooping,
    });

    const actionsWrapperClasses = cx({
      'home__actions-wrapper': true,
      'home__actions-wrapper--mobile': isMobile(),
      'home__actions-wrapper--active': showButton,
    });

    const fadeImageStyles = {
      backgroundImage: `url(${fadeImage})`,
    };

    const loopImageStyles = {
      backgroundImage: `url(${loopImage})`,
    };

    return (
      <Fragment>
      <HeaderContainer />
      <MenuContainer />
      <LightboxContainer />
      <div className='home'>
        <div className={actionsWrapperClasses}>
          <Link
            to={SERIES_ROUTE}
            className='home__actions-button'
            onClick={trackClickedToEnter}
          >
            <span className="top"/>
            <span className="bottom"/>
            <span className="left"/>
            <span className="right"/>
            Enter
          </Link>
        </div>
        <div className='home__image-wrapper'>
          <div
            className={loopImageClassNames}
            style={loopImageStyles}
          />
          <div
            className='home__fade-image'
            style={fadeImageStyles}
          />
        </div>
      </div>
      </Fragment>
    );
  }
}

export { HomeView };
