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
    image: project001Slide1,
    captionHeader: 'The Custodian’s Thoughts',
    captionSubtext: 'When .001 was on display, people who called The Custodian’s number (929.376.9828) heard this recording. While the number remains the same, the recording changes with each piece that OBSERVED releases.',
    id: 0,
  },
  {
    type: SECTION_HEADER_TYPE,
    headerText: 'Work 001',
    id: 1,
  },
  {
    type: SECTION_TEXT_TYPE,
    textBody: 'some long text',
    id: 2,
  },
];
