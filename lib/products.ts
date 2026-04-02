export interface Product {
  id: string
  name: string
  category: string
  description: string
  longDescription: string
  price: string
  image: string
  specifications: {
    [key: string]: string
  }
}

export const products: Product[] = [
  // Transmitters
  {
    id: 'tr-101',
    name: 'Pressure Transmitters',
    category: 'Transmitters',
    description: 'Max pressure transmitters feature industry-leading performance and unique features that lower total cost of ownership.',
    longDescription: 'Max pressure transmitters feature industry-leading performance, unique features that lower total cost of ownership and Smart Connection Suite for the best control system integration. Pressure transmitters are used to measure the pressure or level of industrial liquids and gases. The output is transmitted to a control system. Accurate and stable process measurements ensure the safe, reliable, and profitable operation of your plant. Compact, lightweight, intuitive and intelligent, our pressure instruments simplify all aspects of handling, commissioning, installation, operation, and maintenance while delivering outstanding performance. Whether installed in the harsh environment of an offshore platform or a refinery in the burning desert heat, our DPharp series delivers accurate, repeatable, and high integrity process measurements.',
    price: 'Custom Quote',
    image: '/transmit_1.jpg',
    specifications: {
      series: 'DPharp High Performance',
      integration: 'Smart Connection Suite',
      maintenance: 'Predictive Lifecycle',
      environment: 'Extreme Condition Certified'
    }
  },
  // Gauges
  {
    id: 'ga-101',
    name: 'Industrial Process Gauge PG-10',
    category: 'Gauges',
    description: 'Precision mechanical process gauge',
    longDescription: 'Engineered for severe duty service, the PG-10 series process gauge provides reliable pressure measurement in the most challenging industrial conditions. Features a solid front safety case and a high-stability sensing element.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      range: '0-400 PSI',
      accuracy: 'Grade 2A (±0.5%)',
      material: 'SS 316L',
      connection: '1/2" NPT'
    }
  },
  // Switches
  {
    id: 'sw-101',
    name: 'Tactical Pressure Switch SW-5',
    category: 'Switches',
    description: 'Heavy-duty industrial pressure switch',
    longDescription: 'Reliable switching for critical system control. The SW-5 series offers precise set-point adjustment and high-integrity microswitches for redundant safety systems in power and chemical plants.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      setpoint: 'Adjustable 50-200 PSI',
      accuracy: '±1%',
      enclosure: 'IP66 Weatherproof',
      contact: 'SPDT / DPDT'
    }
  },
  // Temperature Sensors
  {
    id: 'ts-101',
    name: 'Platinum RTD Probe TS-Pro',
    category: 'Temperature Sensors',
    description: 'High-accuracy temperature probe',
    longDescription: 'The TS-Pro series utilizes high-stability platinum elements to provide absolute temperature certainty. Optimized for rapid response times and thermal shock resistance.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      range: '-200°C to +600°C',
      element: 'Pt100 / Pt1000',
      accuracy: 'Class A (±0.15°C)',
      protection: '316 SS Sheath'
    }
  },
  // Digital Indicators & Controllers
  {
    id: 'dc-101',
    name: 'Matrix Digital Controller 900',
    category: 'Digital Indicators & Controllers',
    description: 'Universal process indicator and controller',
    longDescription: 'Multi-input digital controller designed for local visualization and control of technical assets. Features a high-contrast matrix display and programmable logic for alarm management.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      inputType: 'Universal (TC/RTD/Analog)',
      display: '7-Segment LED High-Viz',
      control: 'PID / On-Off',
      ports: 'RS485 Modbus'
    }
  },
  // Multimeters & Testers
  {
    id: 'mt-101',
    name: 'Industrial Multimeter MT-9x',
    category: 'Multimeters & Testers',
    description: 'Severe condition electrical tester',
    longDescription: 'The MT-9x is a professional-grade multimeter built for field maintenance in industrial environments. Features True-RMS measurement and specialized safety shielding for high-voltage diagnostics.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      catRating: 'CAT IV 600V',
      accuracy: '0.05% DCV',
      features: 'True-RMS / Data Logging',
      battery: '1000+ Hours Ops'
    }
  },
  // Variable Wires & Cables
  {
    id: 'wc-101',
    name: 'Shielded Control Cable WC-S',
    category: 'Variable Wires & Cables',
    description: 'Armored signal and control cabling',
    longDescription: 'Designed for mission-critical signal integrity, the WC-S series provides superior electromagnetic shielding and mechanical protection for industrial plant wiring.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      cores: '2 to 12 Multi-Core',
      shielding: 'Al-PET / Braided Copper',
      jacket: 'LSZH (Low Smoke)',
      voltage: '300V / 500V'
    }
  },
  // Online Moisture Analyser
  {
    id: 'om-101',
    name: 'Matrix Moisture Analyser MA-1',
    category: 'Online Moisture Analyser',
    description: 'Real-time online moisture monitoring',
    longDescription: 'Continuous, non-destructive moisture analysis for process lines. The MA-1 uses microwave or NIR technology to provide instantaneous data for quality control systems.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      method: 'NIR / Microwave Scan',
      range: '0% - 80% Absolute',
      interface: 'Digital API / 4-20mA',
      response: 'Real-Time (<100ms)'
    }
  },
  // SS Pipe & Fittings
  {
    id: 'pf-101',
    name: 'High-Pressure SS Fittings',
    category: 'SS Pipe & Fittings',
    description: 'Precision forged stainless steel fittings',
    longDescription: 'Comprehensive range of forged fittings designed for high-integrity piping systems. Manufactured to ASME and ASTM standards for maximum safety in high-pressure steam and chemical lines.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      grade: 'ASTM A182 F316/316L',
      rating: '3000 LB / 6000 LB',
      size: '1/4" to 4" Nominal',
      type: 'NPT / Socket Weld'
    }
  },
  // Panel Buildings
  {
    id: 'pb-101',
    name: 'Process Control Building Enclosure',
    category: 'Panel Buildings',
    description: 'Custom modular control panel buildings',
    longDescription: 'Fully integrated panel buildings designed for housing critical DCS and PLC assets. Features climate control, fire suppression, and electromagnetic shielding for remote site installations.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      enclosure: 'NEMA 4X / IP66',
      HVAC: 'Integrated Unit',
      wiring: 'Pre-wired / Tested',
      material: 'Double-Skin Insulated'
    }
  },
  // Wireless System
  {
    id: 'ws-101',
    name: 'Mesh Wireless Node WS-500',
    category: 'Wireless System',
    description: 'Self-healing mesh wireless sensor node',
    longDescription: 'Deploy sensors without the cost of cabling. The WS-500 creates a robust, self-healing wireless mesh network for distributed monitoring in massive industrial facilities.',
    price: 'Custom Quote',
    image: '/premium_gauge_product_1775038995087.png',
    specifications: {
      protocol: 'WirelessHART / ISA100.11a',
      range: 'Up to 500m (Line of Sight)',
      battery: '10-Year Life',
      security: 'AES-128 Encrypted'
    }
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map(p => p.category)))
}
