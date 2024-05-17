import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Currently learning',
    slug: 'learning',
    icon: 'fa6-solid:star',
    visible: true,
  },
  courses: {
    title: 'Courses',
    data: [
      {
        image: import('@/assets/logos/dd_logo.jpeg'),
        title: 'Domain Drivers',
        author: 'Sławek Sobótka, Kuba Pilimon',
        url: 'https://domaindrivers.pl/',
      },
    ],
  },
  // people: {
  //   title: 'People I learn from',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/people/person-1.jpg'),
  //       name: 'Kent C. Dodds',
  //       url: 'https://kentcdodds.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-2.jpeg'),
  //       name: 'Kent Beck',
  //       url: 'https://www.kentbeck.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-3.jpeg'),
  //       name: 'Eric Evans',
  //       url: 'https://www.domainlanguage.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-4.jpeg'),
  //       name: 'Martin Fowler',
  //       url: 'https://martinfowler.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-5.jpg'),
  //       name: 'Robert C. Martin',
  //       url: 'http://cleancoder.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/people/person-6.jpeg'),
  //       name: 'Adam Dymitruk',
  //       url: 'https://eventmodeling.org/',
  //     },
  //   ],
  // },
  // medias: {
  //   title: 'Media I follow',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/media/media-1.jpeg'),
  //       title: 'Fireship.io',
  //       type: 'YouTube channel',
  //       url: 'https://www.youtube.com/c/Fireship',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-2.jpeg'),
  //       title: 'Healthy Software Developer',
  //       type: 'YouTube channel',
  //       url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-3.png'),
  //       title: 'Bytes',
  //       type: 'Newsletter',
  //       url: 'https://bytes.dev/',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-4.png'),
  //       title: 'TypeScript Weekly',
  //       type: 'Newsletter',
  //       url: 'https://typescript-weekly.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-5.jpeg'),
  //       title: 'Front End Happy Hour',
  //       type: 'Podcast',
  //       url: 'https://www.frontendhappyhour.com/',
  //     },
  //     {
  //       image: import('@/assets/favorites/media/media-6.webp'),
  //       title: '.cult by Honeypot',
  //       type: 'Blog',
  //       url: 'https://cult.honeypot.io/',
  //     },
  //   ],
  // },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
