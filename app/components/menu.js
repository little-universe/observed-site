// @flow

import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { SubscribeComponent } from '../components/subscribe';
import { InstagramSocialComponent } from '../components/instagram';
import { MENU_OPTIONS } from '../constants/menu';
import { SHOP_LINK } from '../constants/shop';
import { HOME_ROUTE } from '../constants/routes';
import type { HeaderType } from '../types/header';
import observedLogo from '../assets/images/logo.svg';
import { navigateToShop } from '../utils/navigation';

type Props = {
  // Actions
  setMenuClosed: Function,

  // Data
  header: HeaderType,
};

class MenuComponent extends PureComponent<Props> {
  handleClickItem = () => {
    const { setMenuClosed } = this.props;
    setMenuClosed();
  }

  renderLogo = () => (
    <Link
      to={HOME_ROUTE}
      className='menu__logo-wrapper'
      onClick={this.handleClickItem}
    >
      <img
        alt='Observed'
        className='menu__logo'
        src={observedLogo}
      />
    </Link>
  );

  renderList = () => (
    <div className='menu__list'>
      {MENU_OPTIONS.map((item) => {
        const { label, route } = item;

        if (route === '/shop') {
          return (
            <a
              href={SHOP_LINK}
              className='menu__item'
              key={route}
              onClick={navigateToShop}
            >
              {label}
            </a>
          );
        }

        return (
          <Link
            key={route}
            className='menu__item'
            to={route}
            onClick={this.handleClickItem}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );

  renderSocial = () => {
    const { header: { isMenuOpened } } = this.props;

    return (
      <div className='menu__social'>
        <SubscribeComponent isMenuOpened={isMenuOpened} />
        <div className='menu__social-instagram'>
          <InstagramSocialComponent />
        </div>
      </div>
    );
  }

  render() {
    const { header: { isMenuOpened } } = this.props;

    const menuClassnames = cx({
      menu: true,
      'menu--active': isMenuOpened,
    });

    return (
      <div className={menuClassnames}>
        <div className='menu__wrapper'>
          {this.renderList()}
          {this.renderSocial()}
        </div>
      </div>
    );
  }
}

export { MenuComponent };
