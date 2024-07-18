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
  wcag,
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
  ddd,
  atomicDesign,
  figma,
  nestJs,
  nodeJS,
  expressJS,
  firebase,
  mySQL,
  threeJs,
  webGl
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
        html({ level: 4 }),
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
      title: 'Other',
      skills: [
        jest(),
        cypress(),
        rtl(),
        highcharts(),
        reactFlow(),
        mapbox(),
        leaflet(),
        formik(),
        reactHookForm(),
        firebase(),
      ],
    },
    {
      title: 'Tools & Practices',
      skills: [
        jira(),
        git(),
        vite(),
        webpack(),
        rwd(),
        atomicDesign(),
        agile(),
        ddd(),
        wcag(),
        figma(),
        photoshop(),
        premierePro(),
        capcut(),
      ],
    },
    {
      title: 'I want to learn',
      skills: [mySQL(), nestJs(), threeJs(), webGl()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - A2' },
      ],
    }
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
