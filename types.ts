
export interface StudyHighlight {
  id: string;
  title: string;
  value: string;
  description: string;
  iconType: 'alert' | 'shield' | 'map' | 'people';
}

export interface RegionalRiskData {
  region: string;
  threatenedPercentage: number;
}

export interface ProtectionStatusData {
  name: string;
  value: number;
  color: string;
}

export interface MapLocation {
  id: string;
  name: string;
  coords: { x: number; y: number };
  type: 'Conflict' | 'Depletion' | 'Policy' | 'Biodiversity';
  description: string;
  stat?: string;
}

export interface SahelCaseStudy {
  title: string;
  content: string;
  points: string[];
}

export interface MethodologyMetric {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export enum Sender {
  User = 'user',
  Bot = 'bot',
}

export interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  timestamp: Date;
  isError?: boolean;
}
