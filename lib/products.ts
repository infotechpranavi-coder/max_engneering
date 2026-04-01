export interface Product {
  id: string
  name: string
  category: 'Pressure Gauges' | 'Temperature Gauges' | 'Industrial Hardware' | 'Custom Components'
  description: string
  longDescription: string
  price: string
  image: string
  specifications: {
    range: string
    accuracy: string
    material: string
    connection: string
  }
}

export const products: Product[] = [
  // Pressure Gauges
  {
    id: 'pg-101',
    name: 'Digital Pressure Gauge Pro',
    category: 'Pressure Gauges',
    description: 'High-precision digital pressure gauge for industrial applications',
    longDescription:
      'The Digital Pressure Gauge Pro delivers accurate measurements in the most challenging industrial environments. With advanced sensor technology and a durable stainless steel construction, it provides reliable performance for years.',
    price: '$449.99',
    image: 'Digital Display',
    specifications: {
      range: '0-400 PSI',
      accuracy: '±0.5%',
      material: 'Stainless Steel',
      connection: '1/4" NPT'
    }
  },
  {
    id: 'pg-102',
    name: 'Analog Pressure Gauge Standard',
    category: 'Pressure Gauges',
    description: 'Reliable analog pressure gauge for general industrial use',
    longDescription:
      'Classic design meets modern reliability. This analog pressure gauge offers consistent performance without batteries or calibration issues, making it ideal for facilities requiring low-maintenance solutions.',
    price: '$129.99',
    image: 'Analog Dial',
    specifications: {
      range: '0-300 PSI',
      accuracy: '±3%',
      material: 'Steel with Glycerin',
      connection: '1/4" NPT'
    }
  },
  {
    id: 'pg-103',
    name: 'Industrial High-Range Gauge',
    category: 'Pressure Gauges',
    description: 'Heavy-duty gauge for extreme high-pressure applications',
    longDescription:
      'Engineered for the toughest conditions, this high-range pressure gauge withstands extreme pressures while maintaining accuracy. Perfect for hydraulic systems and high-pressure testing.',
    price: '$599.99',
    image: 'Heavy-Duty Gauge',
    specifications: {
      range: '0-5000 PSI',
      accuracy: '±1%',
      material: 'Forged Steel',
      connection: '1/2" NPT'
    }
  },

  // Temperature Gauges
  {
    id: 'tg-101',
    name: 'Digital Temperature Gauge',
    category: 'Temperature Gauges',
    description: 'Precision digital temperature measurement with data logging',
    longDescription:
      'Monitor temperature with pinpoint accuracy using our advanced digital gauge. Features include digital display, data logging capabilities, and wireless connectivity options.',
    price: '$349.99',
    image: 'Digital Thermometer',
    specifications: {
      range: '-50°C to 200°C',
      accuracy: '±0.5°C',
      material: 'Stainless Steel',
      connection: '1/2" NPT'
    }
  },
  {
    id: 'tg-102',
    name: 'Analog Bimetallic Thermometer',
    category: 'Temperature Gauges',
    description: 'Traditional bimetallic thermometer for reliable temperature reading',
    longDescription:
      'Time-tested bimetallic design provides reliable temperature measurements without electronic components. Ideal for applications where simplicity and durability are paramount.',
    price: '$99.99',
    image: 'Bimetallic Dial',
    specifications: {
      range: '0°C to 100°C',
      accuracy: '±2%',
      material: 'Brass with Stainless Steel',
      connection: '1/2" NPT'
    }
  },
  {
    id: 'tg-103',
    name: 'Industrial RTD Temperature Probe',
    category: 'Temperature Gauges',
    description: 'Platinum RTD probe for high-accuracy industrial temperature measurement',
    longDescription:
      'Platinum Resistance Thermometer offers exceptional accuracy for critical temperature monitoring in process control, HVAC, and research applications.',
    price: '$249.99',
    image: 'RTD Probe',
    specifications: {
      range: '-200°C to 850°C',
      accuracy: '±0.15°C',
      material: 'Platinum',
      connection: '3/8" NPT'
    }
  },

  // Industrial Hardware
  {
    id: 'hw-101',
    name: 'Pressure Relief Valve Assembly',
    category: 'Industrial Hardware',
    description: 'Complete pressure relief valve system for safety and control',
    longDescription:
      'Precision-engineered relief valve ensures system safety by releasing excess pressure. Fully adjustable and certified for high-pressure applications.',
    price: '$279.99',
    image: 'Relief Valve',
    specifications: {
      range: '0-500 PSI',
      accuracy: '±2%',
      material: 'Ductile Iron',
      connection: '1" NPT'
    }
  },
  {
    id: 'hw-102',
    name: 'Gauge Isolation Block',
    category: 'Industrial Hardware',
    description: 'Protective isolation block for gauge protection and maintenance',
    longDescription:
      'Provides safe isolation of gauges for maintenance without shutting down the entire system. Features three-valve design with pressure drain.',
    price: '$189.99',
    image: 'Isolation Block',
    specifications: {
      range: '0-400 PSI',
      accuracy: 'N/A',
      material: 'Stainless Steel',
      connection: '1/4" & 1/2" NPT'
    }
  },
  {
    id: 'hw-103',
    name: 'Snubber & Damper Unit',
    category: 'Industrial Hardware',
    description: 'Protects gauges from pressure fluctuations and pulsations',
    longDescription:
      'Sintered bronze snubber eliminates gauge needle flutter caused by pressure pulsations. Extends gauge life and improves reading accuracy.',
    price: '$79.99',
    image: 'Snubber Unit',
    specifications: {
      range: '0-600 PSI',
      accuracy: 'N/A',
      material: 'Bronze & Stainless Steel',
      connection: '1/4" NPT'
    }
  },

  // Custom Components
  {
    id: 'cc-101',
    name: 'Custom Pressure Transmitter',
    category: 'Custom Components',
    description: 'Bespoke pressure transmitter designed for your specific needs',
    longDescription:
      'Work with our engineering team to design pressure transmitters tailored to your exact specifications, including output signals, materials, and mounting options.',
    price: 'Custom Quote',
    image: 'Custom Transmitter',
    specifications: {
      range: 'Custom',
      accuracy: 'Custom',
      material: 'Custom',
      connection: 'Custom'
    }
  },
  {
    id: 'cc-102',
    name: 'Integrated Control Panel',
    category: 'Custom Components',
    description: 'Complete monitoring and control panel with multiple gauge inputs',
    longDescription:
      'Custom-designed control panels that integrate multiple gauges and sensors. Includes calibration, safety interlocks, and alarm systems.',
    price: 'Custom Quote',
    image: 'Control Panel',
    specifications: {
      range: 'Custom',
      accuracy: 'Custom',
      material: 'Custom',
      connection: 'Custom'
    }
  },
  {
    id: 'cc-103',
    name: 'Smart Monitoring System',
    category: 'Custom Components',
    description: 'IoT-enabled system for remote pressure and temperature monitoring',
    longDescription:
      'Connect your gauges to the cloud with our smart monitoring system. Real-time alerts, data analytics, and mobile app access.',
    price: 'Custom Quote',
    image: 'Smart System',
    specifications: {
      range: 'Custom',
      accuracy: 'Custom',
      material: 'Custom',
      connection: 'Custom'
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
