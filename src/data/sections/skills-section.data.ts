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
  formik,
  reactHookForm,
  jira,
  vite,
  webpack,
  git,
  salesforce,
  tableau,
  photoshop,
  premierePro,
  capcut,
  agile,
  restApi,
  strategicDDD,
  jamstack,
  atomicDesign,
  figma,
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
      title: 'General',
      skills: [
        javascript({ level: 5 }),
        typescript({
          level: 5,
        }),
        react({
          level: 5,
        }),
        nextJs({ level: 4 }),
      ],
    },
    {
      title: 'Styling',
      skills: [
        css({ level: 5 }),
        tailwindCss({ level: 5 }),
        sass({
          level: 4,
        }),
        bootstrap({ level: 4 }),
        materialUI({ level: 4 }),
        storybook({ level: 3 }),
        radixUI({ level: 3 }),
        shadcn({ level: 3 }),
      ],
    },
    {
      title: 'State Management',
      skills: [redux({ level: 3 }), reactQuery({ level: 3 }), apolloClient({ level: 3 }), zustand({ level: 1 })],
    },
    {
      title: 'Testing',
      skills: [jest(), cypress(), rtl()],
    },
    {
      title: 'Other',
      skills: [highcharts(), reactFlow(), mapbox(), leaflet(), formik(), reactHookForm()],
    },
    {
      title: 'Tools & Practices',
      skills: [
        jira(),
        git(),
        vite(),
        webpack(),
        salesforce(),
        tableau(),
        figma(),
        photoshop(),
        premierePro(),
        capcut(),
        agile(),
        restApi(),
        strategicDDD(),
        jamstack(),
        atomicDesign(),
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
