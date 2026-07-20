export type ProjectCategory = 'electrical' | 'instrumentation'

export type ProjectFilter = 'all' | ProjectCategory

export interface Project {
  id: string
  client: string
  location: string
  scopeOfWork: string
  projectDetails: string
  category: ProjectCategory
}

export const portfolioStats = [
  { value: '19+', label: 'Major Clients' },
  { value: '200+', label: 'Projects Done' },
  { value: '20+', label: 'Years Experience' },
] as const

export const projects: Project[] = [
  {
    id: 'industrial-sales-service',
    client: 'Industrial Sales & Service',
    location: 'Jamshedpur, Jharkhand',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System (MBF)',
    projectDetails: 'M/s Tayo Rolls Ltd. Gamharia, Jharkhand (2004)',
    category: 'instrumentation',
  },
  {
    id: 'paradigm-engineers',
    client: 'Paradigm Engineers & Consultants Pvt. Ltd.',
    location: 'Adityapur, Jharkhand',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System (MBF)',
    projectDetails:
      'M/s Neepaz Metalicks Ltd. Rourkela (2005) · M/s Neo Metalicks Ltd. Durgapur (2006)',
    category: 'instrumentation',
  },
  {
    id: 'prowess-international',
    client: 'Prowess International Pvt. Ltd.',
    location: 'Adityapur, Jharkhand',
    scopeOfWork:
      'E&C of Instrumentation System — Oxygen Management & Carbon Injection System',
    projectDetails:
      'M/s Mahindra Ugine Steel Co. Ltd. Khapoli · M/s Jindal Steel and Power Ltd. Raigarh',
    category: 'instrumentation',
  },
  {
    id: 'chemtrols-industries',
    client: 'Chemtrols Industries Ltd.',
    location: 'Jamshedpur, Jharkhand',
    scopeOfWork: 'Erection & Commissioning of Sox, NOx Analyzer System',
    projectDetails: 'Tata Power Plant, Jojobera, Jharkhand — all 5 units',
    category: 'instrumentation',
  },
  {
    id: 'orissa-manganese-kandra',
    client: 'Orissa Manganese & Minerel Ltd.',
    location: 'Kandra, Jharkhand',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System',
    projectDetails: 'Pellet Plant',
    category: 'instrumentation',
  },
  {
    id: 'chandrakanta-electricals',
    client: 'Chandrakanta Electricals',
    location: 'Jamshedpur, Jharkhand',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System',
    projectDetails: 'Tata Steel Jamshedpur — Re-Heating Furnace',
    category: 'electrical',
  },
  {
    id: 'swastik-electricals',
    client: 'Swastik Electricals',
    location: 'Jamshedpur, Jharkhand',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System',
    projectDetails: 'Tata Steel Ltd. KPO — Walking Beam Furnace 1 & 2 (2014)',
    category: 'electrical',
  },
  {
    id: 'tata-steel-kalinga-nagar',
    client: 'Tata Steel Limited',
    location: 'Kalinga Nagar, Jajpur, Orissa',
    scopeOfWork:
      'Erection & Commissioning of Instrumentation System — Blast Furnace & PCI',
    projectDetails: 'Vendor Code M553 · Order Date 03-01-2017 & 02-03-2017',
    category: 'instrumentation',
  },
  {
    id: 'smc-power-generation',
    client: 'SMC Power Generation Ltd.',
    location: 'Odisha',
    scopeOfWork:
      'E&C of Instrumentation System — 30 MW & 40 MW Power Plant, WHRB 1–9',
    projectDetails: 'Re-start MBF & Sinter Plant',
    category: 'electrical',
  },
  {
    id: 'tenova-india',
    client: 'Tenova India Private Ltd.',
    location: 'Jajpur, Odisha',
    scopeOfWork: 'Manpower Service Technician',
    projectDetails: 'Tata KPO, Jajpur Odisha',
    category: 'instrumentation',
  },
  {
    id: 'kic-metaliks',
    client: 'KIC Metaliks Limited',
    location: 'Durgapur, West Bengal',
    scopeOfWork: 'E&C of Instrumentation System — MBF, PCI, Sinter Plant, APH & BFGH',
    projectDetails: 'Complete plant instrumentation and commissioning',
    category: 'instrumentation',
  },
  {
    id: 'tata-steel-long-products',
    client: 'Tata Steel Long Products Ltd.',
    location: 'Seraikela-Kharsawan, Jharkhand',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System — BF MSD',
    projectDetails: 'June 2020 · December 2020 · May 2021',
    category: 'instrumentation',
  },
  {
    id: 'purulia-metal-casting',
    client: 'Purulia Metal Casting (P) Ltd.',
    location: 'West Bengal',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System',
    projectDetails: 'Sinter Plant',
    category: 'instrumentation',
  },
  {
    id: 'msp-metallics',
    client: 'MSP Metallics Ltd.',
    location: 'Jharsuguda, Odisha',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System',
    projectDetails: 'MBF & Oxygen Plant',
    category: 'instrumentation',
  },
  {
    id: 'shri-mahavir-ferro-alloys',
    client: 'Shri Mahavir Ferro Alloys (P) Ltd.',
    location: 'India',
    scopeOfWork: 'Erection of Electrical & Instrumentation Equipment',
    projectDetails: 'Captive Power Plant',
    category: 'electrical',
  },
  {
    id: 'bengal-energy',
    client: 'Bengal Energy Ltd.',
    location: 'Kharagpur, West Bengal',
    scopeOfWork: 'Erection of Electrical & Instrumentation Equipment',
    projectDetails: 'Sinter Plant',
    category: 'electrical',
  },
  {
    id: 'circle-resources',
    client: 'Circle Resources Pvt. Ltd.',
    location: 'Kharagpur, West Bengal',
    scopeOfWork: 'Erection of Electrical & Instrumentation Equipment',
    projectDetails: 'Blast Furnace',
    category: 'electrical',
  },
  {
    id: 'envirocare-infrasolution',
    client: 'Envirocare Infrasolution Pvt. Ltd.',
    location: 'India',
    scopeOfWork: 'Control & Instrumentation (C&I) Works',
    projectDetails: '2X DRI & WH based CPP Project',
    category: 'instrumentation',
  },
  {
    id: 'shyam-sel-power',
    client: 'Shyam Sel and Power Ltd.',
    location: 'Jamuria, Asansol, West Bengal',
    scopeOfWork: 'Erection & Commissioning of Instrumentation System',
    projectDetails: 'Blast Furnace, PCI, Sinter Plant & TRT',
    category: 'electrical',
  },
]

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'instrumentation', label: 'Instrumentation' },
]

export function getCategoryLabel(category: ProjectCategory): string {
  return category === 'electrical' ? 'Electrical' : 'Instrumentation'
}
