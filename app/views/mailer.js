// @flow

import React from 'react';
import { PresentationSeries } from '../components/presentation-series';
import { MAILER_SECTIONS } from '../constants/presentation/presentations';

export const MailerView = () => (
  <div className='mailer'>
      <PresentationSeries
        presentationIndex={1}
        sections={MAILER_SECTIONS}
      />
  </div>
);
