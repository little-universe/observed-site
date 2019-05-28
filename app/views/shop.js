// @flow

import React, { PureComponent } from 'react';
import { SHOP_LINK } from '../constants/shop';

class ShopView extends PureComponent<{}> {
  componentDidMount() {
    window.location.href = SHOP_LINK;
  }

  render() {
    return <div />;
  }
}

export { ShopView };
