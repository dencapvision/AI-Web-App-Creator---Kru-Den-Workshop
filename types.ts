
export enum WorkshopStage {
  HOOK = 'Hook: Magic is Real',
  IDEATION = 'Ideation: AI Studio',
  GITHUB = 'GitHub: Digital Safe',
  VERCEL = 'Vercel: Launch Pad',
  REFLECTION = 'Reflection & Show-off'
}

export interface WorkshopStep {
  id: string;
  title: string;
  description: string;
  why: string;
  how: string;
  tools: string[];
  duration: number;
}

export interface ReflectionData {
  what: string;
  soWhat: string;
  nowWhat: string;
  confidence: number;
}

export interface ProjectChecklist {
  githubAccount: boolean;
  repoCreated: boolean;
  codeUploaded: boolean;
  vercelConnected: boolean;
  deployed: boolean;
}
