export interface ResearchArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: 'Ecological Restoration' | 'Hydrology' | 'Remote Sensing' | 'Policy';
}

export interface ChartDataPoint {
  year: string;
  vegetationIndex: number;
  groundwaterLevel: number;
  desertificationRate: number;
}

export enum Sender {
  User = 'user',
  Bot = 'bot'
}

export interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface MapLocation {
  id: string;
  name: string;
  coords: { x: number; y: number }; // Percentage based coordinates on map
  aridityIndex: number;
  vegetationCoverage: string;
  projectCount: number;
  description: string;
}

export interface FrontierPaper {
  id: string;
  title: string;
  journal: string;
  authors: string;
  date: string;
  abstractUrl: string; // Mock URL
  summary: string;
}

export interface ExpertInterview {
  id: string;
  name: string;
  role: string;
  topic: string;
  quote: string;
  imageUrl: string;
}