import {
  Plug,
  SlidersHorizontal,
  Zap,
  Factory,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export interface ServiceItem {
  title: string
  description: string
}

export interface ServiceCategory {
  id: string
  title: string
  icon: LucideIcon
  highlights: string[]
  summary: string
  items: ServiceItem[]
  keyClients: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'electrical-services',
    title: 'Electrical Services',
    icon: Plug,
    highlights: ['Wiring & installation', 'Panel setup', 'Maintenance'],
    summary:
      'Max Engineering provides end-to-end electrical solutions for industrial plants. From high-voltage wiring to complex panel installations, our certified electricians ensure safe, reliable, and code-compliant work across all project sites.',
    items: [
      {
        title: 'Heavy-Duty Wiring & Installation',
        description:
          'Complete electrical wiring for industrial facilities including power cable laying (LT), cable glanding & termination, and cable schedule making with ferrule printing. We handle signal, control, and power cables with proper separation to avoid electromagnetic interference.',
      },
      {
        title: 'Panel Erection & Setup',
        description:
          'Professional erection and commissioning of DCS, MCC, PCC, RIO, and Drive Panels. We ensure proper mounting, wiring, earthing, and integration with existing plant control systems.',
      },
      {
        title: 'Electrical Maintenance',
        description:
          'Preventive and corrective maintenance services for industrial electrical systems. Our 24/7 emergency support ensures minimum downtime for your critical operations.',
      },
      {
        title: 'Cable Tray Systems',
        description:
          'Design and installation of ladder-type and perforated cable trays. We handle route planning, fabrication, mounting with proper supports, and complete documentation for easy future maintenance.',
      },
    ],
    keyClients:
      'Tata Steel, Chandrakanta Electricals, Swastik Electricals, SMC Power Generation, Bengal Energy Ltd.',
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation',
    icon: SlidersHorizontal,
    highlights: ['Process control systems', 'Calibration', 'Installation'],
    summary:
      'Our core expertise lies in industrial instrumentation — designing, installing, and commissioning precision measurement and control systems for steel plants, power plants, and manufacturing facilities across India.',
    items: [
      {
        title: 'Process Control Systems',
        description:
          'Complete instrumentation for Blast Furnaces, Sinter Plants, PCI systems, and Power Plants. We install and configure transmitters, sensors, analyzers, and control valves for temperature, pressure, flow, and level measurement.',
      },
      {
        title: 'Calibration Services',
        description:
          "Total process control instruments calibration using industry-standard references. Every sensor and transmitter is calibrated to meet your plant's specifications, with full documentation and traceability.",
      },
      {
        title: 'Erection & Commissioning',
        description:
          'End-to-end E&C services from field instrument installation to loop checking and plant startup support. We handle everything from cable laying to final commissioning, ensuring seamless integration with your DCS/SCADA systems.',
      },
      {
        title: 'Sox/NOx Analyzer Systems',
        description:
          'Specialized installation and commissioning of emissions monitoring systems including Sox and NOx analyzers for power plants and industrial units, ensuring environmental compliance.',
      },
    ],
    keyClients:
      'Tata Steel Limited, KIC Metaliks, Prowess International, Chemtrols Industries, MSP Metallics Ltd.',
  },
  {
    id: 'power-plant-instrumentation',
    title: 'Power Plant Instrumentation',
    icon: Zap,
    highlights: ['WHRB instrumentation', 'Captive Power Plants', 'Turbine monitoring'],
    summary:
      'Specialized instrumentation services for power generation facilities including Waste Heat Recovery Boilers (WHRB), Captive Power Plants (CPP), and CFBC boilers.',
    items: [
      {
        title: 'WHRB Instrumentation',
        description:
          'Complete instrumentation for Waste Heat Recovery Boilers — steam pressure monitoring, temperature profiling, flow measurement, and safety interlock systems for efficient heat recovery.',
      },
      {
        title: 'Captive Power Plant (CPP)',
        description:
          'End-to-end C&I works for captive power plants including turbine speed monitoring, generator output measurement, and integrated control systems.',
      },
      {
        title: 'Safety & Interlock Systems',
        description:
          'Design and implementation of safety instrumented systems (SIS) and emergency shutdown systems to protect critical power generation equipment and personnel.',
      },
    ],
    keyClients:
      'SMC Power Generation Ltd., Shri Mahavir Ferro Alloys, Envirocare Infrasolution Pvt. Ltd.',
  },
  {
    id: 'blast-furnace-pci',
    title: 'Blast Furnace & PCI',
    icon: Factory,
    highlights: ['BF instrumentation', 'PCI systems', 'Sinter plant controls'],
    summary:
      'Deep expertise in instrumentation for iron-making facilities. We have successfully completed multiple Blast Furnace, PCI, and Sinter Plant instrumentation projects for major steel producers.',
    items: [
      {
        title: 'Blast Furnace Instrumentation',
        description:
          'Temperature monitoring, pressure control, gas flow measurement, burden distribution systems, and cooling water monitoring for optimal iron production.',
      },
      {
        title: 'Pulverized Coal Injection (PCI)',
        description:
          'Precise measurement of coal flow rates, injection pressures, and carrier gas systems to reduce coke consumption and optimize furnace efficiency.',
      },
      {
        title: 'Sinter Plant Controls',
        description:
          'Instrumentation for sintering process control — bed temperature monitoring, exhaust gas composition analysis, fan speed control, and material handling systems.',
      },
    ],
    keyClients:
      'Tata Steel (Kalinga Nagar), KIC Metaliks (Durgapur), Shyam Sel and Power Ltd., Circle Resources Pvt. Ltd.',
  },
  {
    id: 'manpower-services',
    title: 'Manpower Services',
    icon: Users,
    highlights: ['Skilled technicians', 'Project-based deployment', 'On-site support'],
    summary:
      'We provide skilled manpower for industrial projects — experienced instrumentation technicians, electricians, and supervisors who can integrate seamlessly with your project teams.',
    items: [
      {
        title: 'Skilled Technician Deployment',
        description:
          'Trained and certified instrumentation and electrical technicians available for short-term and long-term project deployments across India.',
      },
      {
        title: 'On-Site Commissioning Support',
        description:
          'Dedicated engineers and technicians for plant startup and commissioning support, ensuring smooth handover from installation to operations.',
      },
      {
        title: 'Project Team Augmentation',
        description:
          'Flexible team scaling for large projects — supervisors, quality inspectors, safety officers, and skilled workers to supplement your existing workforce.',
      },
    ],
    keyClients: 'Tenova India Pvt. Ltd., Tata Steel KPO, and various industrial clients.',
  },
  {
    id: 'fabrication-erection',
    title: 'Fabrication & Erection',
    icon: Wrench,
    highlights: ['Instrument stands', 'Canopy fabrication', 'Custom structures'],
    summary:
      'On-site and off-site fabrication of instrument stands, canopies, brackets, and custom support structures for industrial instrumentation and electrical installations.',
    items: [
      {
        title: 'Instrument Stand Fabrication',
        description:
          'Custom-designed and fabricated instrument stands and mounting structures for field instruments, ensuring proper height, accessibility, and vibration isolation.',
      },
      {
        title: 'Canopy & Weather Protection',
        description:
          'Fabrication and erection of protective canopies for sensitive instruments and junction boxes exposed to harsh industrial environments.',
      },
      {
        title: 'Cable Tray Fabrication',
        description:
          'Custom cable tray sizes and configurations — ladder type and perforated type — fabricated to match specific plant requirements and routing plans.',
      },
    ],
    keyClients: 'Various industrial clients across Jharkhand, Odisha, and West Bengal.',
  },
]
