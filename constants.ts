
import { RegionalRiskData, StudyHighlight, MapLocation, SahelCaseStudy, MethodologyMetric, ProtectionStatusData } from "./types";

// Extracted from PDF: Fig 2 Text (Page 5)
export const REGIONAL_RISK_DATA: RegionalRiskData[] = [
  { region: 'Europe', threatenedPercentage: 90 },
  { region: 'Asia', threatenedPercentage: 75 },
  { region: 'North America', threatenedPercentage: 65 },
  { region: 'South America', threatenedPercentage: 37 },
  { region: 'Oceania', threatenedPercentage: 29 },
  { region: 'Africa', threatenedPercentage: 17 },
];

// Extracted from PDF: Fig 4 (Page 5/105)
export const PROTECTION_STATUS_DATA: ProtectionStatusData[] = [
  { name: 'No Protection', value: 79, color: '#ef4444' }, // Red
  { name: 'Protected Area / Policy', value: 19, color: '#3b82f6' }, // Blue
  { name: 'Full Protection', value: 2, color: '#8b5cf6' }, // Purple
];

export const STUDY_HIGHLIGHTS: StudyHighlight[] = [
  {
    id: 'h1',
    title: 'Global Extent',
    value: '1/3',
    description: 'Of global drylands contain Groundwater-Dependent Ecosystems (GDEs), mapped at high-resolution (30m).',
    iconType: 'map'
  },
  {
    id: 'h2',
    title: 'Urgent Threat',
    value: '53%',
    description: 'Of GDEs exist in regions with declining groundwater trends, signaling a critical need for intervention.',
    iconType: 'alert'
  },
  {
    id: 'h3',
    title: 'Protection Gap',
    value: '21%',
    description: 'Only a fraction of GDEs exist on protected lands or in jurisdictions with sustainable management policies.',
    iconType: 'shield'
  },
  {
    id: 'h4',
    title: 'Human Linkage',
    value: 'Sahel',
    description: 'GDEs are crucial for rural livelihoods and pastoralism, often overlapping with conflict zones in unstable regions.',
    iconType: 'people'
  }
];

export const METHODOLOGY_METRICS: MethodologyMetric[] = [
  {
    id: 'm1',
    value: '30m',
    label: 'High Resolution',
    detail: 'First global GDE map at 1 arcsecond (~30m) utilizing Landsat 8 imagery (2015-2020).'
  },
  {
    id: 'm2',
    value: '34,454',
    label: 'Training Points',
    detail: 'Extensive ground-truthed dataset used to train the Random Forest machine learning model.'
  },
  {
    id: 'm3',
    value: '84%',
    label: 'Model Accuracy',
    detail: 'Validated against independent datasets with an 87% recall rate for detecting GDEs.'
  },
  {
    id: 'm4',
    value: '11',
    label: 'Predictors',
    detail: 'Key variables including ETaP (Transpiration/Precipitation) and Land Surface Temperature (LST).'
  }
];

export const NAV_LINKS = [
  { name: 'Overview', href: '#overview' },
  { name: 'Key Findings', href: '#highlights' },
  { name: 'Hotspots', href: '#map' },
  { name: 'Case Study', href: '#impact' },
  { name: 'Data Analysis', href: '#trends' },
  { name: 'Methodology', href: '#methodology' },
];

export const MAP_LOCATIONS: MapLocation[] = [
  {
    id: 'loc1',
    name: 'California Central Valley',
    coords: { x: 15, y: 38 },
    type: 'Depletion',
    description: 'Intensive groundwater pumping has disconnected water tables from root zones, fragmenting ecosystems.',
    stat: 'High Depletion'
  },
  {
    id: 'loc2',
    name: 'The Greater Sahel',
    coords: { x: 50, y: 45 },
    type: 'Conflict',
    description: 'Overlap between GDEs and conflict zones. Critical for pastoral livelihoods during dry seasons.',
    stat: 'Livelihood Critical'
  },
  {
    id: 'loc3',
    name: 'Central Asia',
    coords: { x: 70, y: 35 },
    type: 'Biodiversity',
    description: 'Extensive and contiguous GDEs dominated by pastoralism with lower current depletion rates.',
    stat: 'Pastoral Hub'
  },
  {
    id: 'loc4',
    name: 'Great Artesian Basin',
    coords: { x: 85, y: 75 },
    type: 'Policy',
    description: 'Home to established frameworks like the National Water Initiative, yet implementation gaps remain.',
    stat: 'Policy Framework'
  }
];

export const SAHEL_CASE_STUDY: SahelCaseStudy = {
  title: "The Fragility of GDEs in the Greater Sahel",
  content: "In politically unstable regions, GDEs play an essential role in supporting biodiversity and rural livelihoods, providing relief along human migration pathways.",
  points: [
    "Conflict Hotspots: High prevalence of GDEs in Liptako–Gourma and Lake Chad Basin.",
    "Resource Competition: Herders move to GDEs during droughts, exacerbating conflict with sedentary farmers.",
    "Policy Risk: Single-objective food security policies (e.g., encouraged irrigation) may unintentionally deplete these critical refugia."
  ]
};
