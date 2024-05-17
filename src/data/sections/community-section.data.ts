import type { CommunitySection } from '@/types/sections/community-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { materialUI, figma, react, typescript, javascript, css } from '../helpers/skills';

const communitySectionData = {
  config: {
    title: 'Community Engagement',
    slug: 'community',
    icon: 'fluent:people-team-16-filled',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  pdfDetails: [],
  communityProjects: [
    {
      name: 'Hackathons',
      description: `<b>April 2023</b> - 6. Bydgoski Hackathon - Winner
      <b>November 2018</b> - Let's Code 2018 by Sii - Winner
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), typescript(), materialUI(), figma()],
      },
    },
    {
      name: 'Talks',
      date: new Date('2020-11'),
      description: `Speaker at the DevMastery Festival - <i>Jak walidować formularze w React?</i>`,
      tagsList: {
        title: 'Technologies',
        tags: [react()],
      },
    },
    {
      name: 'Coders Crew',
      image: import('@/assets/logos/cc.png'),
      dates: [new Date('2017-11'), new Date('2021-11')],
      description: `
      Involved in a non-profit organization that expanded its membership from 16 to 143.<br>
      <b>My responsibilities included:</b>
        - Conducted internal workshops on HTML, CSS, and JavaScript technologies.
        - Served as a mentor for a complimentary beginner-level programming course, offering guidance and assistance to students.
        - Managed promotional and administrative activities related to recruitment for the organization.
        - Implemented projects based on the Scrum methodology.
        - Established cooperation with other scientific circles.
        - Participated in numerous hackathons.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [css(), javascript(), typescript(), react()],
      },
    },
  ],
} as const satisfies ReadonlyDeep<CommunitySection>;

export default communitySectionData;
