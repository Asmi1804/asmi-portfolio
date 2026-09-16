export type ProjectCategory = 'All' | 'Software' | 'Web' | 'IoT' | 'AI/ML' | 'Academic';

export type SkillProficiency = 'Core' | 'Working Knowledge' | 'Familiar';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: ('Software' | 'Web' | 'IoT' | 'AI/ML' | 'Academic')[];
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  contribution: string;
  learned: string;
  featured?: boolean;
  metrics?: ProjectMetric[];
  statusLabel: string;
  architectureNote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  durationNote: string;
  year: string;
  description: string;
  highlights: string[];
  skills: string[];
  type: 'Internship' | 'Associate' | 'Industrial';
}

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  institution: string;
  year: string;
  summary: string;
  keyContributions: string[];
  significance: string;
  status: string;
}

export interface SkillItem {
  name: string;
  level: SkillProficiency;
  context?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  category: string;
  highlights: string;
  skillsCovered: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  notes?: string;
}

export interface ProfileData {
  name: string;
  role: string;
  heroHeadline: string;
  heroSubtext: string;
  location: string;
  email: string;
  phone: string;
  availabilityStatus: string;
  socials: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
  currentlyLearning: string[];
  softSkills: string[];
  languages: string[];
}
