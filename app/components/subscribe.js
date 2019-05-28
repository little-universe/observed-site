// @flow

import React, { Fragment, PureComponent } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import cx from 'classnames';
import { ClickOutsideComponent } from '../components/click-outside';
import { MAILCHIMP_URL } from '../constants/mailchimp';

type Props = {
  isMenuOpened: boolean,
};

type State = {
  isComplete: boolean,
  isOpened: boolean,
  text: string,
}

const INITIAL_STATE = {
  isOpened: false,
  text: '',
  isComplete: false,
};

class SubscribeComponent extends PureComponent<Props, State> {
  state = INITIAL_STATE;

  componentWillReceiveProps(nextProps: Props) {
    const { isMenuOpened } = this.props;

    if (nextProps.isMenuOpened !== isMenuOpened) {
      this.handleCleanUp();
    }
  }

  handleTextChange = (event: Object) => {
    const { target: { value } } = event;
    this.setState(() => ({ text: value }));
  }

  handleClickButton = (subscribe: Function) => {
    const { isOpened, text } = this.state;

    if (!isOpened) {
      this.setState(() => ({ isOpened: true }));
    } else {
      // eslint-disable-next-line
      if (!text) {
        this.setState(() => ({ isOpened: false }));
      } else {
        subscribe({ EMAIL: text });
        this.handleCleanUpAfterSubmit();
      }
    }
  }

  handleCleanUpAfterSubmit = () => this.setState(() => ({
    ...INITIAL_STATE,
    isComplete: true,
  }));

  handleCleanUp = () => this.setState(() => ({ ...INITIAL_STATE }));

  handleClickOutside = () => {
    const { text } = this.state;

    if (!text) {
      this.setState(() => ({ isOpened: false }));
    }
  }

  handleKeyPress = (evt: Object, subscribe: Function) => {
    const keyPress = evt.which || evt.keyCode;
    const { text } = this.state;

    if (keyPress === 13) {
      subscribe({ EMAIL: text });
      this.handleCleanUpAfterSubmit();
    }
  }

  renderInput = (subscribe: Function) => {
    const { isOpened, text } = this.state;

    const subscribeInputClassnames = cx({
      subscribe__input: true,
      'subscribe__input--opened': isOpened,
    });

    return (
      <input
        value={text}
        placeholder='Email Address'
        onChange={this.handleTextChange}
        className={subscribeInputClassnames}
        onKeyPress={evt => this.handleKeyPress(evt, subscribe)}
      />
    );
  }

  renderIcon = (subscribe: Function) => {
    const { isOpened, isComplete } = this.state;

    const subscribeButtonClassnames = cx({
      subscribe__button: true,
      'subscribe__button--opened': isOpened,
    });

    const text = isComplete ? 'Joined' : 'Join Us';

    return (
      <button
        onClick={() => this.handleClickButton(subscribe)}
        className={subscribeButtonClassnames}
        disabled={isComplete}
      >
        {text}
      </button>
    );
  }

  renderResults = (status: string, message: string) => {
    const { isComplete } = this.state;
    let resultText;

    switch (status) {
      case 'error':
        if (message.includes('is already subscribed')) {
          const email = message.split(' ')[0];
          // eslint-disable-next-line
          resultText = `${email} is already signed up to the OBSERVED newsletter`;
        } else {
          resultText = message;
        }
        break;
      case 'sending':
        resultText = 'Loading...';
        break;
      case 'success':
        resultText = 'Welcome ... we will be in touch';
        break;
      default:
        break;
    }

    if (!isComplete) return null;

    return (
      <div className='subscribe__results-message'>
        {resultText}
      </div>
    );
  }

  renderForm = ({ subscribe, status, message }: Object) => (
    <Fragment>
      <ClickOutsideComponent
        className='subscribe'
        onClickOutside={this.handleClickOutside}
      >
        {this.renderIcon(subscribe)}
        {this.renderInput(subscribe)}
      </ClickOutsideComponent>
      {this.renderResults(status, message)}
    </Fragment>
  );

  render() {
    return (
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={this.renderForm}
      />
    );
  }
}

export { SubscribeComponent };
