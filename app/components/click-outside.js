// @flow

import React, { PureComponent } from 'react';

type Props = {
  onClickOutside: Function,
  children: any,
};

class ClickOutsideComponent extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.isTouch = false;
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handle, true);
    document.addEventListener('click', this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handle, true);
    document.removeEventListener('click', this.handle, true);
  }

  getContainer = (ref: any) => {
    this.container = ref;
  }

  container: any;
  isTouch: boolean;

  handle = (e: Object) => {
    if (e.type === 'touchend') this.isTouch = true;
    if (e.type === 'click' && this.isTouch) return;

    const { onClickOutside } = this.props;
    const el = this.container;

    if (!el.contains(e.target)) onClickOutside(e);
  }

  render() {
    const { children, onClickOutside, ...props } = this.props;
    return (
      <div
        {...props}
        ref={this.getContainer}
      >
        {children}
      </div>
    );
  }
}

export { ClickOutsideComponent };
