import introBackground from '../assets/images/gallery/custodian/cover-custodian.jpg';
import project001Background from '../assets/images/gallery/project001/cover-project001.jpg';
import project002Background from '../assets/images/gallery/project002/cover-project002.jpg';
import project003Background from '../assets/images/gallery/project003/cover-project003.jpg';
import comingSoonBackground from '../assets/images/gallery/empty.gif';

import {
  PROJECT_INTRO_ROUTE,
  PROJECT_001_ROUTE,
  PROJECT_002_ROUTE,
  PROJECT_003_ROUTE,
} from './routes';

export const SERIES = [
  {
    id: 0,
    title: 'The Custodian',
    controlLabel: '.000',
    year: '2017',
    subtitle: 'Human Being',
    description: 'OBSERVED hired The Custodian to take care of the work and the surrounding area during installations. He loves what he does, picks up trash on the street and doesn’t speak while he is on the job ... dreamy. We are grateful for his time and hope he lives forever.',
    extraDescription: '77 Years  |  6’4”  |  185 lbs.',
    link: PROJECT_INTRO_ROUTE,
    background: introBackground,
  },
  {
    id: 1,
    title: '.001',
    year: '2018',
    subtitle: 'Lacquered Aluminum + steel, brass; concrete',
    description: '.001 is the first piece in OBSERVED’s series, launched in December 2017 on the streets of New York City. The piece lived on The Custodian’s Cart and a number of people tried to use it as a real trash can. It is not a real trash can.',
    extraDescription: '24 x 30 x 32 inches',
    link: PROJECT_001_ROUTE,
    background: project001Background,
  },
  {
    id: 2,
    title: '.002',
    year: '2018',
    subtitle: 'Concrete, steel, powder coated aluminum, gold leaf, crushed stone, gold plated silver',
    description: '.002 is the second piece in OBSERVED’s series, released in May of 2018. It was extremely difficult for The Custodian to move and we feared he might retire early. He persevered. The ants helped.',
    extraDescription: '49 x 48 x 10 inches',
    link: PROJECT_002_ROUTE,
    background: project002Background,
  },
  {
    id: 3,
    title: '.003',
    year: '2018',
    subtitle: 'Sintered nylon, acrylic; steel; crushed brick, aluminum, lacquered MDF',
    description: '.003 is the third piece in OBSERVED’s series. It was launched in September 2018 and has not yet terrified any children. Yet.',
    extraDescription: '57 x 28 x 26 inches',
    link: PROJECT_003_ROUTE,
    background: project003Background,
  },
  {
    id: 4,
    title: '.004',
    year: 'UNKNOWN',
    subtitle: 'Coming Soon',
    description: '',
    link: '',
    background: comingSoonBackground,
  },
  {
    id: 5,
    title: '.005',
    year: 'UNKNOWN',
    subtitle: 'Coming Soon',
    description: '',
    link: '',
    background: comingSoonBackground,
  },
  {
    id: 6,
    title: '.006',
    year: 'UNKNOWN',
    subtitle: 'Coming Soon',
    description: '',
    link: '',
    background: comingSoonBackground,
  },
  {
    id: 7,
    title: '.007',
    year: 'UNKNOWN',
    subtitle: 'Coming Soon',
    description: '',
    link: '',
    background: comingSoonBackground,
  },
];
