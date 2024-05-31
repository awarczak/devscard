import type { CommunitySection } from '@/types/sections/community-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { materialUI, figma, react, typescript, javascript, css, photoshop } from '../helpers/skills';
import { website } from '../helpers/links';

const communitySectionData = {
  config: {
    title: 'Non-profit Activities',
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
      name: 'Talks & Hackathons',
      description: `
      - <b>April 2023</b> - Winning the 6th Bydgoski Hackathon by creating an AI application that supports elderly people.
      - <b>November 2020</b> - giving a speech at the DevMastery Festival about methods for effective form validation in React.
      - <b>November 2018</b> -  winning local and national editions of Let’s Code by Sii. We created a Progressive Web App (PWA) designed as an event recommendation tool for the citizens of Wroclaw.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), typescript(), materialUI(), figma()],
      },
    },
    {
      name: 'CodersCrew',
      image: import('@/assets/logos/cc.png'),
      dates: [new Date('2017-11'), null],
      description: `
      I contributed to the organization's growth from 16 to over one hundred members. Currently, I engage in its activities as an honorary member.<br>
      <b>My responsibilities included:</b>
        - Conducting workshops on frontend-related technologies and practices in Wroclaw’s Innovations Center.
        - Serving as a mentor for a complimentary beginner-level programming course <b>CodersCamp</b>, offering guidance and assistance to students.
        - Managing promotional and administrative activities related to recruitment for the organization.
        - Creating the previous version of the CodersCrew website using React.
        - Implementing projects based on the Scrum methodology.
        - Establishing cooperation with other scientific circles.
        - Participating in numerous hackathons.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [css(), javascript(), typescript(), react(), figma(), photoshop()],
      },
      links: [website({ url: 'https://coderscrew.pl/' })],
    },
  ],
} as const satisfies ReadonlyDeep<CommunitySection>;

export default communitySectionData;
