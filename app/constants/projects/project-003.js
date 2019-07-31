// Image Assets
import project003Slide2 from '../../assets/images/gallery/project003/slide02-project003.jpg';
import project003Slide3 from '../../assets/images/gallery/project003/slide03-project003.jpg';
import project003Slide4 from '../../assets/images/gallery/project003/slide04-project003.jpg';
import project003Slide5 from '../../assets/images/gallery/project003/slide05-project003.jpg';
import project003Slide6 from '../../assets/images/gallery/project003/slide06-project003.jpg';
import project003Slide7 from '../../assets/images/gallery/project003/slide07-project003.jpg';
import project003Slide8 from '../../assets/images/gallery/project003/slide08-project003.jpg';
import project003Slide9 from '../../assets/images/gallery/project003/slide09-project003.jpg';
import project003Slide10 from '../../assets/images/gallery/project003/slide10-project003.jpg';
import project003Slide11 from '../../assets/images/gallery/project003/slide11-project003.jpg';
import project003Slide12 from '../../assets/images/gallery/project003/slide12-project003.jpg';
import project003Slide13 from '../../assets/images/gallery/project003/slide13-project003.jpg';
import project003Slide14 from '../../assets/images/gallery/project003/slide14-project003.jpg';
import project003Slide15 from '../../assets/images/gallery/project003/slide15-project003.jpg';
import project003Slide16 from '../../assets/images/gallery/project003/slide16-project003.jpg';
import project003Slide17 from '../../assets/images/gallery/project003/slide17-project003.jpg';
import project003Slide18 from '../../assets/images/gallery/project003/slide18-project003.jpg';
import project003Slide19 from '../../assets/images/gallery/project003/slide19-project003.jpg';
import project003Slide20 from '../../assets/images/gallery/project003/slide20-project003.jpg';
import project003Cover from '../../assets/images/gallery/project003/cover-project003.jpg';
import project003Shop from '../../assets/images/gallery/project003/shop-project003.jpg';

// Video Assets
import { VIDEO_003 } from '../../constants/videos';

// Audio Assets
import project003Audio from '../../assets/audio/project-003.mp3';

// Slide Types
import {
  SLIDE_IMAGE_TYPE,
  SLIDE_AUDIO_TYPE,
  SLIDE_VIDEO_TYPE,
} from './types';

export const PROJECT_003_SLIDES = [
  {
    type: SLIDE_VIDEO_TYPE,
    image: project003Cover,
    video: VIDEO_003,
    title: '.003 Intro Film',
    description: '.003 on the streets of New York City.',
    id: 0,
  },
  {
    type: SLIDE_AUDIO_TYPE,
    image: project003Slide2,
    audio: project003Audio,
    title: 'The Custodian’s Thoughts',
    description: 'When .003 was on display, people who called The Custodian’s number (929.376.9828) heard this recording. While the number remains the same, the recording changes with each piece that OBSERVED releases.',
    id: 1,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide3,
    title: '.003 Process',
    description: 'Concrete drape form molds.',
    id: 2,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide4,
    title: '.003 Process',
    description: 'Direct print on acrylic.',
    id: 3,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide5,
    title: '.003 Process',
    description: 'Drape form mold preparation.',
    id: 4,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide6,
    title: '.003 Process',
    description: 'Drape form production.',
    id: 5,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide7,
    title: '.003 Process',
    description: '3D printed parts, dry assembly.',
    id: 6,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide8,
    title: '.003 Process',
    description: '3D printed parts, waiting.',
    id: 7,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide9,
    title: '.003 Process',
    description: 'Crushed brick slurry additive and application.',
    id: 8,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide10,
    title: '.003 Process',
    description: 'Crushed brick jig and metal timer plate.',
    id: 9,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide11,
    title: '.003 Process',
    description: 'Assembly Test.',
    id: 10,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide12,
    title: '.003 Final',
    description: 'Gallery Image.',
    id: 11,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide13,
    title: '.003 Final',
    description: 'Gallery Image.',
    id: 12,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide14,
    title: '.003 Final',
    description: 'Gallery Image ; Detail Image.',
    id: 13,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide15,
    title: '.003 Final',
    description: 'Detail Image.',
    id: 14,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide16,
    title: '.003 Final',
    description: 'Detail Images.',
    id: 15,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide17,
    title: '.003 Final',
    description: 'Detail Image.',
    id: 16,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide18,
    title: '.003 Final',
    description: 'Detail Images.',
    id: 17,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide19,
    title: '.003 Final',
    description: 'Detail Image.',
    id: 18,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Slide20,
    title: '.003 Final',
    description: 'In The Wild.',
    id: 19,
  },
  {
    type: SLIDE_IMAGE_TYPE,
    image: project003Shop,
    isShop: true,
    title: 'Shop The OBSERVED World',
    description: 'The only place to find OBSERVED objects...',
    id: 20,
  },
];
