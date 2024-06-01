import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  cypress,
  react,
  sass,
  tailwindCss,
  html,
  typescript,
  nextJs,
  reactQuery,
  css,
  rtl,
  jest,
  highcharts,
  mapbox,
  materialUI,
  reactFlow,
  rwd,
  redux,
  storybook,
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
  photoshop,
  premierePro,
  capcut,
  agile,
  restApi,
  strategicDDD,
  atomicDesign,
  figma,
  nestJs,
  nodeJS,
  expressJS,
  firebase,
  jotai,
  mySQL,
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
        html({ level: 5 }),
        javascript({ level: 5 }),
        typescript({
          level: 5,
        }),
        react({
          level: 5,
        }),
        nextJs({ level: 3 }),
        expressJS({ level: 3 }),
        nodeJS({ level: 2 }),
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
      skills: [highcharts(), reactFlow(), mapbox(), leaflet(), formik(), reactHookForm(), firebase()],
    },
    {
      title: 'Tools & Practices',
      skills: [
        jira(),
        git(),
        vite(),
        webpack(),
        rwd(),
        figma(),
        photoshop(),
        premierePro(),
        capcut(),
        agile(),
        restApi(),
        strategicDDD(),
        atomicDesign(),
      ],
    },
    {
      title: 'I want to learn',
      skills: [mySQL(), jotai(), nestJs()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - A2' },
      ],
    },
    {
      title: 'Domain Knowledge',
      skills: [],
      info: `For over 10 years, I've had a personal interest in healthy lifestyle, nutrition, and strength training, and I'm also involved in the broader fitness industry." <br> 🏋️‍♀️🏃‍♀️🍏🥑🍑`,
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
