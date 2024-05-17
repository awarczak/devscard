import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  apolloClient,
  bootstrap,
  cypress,
  highcharts,
  javascript,
  jest,
  leaflet,
  mapbox,
  materialUI,
  nextJs,
  react,
  reactFlow,
  redux,
  rtl,
  tableau,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Commercial projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Inflowmatix',
      dates: [new Date('2023-11'), null],
      details: [
        { label: 'Team size', value: '9 people' },
        { label: 'My role', value: ['Front-end Engineer'] },
        { label: 'Company', value: 'Zaven' },
        { label: 'Category', value: ['Web app'] },
      ],
      description: `
      Working on a robust system for reporting the status of water network systems, equipped with anomaly detection capabilities and a user-friendly interface for data analysis.<br>
      <b>My responsibilities included:</b>
        - Leading the migration of legacy code to modern technologies for a water network analytics suite.
        - Responsible for ongoing bug fixes and system optimizations.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), javascript(), redux(), bootstrap(), leaflet(), jest()],
      },
      links: [],
    },
    {
      name: 'Web apps for managing energy on the construction site',
      dates: [new Date('2021-04'), new Date('2023-10')],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Front-end Engineer'] },
        { label: 'Company', value: 'Zaven (outsourcing)' },
        { label: 'Category', value: ['Web app'] },
      ],
      description: `
      I played a key role in the collaborative development of a greenfield applications for the second-largest power grid owner in Norway, focusing on monitoring and managing energy on construction sites. These applications support Norway’s goal for an emission-free construction industry in major cities by 2030.<br>
      <b>My responsibilities included:</b>
        - Developing a calendar-based scheduling system that allows customers to understand and communicate their energy needs on the construction site.
        - Developing an advanced interactive map that visualizes data from the construction site.
        - Creating detailed overviews of projects and assets, and establishing a comprehensive event log.
        - Implementing an administrative module for managing organizations, users, and their roles within the system.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          typescript(),
          apolloClient(),
          materialUI(),
          highcharts(),
          mapbox(),
          reactFlow(),
          jest(),
          rtl(),
          cypress(),
        ],
      },
      links: [],
    },
    {
      name: 'Landing page for the energy monitoring app',
      // image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2021-01'), new Date('2021-03')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Engineer'] },
        { label: 'Company', value: 'Zaven (outsourcing)' },
        { label: 'Category', value: ['Website'] },
      ],
      pdfDetails: [],
      description: `
      <b>My responsibilities included:</b>
        - Implementing a landing page.
        - Integrating with <b><u>GraphCMS</b></u> for content management.
        - Managing email and newsletter functionalities using <b><u>Mailgun</u></b>.`,
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), typescript(), tailwindCss()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'Web app managing waste disposal in Norway',
      // image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2019-11'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['Front-end Engineer'] },
        { label: 'Company', value: 'Zaven' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [],
      description: `
      <b>My responsibilities included:</b>
      - Transforming a cumbersome desktop application into a modern web-based solution.
      - Collaborating closely with the Product Designer and client to understand business needs and design the application (User Story Mapping).
      - Being responsible for visual design, core feature implementation, and integrating Tableau for data visualization.
      - Leading demo presentations for stakeholders.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), typescript(), redux(), materialUI(), tableau(), jest(), rtl()],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
