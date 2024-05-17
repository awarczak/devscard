import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, website } from '../helpers/links';
import { react, typescript, vue } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Frontend Engineer',
      company: 'Zaven',
      image: import('@/assets/logos/zaven.png'),
      dates: [new Date('2019-11'), null],
      description: `
        - Collaborate with clients to establish current business needs and future goals.
        - Design and implement of applications focused on green energy, recycling, and construction site management.
        - Lead demonstration meetings to present project progress and gather feedback from clients.
        - Perform field testing to understand users' needs and identify areas for improvement.
        - Conduct code reviews and mentor junior developers.
        - Lead the migration of legacy projects to modern technologies.
        - Facilitate internal meetings to establish best practices and improve the development process.
        - Develop end-to-end testing strategies within the team.
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
      description: `- Involved in the development of a web application that enables hotel owners to efficiently manage their bookings.`,
      tagsList: {
        title: 'Main Technologies',
        tags: [vue()],
      },
      links: [website({ url: 'https://antologic.com/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
