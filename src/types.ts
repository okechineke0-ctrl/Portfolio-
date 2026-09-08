export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'company' | 'web' | 'enterprise' | 'academic';
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

export interface SkillGroup {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}
