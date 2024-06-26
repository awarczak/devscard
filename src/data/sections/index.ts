import type { Sections } from '@/types/data';
import type { ReadonlyDeep } from 'type-fest';
import educationData from './education-section.data';
import experienceData from './experience-section.data';
import mainData from './main-section.data';
import portfolioData from './portfolio-section.data';
import skillsData from './skills-section.data';
import communityData from './community-section.data';

export const sections = {
  main: mainData,
  skills: skillsData,
  experience: experienceData,
  portfolio: portfolioData,
  community: communityData,
  education: educationData,
} as const satisfies ReadonlyDeep<Sections>;

export default sections;
