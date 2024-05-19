import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/profile-image.jpeg'),
  fullName: 'Adrianna Warczak',
  role: 'Frontend Engineer',
  details: [
    { label: 'Phone', value: '+48 503 474 632', url: 'tel:503474632' },
    { label: 'Email', value: 'awarczak.dev@gmail.com', url: 'mailto:awarczak.dev@gmail.com' },
    { label: 'From', value: 'Wrocław, Poland' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '503 473 632' },
    { label: 'Email', value: 'awarczak.dev@gmail.com' },
    { label: 'LinkedIn', value: '/in/adrianna-warczak', url: 'https://linkedin.com' },
    // { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description: `I've been creating web applications for <b>6 years</b>. I’m experienced in developing frontend applications using various technical stacks within the React.js ecosystem. Throughout my career, I've primarily focused on <b>greenfield/early-stage products</b>, collaborating closely with business stakeholders.  Beyond my commercial projects, I actively engage in <b>non-profit organizations</b> related to web development, participate in conferences, and join hackathons. Some of my proudest achievements in these areas are listed in the sections below. Currently, I am seeking a project where I can leverage my knowledge of <b>modern front-end architecture</b> and <b>DDD</b> to create something that profoundly impacts people's lives.
<br><input type="checkbox" id="checkbox" checked disabled /> I commit to support and follow the rules established by The Remote Manifesto.
  `,
  tags: [],
  action: {
    label: 'Download CV in .pdf',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Adrianna_Warczak.pdf',
  },
  links: [linkedin({ url: 'https://www.linkedin.com/in/adriannawarczak/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
