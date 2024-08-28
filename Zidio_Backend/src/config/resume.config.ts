import * as dotenv from 'dotenv';
dotenv.config();

const ResumeConfig = {
  resumeCount: Number(process.env.RESUME_COUNT) || 3,
  educationCount: Number(process.env.EDUCATION_COUNT) || 10,
  experienceCount: Number(process.env.EXPERIENCE_COUNT) || 10,
  projectCount: Number(process.env.PROJECT_COUNT) || 10,
  certificationCount: Number(process.env.CERTIFICATION_COUNT) || 10,
  publicationCount: Number(process.env.PUBLICATION_COUNT) || 10,
  customSectionCount: Number(process.env.CUSTOM_SECTION_COUNT) || 3,
  skillCount: Number(process.env.SKILL_COUNT) || 10,
};

export { ResumeConfig };
