import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, website } from '../helpers/links';
import { adobePremiere, css, javascript, react, typescript, figma, ddd } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'E-learning Content Assistant for Domain Drivers course',
      company: 'DevStyle',
      image: import('@/assets/logos/dd.png'),
      dates: [new Date('2024-02'), null],
      description: `
      - Ensuring the quality of the online training course Domain Drivers.
      - Reviewing materials for accuracy and relevance.
      - Assisting in the preparation of graphic materials and video editing.

      `,
      tagsList: {
        title: 'Tools',
        tags: [ddd(), figma(), adobePremiere()],
      },
      links: [website({ url: 'https://domaindrivers.pl/' })],
    },
    {
      role: 'Frontend Engineer',
      company: 'Zaven',
      image: import('@/assets/logos/zaven.png'),
      dates: [new Date('2019-11'), null],
      description: `
        - Collaborating with clients to establish current business needs and future goals.
        - Designing and implementing applications focused on green energy, recycling, and construction site management.
        - Leading demonstration meetings to present project progress and gather feedback from clients.
        - Performing field testing to understand users' needs and identify areas for improvement.
        - Conducting code reviews and mentoring junior developers.
        - Leading the migration of legacy projects to modern technologies.
        - Facilitating internal meetings to establish best practices and improve the development process.
        - Developing end-to-end testing strategies within the team.
      `,
      tagsList: {
        title: 'Main Technologies',
        tags: [react(), typescript()],
      },
      links: [website({ url: 'https://zaven.co/' }), instagram({ url: 'https://www.instagram.com/zaven.co/' })],
    },
    {
      role: 'Junior Frontend Engineer',
      company: 'Antologic',
      image: import('@/assets/logos/antologic.png'),
      dates: [new Date('2019-09'), new Date('2019-11')],
      description: `- Involving in the development of a web application that enables hotel owners to efficiently manage their bookings.`,
      tagsList: {
        title: 'Main Technologies',
        tags: [javascript(), css()],
      },
      links: [website({ url: 'https://antologic.com/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
