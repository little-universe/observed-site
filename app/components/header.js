// @flow

import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SHOP_LINK } from '../constants/shop';
import observedLogo from '../assets/images/logo.svg';
import menuOpen from '../assets/images/menu-open.svg';
import menuClose from '../assets/images/menu-close.svg';
import shopCart from '../assets/images/cart.svg';
import type { HeaderType } from '../types/header';
import { PromoBanner } from '../components/promo-banner';
import {
  SERIES_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
  SHOP_ROUTE,
  HOME_ROUTE,
  PROJECT_001_ROUTE,
  PROJECT_002_ROUTE,
  PROJECT_003_ROUTE,
  PROJECT_004_ROUTE,
  PROJECT_INTRO_ROUTE,
} from '../constants/routes';
import { navigateToShop } from '../utils/navigation';

type Props = {
  // Actions
  setMenuOpened: Function,
  setMenuClosed: Function,

  // Data
  header: HeaderType,
  location: Object,
};

class HeaderComponent extends PureComponent<Props> {
  getBreadcrumb = () => {
    const { location } = this.props;

    let breadcrumb;
    let route;

    switch (location.pathname) {
      case SERIES_ROUTE:
      case PROJECT_INTRO_ROUTE:
      case PROJECT_001_ROUTE:
      case PROJECT_002_ROUTE:
      case PROJECT_003_ROUTE:
      case PROJECT_004_ROUTE:
        breadcrumb = 'GALLERY';
        route = SERIES_ROUTE;
        break;
      case CONTACT_ROUTE:
        breadcrumb = 'CONTACT';
        route = CONTACT_ROUTE;
        break;
      case ABOUT_ROUTE:
        breadcrumb = 'ABOUT';
        route = ABOUT_ROUTE;
        break;
      case SHOP_ROUTE:
        breadcrumb = 'SHOP';
        break;
      default:
        breadcrumb = '';
        route = SERIES_ROUTE;
        break;
    }

    return (
      <Link
        to={route}
        className='header__breadcrumbs-extension'
      >
        {breadcrumb}
      </Link>
    );
  }

  toggleMenuStatus = () => {
    const {
      header: { isMenuOpened },
      setMenuOpened,
      setMenuClosed,
    } = this.props;

    if (isMenuOpened) {
      setMenuClosed();
    } else {
      setMenuOpened();
    }
  }

  handleMenuLogoClick = () => {
    const {
      header: { isMenuOpened },
      setMenuClosed,
    } = this.props;
    if (isMenuOpened) {
      setMenuClosed();
    }
  }

  renderBreadCrumbExtras = () => {
    const {
      header: { isMenuOpened },
      location: { pathname },
    } = this.props;

    if (isMenuOpened) return null;

    if (
      pathname !== PROJECT_INTRO_ROUTE &&
      pathname !== PROJECT_001_ROUTE &&
      pathname !== PROJECT_002_ROUTE &&
      pathname !== PROJECT_003_ROUTE &&
      pathname !== PROJECT_004_ROUTE
    ) return null;

    const getAdditionalBreadcrumb = () => {
      switch (pathname) {
        case PROJECT_INTRO_ROUTE:
          return '.000';
        case PROJECT_001_ROUTE:
          return '.001';
        case PROJECT_002_ROUTE:
          return '.002';
        case PROJECT_003_ROUTE:
          return '.003';
        case PROJECT_004_ROUTE:
          return '.004';
        default:
          return null;
      }
    };

    return (
      <span className='header__additional-breadcrumb'>
        {getAdditionalBreadcrumb()}
      </span>
    );
  }

  renderLeftContent = () => {
    const { header: { isMenuOpened } } = this.props;
    const closeButtonText = (
      <button
        className='header__breadcrumbs-close'
        onClick={this.toggleMenuStatus}
      >
        CLOSE
      </button>
    );

    return (
      <div className='header__left-content'>
        <button
          className='header__menu-icon'
          onClick={this.toggleMenuStatus}
        >
          {isMenuOpened ? (
            <img
              src={menuClose}
              alt='Menu'
              className='header__menu-close'
            />
          ) : (
            <img
              src={menuOpen}
              alt='Menu'
              className='header__menu-open'
            />
          )}
        </button>
        <div className='header__breadcrumbs'>
          {isMenuOpened ? closeButtonText : this.getBreadcrumb()}
          {this.renderBreadCrumbExtras()}
        </div>
      </div>
    );
  }

  renderCenterContent = () => {
    const { location: { pathname } } = this.props;

    if (pathname === HOME_ROUTE) return null;

    return (
      <Fragment>
        <Link
          to={HOME_ROUTE}
          className='header__center-content'
          onClick={this.handleMenuLogoClick}
        >
          <img
            alt='Observed'
            className='header__logo'
            src={observedLogo}
          />
        </Link>
        <div className='header__center-breadcrumb'>
          {this.getBreadcrumb()}
        </div>
      </Fragment>
    );
  }

  renderRightContent = () => {
    const { header: { isMenuOpened } } = this.props;
    if (isMenuOpened) return <div style={{ width: '25px' }} />;

    return (
      <div className='header__right-content'>
        <a
          href={SHOP_LINK}
          className='header__shop header__shop--desktop'
          onClick={navigateToShop}
        >
          Shop
        </a>
        <a
          href={SHOP_LINK}
          className='header__shop header__shop--mobile'
          onClick={navigateToShop}
        >
          <img
            src={shopCart}
            alt='Shop'
          />
        </a>
      </div>
    );
  }

  renderPromoContent = () => {
    const { location: { pathname } } = this.props;
    if (pathname === HOME_ROUTE) return null;
    return (
      <PromoBanner />
    );
  }

  render() {
    return (
      <div>
        {this.renderPromoContent()}
        <div className='header'>
          {this.renderLeftContent()}
          {this.renderCenterContent()}
          {this.renderRightContent()}
        </div>
      </div>
    );
  }
}

export { HeaderComponent };
