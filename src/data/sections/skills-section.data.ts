import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  cypress,
  react,
  sass,
  tailwindCss,
  typescript,
  nextJs,
  reactQuery,
  css,
  radixUI,
  shadcn,
  rtl,
  jest,
  highcharts,
  mapbox,
  materialUI,
  vue,
  reactFlow,
  redux,
  storybook,
  turborepo,
  nx,
  vitest,
  javascript,
  zustand,
  bootstrap,
  leaflet,
  apolloClient,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'General Technologies',
      skills: [
        javascript({ level: 5 }),
        typescript({
          level: 5,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        react({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        nextJs({ level: 4 }),
        vue({ level: 2 }),
      ],
    },
    {
      title: 'Styling',
      skills: [
        css({ level: 5 }),
        sass({
          level: 4,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        tailwindCss({ level: 5 }),
        bootstrap({ level: 4 }),
        materialUI({ level: 4 }),
        radixUI({ level: 2 }),
        shadcn({ level: 2 }),
        storybook({ level: 3 }),
      ],
    },
    {
      title: 'State Management',
      skills: [redux({ level: 3 }), reactQuery({ level: 3 }), apolloClient({ level: 3 }), zustand({ level: 1 })],
    },
    {
      title: 'Data Visualization',
      skills: [highcharts(), reactFlow(), mapbox(), leaflet()],
    },
    {
      title: 'Testing',
      skills: [jest(), cypress(), rtl()],
    },
    {
      title: 'Tools & Practices',
      skills: [
        { icon: 'iconoir:agile', name: 'Agile (Scrum, Kanban)' },
        { icon: 'tabler:cloud-cog', name: 'Rest API' },
        { icon: 'fa6-brands:jira', name: 'Strategic DDD' },
        { icon: 'logos:jira', name: 'JIRA' },
        { icon: 'devicon:git', name: 'GIT' },
        { icon: 'skill-icons:vite-dark', name: 'Vite' },
        { icon: 'logos:webpack', name: 'Webpack' },
        { icon: 'logos:salesforce', name: 'CRM (Salesforce)' },
        { icon: 'logos:tableau-icon', name: 'Tableau' },
        { icon: 'logos:jamstack-icon', name: 'Jamstack' },
        { icon: 'logos:atomicojs-icon', name: 'Atomic Design' },
        { icon: 'logos:figma', name: 'Figma' },
        { icon: 'logos:adobe-photoshop', name: 'Adobe Photoshop' },
        { icon: 'logos:adobe-premiere', name: 'Adobe Premiere Pro' },
        { icon: 'hugeicons:capcut', name: 'Capcut' },
      ],
    },
    {
      title: 'I want to learn',
      skills: [turborepo(), nx(), vitest()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - A2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
