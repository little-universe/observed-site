// @flow

import React, { PureComponent } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audioIcon from '../assets/images/audio-white.svg';
import audioCustodian from '../assets/images/audio-custodian.svg';

type State = {
  isVisible: boolean,
};

class AudioPlayer extends PureComponent<{}, State> {
  state = { isVisible: false };

  handleClick = () => this.setState(() => ({ isVisible: true }));

  renderAudio = () => <ReactAudioPlayer autoPlay {...this.props} />;
  renderButton = () => (
    <button
      onClick={this.handleClick}
      className='audio-player__button'
    >
      <img
        src={audioIcon}
        alt='Custodian'
        className='audio-player__icon'
      />
      <img
        src={audioCustodian}
        alt='Custodian'
        className='audio-player__custodian'
      />
    </button>
  );

  render() {
    const { isVisible } = this.state;

    return (
      <div className='audio-player'>
        {isVisible ? this.renderAudio() : this.renderButton()}
      </div>
    );
  }
}

export { AudioPlayer };
