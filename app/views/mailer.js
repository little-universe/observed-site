// @flow

import React from 'react';
import { PageImage } from '../components/page-image';
import { PageHeader } from '../components/page-header';
import { PageText } from '../components/page-text';

import image1 from '../assets/images/mailer/mask.png';
import image2 from '../assets/images/mailer/custodian.png';

export const MailerView = () => (
  <div className='page-wrapper mailer'>
    <PageImage imageCenter imageLink={image1} imageCaptionHeader="supsup" imageCaptionText="hi"/>
    <PageImage imageCenter imageLink={image2} imageCaptionHeader="supsup" imageCaptionText="hi"/>
    <PageText textParagraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    <PageHeader headerText="Together Humans"/>
  </div>
);
