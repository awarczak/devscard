import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Information Technology',
      institution: 'Wrocław University of Science and Technology',
      image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2017.10'), new Date('2023.01')],
      description: "Engineer's degree. Specialization in Management Engineering – Information Technology in Business.",
      links: [website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
