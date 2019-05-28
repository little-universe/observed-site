// Image Assets
import project002Slide2 from '../../assets/images/gallery/project002/slide02-project002.jpg';
import project002Slide3 from '../../assets/images/gallery/project002/slide03-project002.jpg';
import project002Slide4 from '../../assets/images/gallery/project002/slide04-project002.jpg';
import project002Slide5 from '../../assets/images/gallery/project002/slide05-project002.jpg';
import project002Slide6 from '../../assets/images/gallery/project002/slide06-project002.jpg';
import project002Slide7 from '../../assets/images/gallery/project002/slide07-project002.jpg';
import project002Slide8 from '../../assets/images/gallery/project002/slide08-project002.jpg';
import project002Slide9 from '../../assets/images/gallery/project002/slide09-project002.jpg';
import project002Slide10 from '../../assets/images/gallery/project002/slide10-project002.jpg';
import project002Slide11 from '../../assets/images/gallery/project002/slide11-project002.jpg';
import project002Slide12 from '../../assets/images/gallery/project002/slide12-project002.jpg';
import project002Slide13 from '../../assets/images/gallery/project002/slide13-project002.jpg';
import project002Slide14 from '../../assets/images/gallery/project002/slide14-project002.jpg';
import project002Slide15 from '../../assets/images/gallery/project002/slide15-project002.jpg';
import project002Slide16 from '../../assets/images/gallery/project002/slide16-project002.jpg';
import project002Slide17 from '../../assets/images/gallery/project002/slide17-project002.jpg';
import project002Slide18 from '../../assets/images/gallery/project002/slide18-project002.jpg';
import project002Slide19 from '../../assets/images/gallery/project002/slide19-project002.jpg';
import project002Slide20 from '../../assets/images/gallery/project002/slide20-project002.jpg';
import project002Cover from '../../assets/images/gallery/project002/cover-project002.jpg';
import project002Shop from '../../assets/images/gallery/project002/shop-project002.jpg';

// Audio Assets
import project002Audio from '../../assets/audio/project-002.mp3';

// Video Assets
import { VIDEO_002 } from '../../constants/videos';

// Slide Types
import {
  SLIDE_IMAGE_TYPE,
  SLIDE_VIDEO_TYPE,
  SLIDE_AUDIO_TYPE,
} from './types';

export const PROJECT_002_SLIDES = [
  {
    type: SLIDE_VIDEO_TYPE,
    image: project002Cover,
    video: VIDEO_002,
    title: '.002 Intro Film',
    description: '.002 on the streets of New York City',
    id: 0,
  },
  {
    type: SLIDE_AUDIO_TYPE,
    image: project002Slide2,
    title: 'The Custodian’s Thoughts',
    description: 'While .002 was on display, people who called The Custodian’s number (929.376.9828) heard this recording. While the number remains the same, the recording changes with each piece that OBSERVED releases.',
    audio: project002Audio,
    id: 1,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide3,
    title: '.002 Process',
    description: 'Silicone postive removal from high density foam mold',
    id: 2,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide4,
    title: '.002 Process',
    description: 'Prepping silicone positive for concrete mold',
    id: 3,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide5,
    title: '.002 Process',
    description: '‘Together, Humans’ concrete mold',
    id: 4,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide6,
    title: '.002 Process',
    description: 'Concrete mold application',
    id: 5,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide7,
    title: '.002 Process',
    description: 'Concrete mold leveling and cleaning',
    id: 6,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide8,
    title: '.002 Process',
    description: 'Silicone positive removal from concrete',
    id: 7,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide9,
    title: '.002 Process',
    description: 'Concrete Polishing',
    id: 8,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide10,
    title: '.002 Process',
    description: 'Two part expoxy resin pour',
    id: 9,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide11,
    title: '.002 Process',
    description: '23K gold leaf application',
    id: 10,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide12,
    title: '.002 Final',
    description: 'Gallery Image',
    id: 11,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide13,
    title: '.002 Final',
    description: 'Gallery Image ; Detail Image',
    id: 12,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide14,
    title: '.002 Final',
    description: 'Detail Image',
    id: 13,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide15,
    title: '.002 Final',
    description: 'Detail Images',
    id: 14,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide16,
    title: '.002 Final',
    description: 'Detail Image',
    id: 15,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide17,
    title: '.002 Final',
    description: 'Detail Images',
    id: 16,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide18,
    title: '.002 On Display',
    description: '.002 On Display, Flatiron',
    id: 17,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide19,
    title: '.002 On Display',
    description: 'A group of OBSERVERS, observing',
    id: 18,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Slide20,
    title: '.002 On Display',
    description: '.002 on display during Manhattanhenge. No Custodians were harmed.',
    id: 19,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project002Shop,
    isShop: true,
    title: 'Shop The OBSERVED World',
    description: 'The only place to find OBSERVED objects...',
    id: 20,
  },
];
