// @flow

import React, { PureComponent, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { PageImage } from '../components/page-image';
import { PageHeader } from '../components/page-header';
import { PageText } from '../components/page-text';

import image1 from '../assets/images/mailer/mask.png';
import image2 from '../assets/images/mailer/custodian.png';
import image3 from '../assets/images/mailer/bar.png';
import image4 from '../assets/images/mailer/cart.png';

type Props = {};
type State = {
  thresholdOpen: boolean;
}

class MailerView extends PureComponent<Props, State> {
  state = {
    thresholdOpen: false,
  }

  toggleThreshold = () => {
    this.setState({
      thresholdOpen: !this.state.thresholdOpen
    })
    console.log(this.state.thresholdOpen);
  }

  render () {
    const {
      thresholdOpen,
    } = this.state;

    return(
      <div className={`threshold-wrapper`}>
        <div className="threshold-container">
          <Grid container className="threshold-content">
            <Grid item md={6} className="threshold-message">
              <div className="message-text">You discovered a doorway into the Observed Universe. Good for you!</div>
            </Grid>
            <Grid item md={6} className="threshold-cta">
              <div className="cta-text">This way forwards...</div>
            </Grid>
          </Grid>
        </div>
        <div className={`page-wrapper mailer  ${this.state.thresholdOpen && "threshold-open"}`} onClick={this.toggleThreshold}>
          <PageImage imageCenter imageLink={image1} imageCaptionHeader="Header" imageCaptionText="Caption"/>
          <PageImage imageCenter imageLink={image2} imageCaptionHeader="Header" imageCaptionText="Caption"/>
          <PageText textParagraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          <PageImage imageLeft imageLink={image3} imageCaptionHeader="Header" imageCaptionText="Caption"/>
          <PageImage imageRight imageLink={image4} imageCaptionHeader="Header" imageCaptionText="Caption"/>
        </div>
      </div>
    )
  }
}

export { MailerView };
