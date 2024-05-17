import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'Tanstack Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'logos:javascript',
  iconColor: '#3178C6',
  url: 'https://www.javascript.com/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'cib:jira',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'skill-icons:css',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const rtl = createSkillFactory({
  name: 'React Testing Library',
  icon: 'logos:testing-library',
  iconColor: '#CC6699',
  url: 'https://testing-library.com/docs/react-testing-library/intro/',
});

export const shadcn = createSkillFactory({
  name: 'shadcn/ui',
  icon: 'simple-icons:shadcnui',
  iconColor: '#1c2024',
  url: 'https://ui.shadcn.com/',
});

export const radixUI = createSkillFactory({
  name: 'Radix UI',
  icon: 'simple-icons:radixui',
  iconColor: '#1c2024',
  url: 'https://www.radix-ui.com/',
});

export const materialUI = createSkillFactory({
  name: 'Material UI',
  icon: 'logos:material-ui',
  iconColor: '#CC6699',
  url: 'https://mui.com/',
});

export const highcharts = createSkillFactory({
  name: 'Highcharts',
  icon: 'logos:highcharts',
  iconColor: '#CC6699',
  url: 'https://www.highcharts.com/',
});

export const mailgun = createSkillFactory({
  name: 'Mailgun',
  icon: 'logos:mailgun-icon',
  iconColor: '#CC6699',
  url: 'https://www.mailgun.com/',
});

export const mapbox = createSkillFactory({
  name: 'Mapbox',
  icon: 'logos:mapbox-icon',
  iconColor: '#CC6699',
  url: 'https://www.mapbox.com/',
});

export const figma = createSkillFactory({
  name: 'Figma',
  icon: 'logos:figma',
  iconColor: '#CC6699',
  url: 'https://www.figma.com/',
});

export const adobePremiere = createSkillFactory({
  name: 'Adobe Premiere Pro',
  icon: 'logos:adobe-premiere',
  iconColor: '#CC6699',
  url: 'https://www.adobe.com/products/premiere.html',
});

export const ddd = createSkillFactory({
  name: 'Domain Driven Design',
  icon: 'ion:cube-outline',
  iconColor: '#CC6699',
});

export const reactFlow = createSkillFactory({
  name: 'React Flow',
  icon: 'hugeicons:flow',
  iconColor: '#CC6699',
  url: 'https://reactflow.dev/',
});

export const redux = createSkillFactory({
  name: 'Redux',
  icon: 'logos:redux',
  iconColor: '#CC6699',
  url: 'https://redux.js.org/',
});

export const mobx = createSkillFactory({
  name: 'Mobx',
  icon: 'logos:redux',
  iconColor: '#CC6699',
  url: 'https://reactflow.dev/',
});

export const storybook = createSkillFactory({
  name: 'Storybook',
  icon: 'logos:storybook-icon',
  iconColor: '#CC6699',
  url: 'https://storybook.js.org/',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'logos:bootstrap',
  iconColor: '#CC6699',
  url: 'https://getbootstrap.com/',
});

export const turborepo = createSkillFactory({
  name: 'Turborepo',
  icon: 'logos:turborepo-icon',
  iconColor: '#CC6699',
  url: 'https://turbo.build/',
});

export const vitest = createSkillFactory({
  name: 'Vitest',
  icon: 'logos:vitest',
  iconColor: '#CC6699',
  url: 'https://vitest.dev/',
});

export const zustand = createSkillFactory({
  name: 'Zustand',
  icon: 'noto:bear',
  iconColor: '#CC6699',
  url: 'https://zustand-demo.pmnd.rs/',
});

export const vite = createSkillFactory({
  name: 'Vite',
  icon: 'vscode-icons:file-type-vite',
  iconColor: '#CC6699',
  url: 'https://vitejs.dev/',
});

export const webpack = createSkillFactory({
  name: 'Webpack',
  icon: 'logos:webpack',
  iconColor: '#CC6699',
  url: 'https://webpack.js.org/',
});

export const apolloClient = createSkillFactory({
  name: 'Apollo Client',
  icon: 'logos:apollostack',
  iconColor: '#CC6699',
  url: 'https://www.apollographql.com/docs/react/',
});

export const tableau = createSkillFactory({
  name: 'Tableau',
  icon: 'logos:tableau-icon',
  iconColor: '#CC6699',
  url: 'https://www.tableau.com/',
});

export const d3 = createSkillFactory({
  name: 'D3',
  icon: 'logos:d3',
  iconColor: '#CC6699',
  url: 'https://d3js.org/',
});

export const leaflet = createSkillFactory({
  name: 'Leaflet',
  icon: 'simple-icons:leaflet',
  iconColor: '#B7E263',
  url: 'https://leafletjs.com/',
});
