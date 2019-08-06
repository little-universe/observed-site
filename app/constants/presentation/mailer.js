// Image Assets
import project001Slide1 from '../../assets/images/gallery/project001/slide01-project001.jpg';
import project001Slide2 from '../../assets/images/gallery/project001/slide02-project001.jpg';

// Section Types
import {
  SECTION_IMAGE_TYPE,
  SECTION_HEADER_TYPE,
  SECTION_TEXT_TYPE,
} from './types';

export const MAILER_SECTIONS = [
  {
    type: SECTION_IMAGE_TYPE,
    image: project001Slide2,
    captionHeader: 'The Custodian’s Thoughts',
    captionSubtext: 'some content',
    id: 0,
  },
  {
    type: SECTION_TEXT_TYPE,
    image: project001Slide2,
    textBody: 'some long text',
    id: 1,
  },
  {
    type: SECTION_HEADER_TYPE,
    headerText: 'Work 001',
    id: 2,
  },
];
