import custodianSlide1 from '../../assets/images/gallery/custodian/slide01-custodian.jpg';
import custodianSlide2 from '../../assets/images/gallery/custodian/slide02-custodian.jpg';
import custodianSlide3 from '../../assets/images/gallery/custodian/slide03-custodian.jpg';
import custodianSlide4 from '../../assets/images/gallery/custodian/slide04-custodian.jpg';
import custodianSlide5 from '../../assets/images/gallery/custodian/slide05-custodian.jpg';
import custodianSlide6 from '../../assets/images/gallery/custodian/slide06-custodian.jpg';
import custodianSlide7 from '../../assets/images/gallery/custodian/slide07-custodian.jpg';
import custodianSlide8 from '../../assets/images/gallery/custodian/slide08-custodian.jpg';
import custodianSlide9 from '../../assets/images/gallery/custodian/slide09-custodian.jpg';

// Video Assets
import { VIDEO_CUSTODIAN } from '../../constants/videos';

// Slide Types
import {
  SLIDE_IMAGE_TYPE,
  SLIDE_VIDEO_TYPE,
} from './types';

export const PROJECT_INTRO_SLIDES = [
  {
    type: SLIDE_VIDEO_TYPE,
    video: VIDEO_CUSTODIAN,
    image: custodianSlide1,
    title: 'The Custodian Intro Film',
    description: 'The Custodian on the streets of NYC.',
    id: 0,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide2,
    title: 'The Custodian',
    description: 'Uniform Assembly.',
    id: 1,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide3,
    title: 'The Custodian',
    description: 'Uniform Assembly.',
    id: 2,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide4,
    title: 'The Custodian',
    description: 'Uniform Details.',
    id: 3,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide5,
    title: 'The Custodian',
    description: 'Making A Friend.',
    id: 4,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide6,
    title: 'The Custodian',
    description: 'Family Reunion.',
    id: 5,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide7,
    title: 'The Custodian',
    description: 'The Custodian, Posing.',
    id: 6,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide8,
    title: 'The Custodian',
    description: 'New York City Fueling Station.',
    id: 7,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: custodianSlide9,
    title: 'The Custodian',
    description: 'On the streets of New York City.',
    id: 8,
  },
];
