import { ChartDataPoint, ResearchArticle, MapLocation, FrontierPaper, ExpertInterview } from "./types";

export const MOCK_RESEARCH_DATA: ResearchArticle[] = [
  {
    id: '1',
    title: 'Adaptive Mechanisms of Populus euphratica in Arid Zones',
    excerpt: 'Investigating the physiological responses of key species to fluctuating groundwater levels in the Tarim Basin.',
    author: 'Dr. L. Zhang',
    date: 'Oct 2023',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    category: 'Ecological Restoration'
  },
  {
    id: '2',
    title: 'Remote Sensing Analysis of Dune Migration Patterns',
    excerpt: 'Using Sentinel-2 satellite imagery to track the encroachment of shifting sands onto oasis agriculture.',
    author: 'Prof. A. Al-Mansoori',
    date: 'Sep 2023',
    imageUrl: 'https://picsum.photos/id/28/800/600',
    category: 'Remote Sensing'
  },
  {
    id: '3',
    title: 'Sustainable Water Allocation Models',
    excerpt: 'Balancing ecological water demand with agricultural needs in the Heihe River Basin using AI-driven models.',
    author: 'Research Group Alpha',
    date: 'Nov 2023',
    imageUrl: 'https://picsum.photos/id/54/800/600',
    category: 'Hydrology'
  },
  {
    id: '4',
    title: 'Socio-Economic Impacts of Desertification Control',
    excerpt: 'A decade-long study on how "Green Wall" initiatives affect local community livelihoods and migration.',
    author: 'Dr. Sarah Chen',
    date: 'Aug 2023',
    imageUrl: 'https://picsum.photos/id/16/800/600',
    category: 'Policy'
  }
];

export const TREND_DATA: ChartDataPoint[] = [
  { year: '2018', vegetationIndex: 0.32, groundwaterLevel: -12.5, desertificationRate: 45 },
  { year: '2019', vegetationIndex: 0.34, groundwaterLevel: -12.8, desertificationRate: 42 },
  { year: '2020', vegetationIndex: 0.38, groundwaterLevel: -13.0, desertificationRate: 38 },
  { year: '2021', vegetationIndex: 0.41, groundwaterLevel: -12.2, desertificationRate: 35 },
  { year: '2022', vegetationIndex: 0.45, groundwaterLevel: -11.5, desertificationRate: 30 },
  { year: '2023', vegetationIndex: 0.49, groundwaterLevel: -11.0, desertificationRate: 28 },
];

export const NAV_LINKS = [
  { name: 'Research', href: '#research' },
  { name: 'Global Monitor', href: '#map' },
  { name: 'Frontier', href: '#frontier' },
  { name: 'Data Trends', href: '#trends' },
];

export const MAP_LOCATIONS: MapLocation[] = [
  {
    id: 'loc1',
    name: 'Tarim Basin, China',
    coords: { x: 72, y: 35 },
    aridityIndex: 0.05,
    vegetationCoverage: '12% (Recovering)',
    projectCount: 4,
    description: 'Focus on Populus euphratica regeneration and groundwater banking.'
  },
  {
    id: 'loc2',
    name: 'Sahel Region, Africa',
    coords: { x: 52, y: 45 },
    aridityIndex: 0.12,
    vegetationCoverage: '8% (Critical)',
    projectCount: 7,
    description: 'The Great Green Wall initiative: combating southern Sahara expansion.'
  },
  {
    id: 'loc3',
    name: 'Mojave Desert, USA',
    coords: { x: 18, y: 38 },
    aridityIndex: 0.15,
    vegetationCoverage: '15% (Stable)',
    projectCount: 3,
    description: 'Research into solar farm impacts on cryptobiotic soil crusts.'
  },
  {
    id: 'loc4',
    name: 'Great Victoria Desert, Australia',
    coords: { x: 85, y: 75 },
    aridityIndex: 0.08,
    vegetationCoverage: '18% (Stable)',
    projectCount: 2,
    description: 'Indigenous land management practices and fire ecology studies.'
  }
];

export const FRONTIER_PAPERS: FrontierPaper[] = [
  {
    id: 'p1',
    title: 'Global dryland expansion under a warming climate',
    journal: 'Nature Climate Change',
    authors: 'J. Huang, et al.',
    date: 'Jan 2024',
    abstractUrl: 'https://www.nature.com/nclimate/',
    summary: 'New modeling predicts a 10% expansion of arid zones by 2050, highlighting critical tipping points in semi-arid ecosystems.'
  },
  {
    id: 'p2',
    title: 'Rapid groundwater depletion in global aquifers',
    journal: 'Science',
    authors: 'S. Jasechko, et al.',
    date: 'Feb 2024',
    abstractUrl: 'https://www.science.org/',
    summary: 'Satellite gravimetry reveals accelerated aquifer decline in key agricultural oases, necessitating urgent policy reform.'
  },
  {
    id: 'p3',
    title: 'Restoring soil microbiome diversity in degraded lands',
    journal: 'PNAS',
    authors: 'M. Delgado-Baquerizo',
    date: 'Mar 2024',
    abstractUrl: 'https://www.pnas.org/',
    summary: 'Inoculation with native soil biocrusts significantly improves water retention and seedling survival rates in restoration projects.'
  }
];

export const EXPERT_INTERVIEW: ExpertInterview = {
  id: 'e1',
  name: 'Dr. Elena Mironova',
  role: 'Senior Hydrologist, UN Desertification Council',
  topic: 'The Future of Subsurface Water',
  quote: 'We are moving past the era of surface reclamation. The next frontier is understanding the deep vadose zone and how ancient water reserves interact with modern climate stress. It is not just about planting trees; it is about engineering the soil itself.',
  imageUrl: 'https://picsum.photos/id/64/400/400'
};