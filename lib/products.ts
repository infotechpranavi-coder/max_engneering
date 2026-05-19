export interface ProductFeature {
  title: string
  description: string
}

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
  features?: ProductFeature[]
  documents?: {
    technical_datasheet: string
  }
  images?: string[]
}

export const productCategories = [
  'Transmitters', 'Gauges', 'Switches', 'Temperature Sensors', 'Digital Indicators & Controllers', 
  'Multimeters & Testers', 'Wires & Cables', 'Online Moisture Analyser', 
  'SS Pipe & Fittings', 'Panel Buildings', 'Wireless System', 'Dust Monitor',
  'Level Transmitter', 'Pressure / Flow Switch', 'Emission Monitoring Analyzer',
  'Gas Analyzer', 'Sampling & Water Analysis', 'Industrial Communication', 
  'Flow Measuring Equipments', 'Gas Detectors'
]

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
      range: '0 to 40 MPa',
      accuracy: '±0.04% of Span',
      output: '4-20mA HART',
      material: '316L SS'
    }
  },
  {
    id: 'tr-102',
    name: 'Flow Transmitters',
    category: 'Transmitters',
    description: 'Accurate measurement of mass flow, density, volumetric flow rate and temperature for gases, pastes and liquids.',
    longDescription: 'Our flow meters provide accurate measurement of mass flow, density, volumetric flow rate and temperature for gases, pastes, liquids with low viscosity and applications where users are unwilling/unable to cut into the process measurement line to install an in-line meter.\n\nOrifice Assembly: All Sizes, 25 mm NB and above for all temperature and pressure conditions. Material: SS-304, SS-316, MONEL, Brass, Hestalloy-C, Titanium, Tantalum etc. Flanges suitable for all conditions. Material: C.S., SS-316, SS-304, Alloy Steel, Brass etc. Designing as per ISO 5167, BS-1042, ASME-PTC 19.5, AGA-3, BS-EN-ISO-5167, IS-2952.\n\nVenturi Tube: 50 mm NB and above sizes. Material: Fabricated – SS, CS & CI. Designing as per BS-1042, BS-EN-ISO5167.',
    price: 'Custom Quote',
    image: '/transmit_2.jpg',
    specifications: {
      type: 'Orifice Assembly / Venturi Tube',
      size: '25 mm NB and above',
      material: 'SS-304, SS-316, MONEL, Brass',
      standard: 'ISO 5167, BS-1042, ASME-PTC 19.5'
    }
  },
  {
    id: 'tr-103',
    name: 'Temperature Transmitters',
    category: 'Transmitters',
    description: 'High accuracy and stability over a wide range of process and ambient temperatures with efficient control system integration.',
    longDescription: 'Temperature is one of the four basic process measurements (others being Pressure, Level, and Flow). Temperature measurements are used in an array of different applications. Inaccuracy of a temperature reading can have an impact on the bottom line. Max Temperature Transmitters offer lower total cost of ownership, along with high accuracy and stability over a wide range of process and ambient temperatures. These are the industry\'s most robust transmitters with efficient control system integration. Temperature transmitters feature significant advances over the direct wired counterparts. Eliminate special cabling requirements, simplify engineering and maintenance while enabling advanced diagnostics. We offer head-mount, panel-mount, and field-mount devices to cover different temperature applications.',
    price: 'Custom Quote',
    image: '/transmit_3.jpg',
    specifications: {
      mounting: 'Head / Panel / Field Mount',
      input: 'RTD, Thermocouple, mV',
      output: '4-20mA HART / FOUNDATION Fieldbus',
      accuracy: '±0.1°C'
    }
  },
  {
    id: 'tr-104',
    name: 'Magnetic Flow Meter',
    category: 'Transmitters',
    description: 'A magnetic flow meter is an electromagnetic flow measurement device used for accurate monitoring of conductive liquids in industrial pipelines. It provides maintenance-free operation with no moving parts and is widely used in water treatment, chemical processing, wastewater, and slurry applications.',
    longDescription: 'A magnetic flow meter is an electromagnetic flow measurement device used for accurate monitoring of conductive liquids in industrial pipelines. It provides maintenance-free operation with no moving parts and is widely used in water treatment, chemical processing, wastewater, and slurry applications.',
    price: 'Custom Quote',
    image: '/magnetic-flowmeter-1.jpg',
    specifications: {
      type: 'Electromagnetic Flow Meter',
      application: 'Water, chemicals, slurry',
      measurement: 'Volumetric flow',
      output: '4–20mA, Pulse, Modbus',
      accuracy: '±0.5%',
      media: 'Conductive liquids',
      'measurement principle': 'Electromagnetic induction',
      'pipe size': 'DN10 to DN2000',
      'lining material': 'PTFE / Rubber',
      'electrode material': 'SS316 / Hastelloy',
      protection: 'IP67/IP68',
      'power supply': '24 Vdc / 230 Vac'
    },
    features: [
      {
        title: 'No Moving',
        description: 'Maintenance-free measurement technology.'
      },
      {
        title: 'High Accuracy',
        description: 'Provides precise conductive liquid flow measurement.'
      },
      {
        title: 'Low Pressure',
        description: 'Minimal pressure drop during operation.'
      },
      {
        title: 'Industrial Grade',
        description: 'Designed for harsh process environments.'
      },
      {
        title: 'Digital Output',
        description: 'Supports modern industrial communication systems.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-105',
    name: 'Vortex Flow Meter',
    category: 'Transmitters',
    description: 'A vortex flow meter measures the flow of liquids, gases, and steam using the vortex shedding principle. It offers reliable performance, high durability, and accurate measurement for utility, steam, and industrial process applications.',
    longDescription: 'A vortex flow meter measures the flow of liquids, gases, and steam using the vortex shedding principle. It offers reliable performance, high durability, and accurate measurement for utility, steam, and industrial process applications.',
    price: 'Custom Quote',
    image: '/vortex-flow-meter1.jpeg',
    specifications: {
      type: 'Vortex Flow Meter',
      application: 'Steam, gas, liquid flow',
      measurement: 'Mass and volumetric flow',
      output: '4–20mA, Pulse, HART',
      accuracy: '±1%',
      process: 'High-temperature compatible',
      'measurement principle': 'Vortex shedding',
      'fluid type': 'Steam, gas, liquids',
      'temperature range': 'Up to 400°C',
      'pressure rating': 'Up to 100 bar',
      'body material': 'SS316',
      communication: 'HART / Modbus'
    },
    features: [
      {
        title: 'Steam Ready',
        description: 'Ideal for steam and utility applications.'
      },
      {
        title: 'Stable Output',
        description: 'Reliable flow measurement under varying conditions.'
      },
      {
        title: 'No Moving',
        description: 'Reduces maintenance requirements.'
      },
      {
        title: 'Industrial Build',
        description: 'Designed for demanding industrial environments.'
      },
      {
        title: 'Wide Compatibility',
        description: 'Suitable for liquids, gases, and steam.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-106',
    name: 'Remote Seal Type Pressure Transmitter',
    category: 'Transmitters',
    description: 'A remote seal type pressure transmitter is designed for accurate pressure measurement in challenging process conditions where direct sensor exposure is not suitable. Using diaphragm seals and capillary systems, it enables reliable pressure monitoring for corrosive, viscous, high-temperature, or sanitary applications in industrial processes.',
    longDescription: 'A remote seal type pressure transmitter is designed for accurate pressure measurement in challenging process conditions where direct sensor exposure is not suitable. Using diaphragm seals and capillary systems, it enables reliable pressure monitoring for corrosive, viscous, high-temperature, or sanitary applications in industrial processes.',
    price: 'Custom Quote',
    image: '/remote seal type transmitter.jpg',
    specifications: {
      type: 'Remote Seal Pressure Transmitter',
      application: 'Corrosive and high-temperature processes',
      measurement: 'Gauge, absolute, differential pressure',
      output: '4–20mA, HART',
      'seal system': 'Diaphragm seal with capillary',
      material: 'SS316 / Hastelloy',
      'measurement principle': 'Piezoresistive / Capacitive',
      'pressure range': 'Vacuum to high pressure',
      'process temperature': 'Up to 400°C',
      accuracy: '±0.075% FS',
      communication: 'HART / Modbus',
      protection: 'IP65/IP67'
    },
    features: [
      {
        title: 'Remote Sensing',
        description: 'Protects sensor from harsh process conditions.'
      },
      {
        title: 'High Accuracy',
        description: 'Provides stable and precise pressure readings.'
      },
      {
        title: 'Corrosion Resistant',
        description: 'Suitable for aggressive chemical applications.'
      },
      {
        title: 'Temperature Ready',
        description: 'Operates in high-temperature processes.'
      },
      {
        title: 'Flexible Mounting',
        description: 'Supports various diaphragm seal configurations.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-107',
    name: 'Magnetic Flow Transmitter',
    category: 'Transmitters',
    description: 'A magnetic flow transmitter is an electromagnetic flow measurement device designed for conductive liquids in industrial pipelines. It delivers accurate and maintenance-free flow monitoring with no moving parts, making it suitable for water treatment, chemical processing, food, and wastewater applications.',
    longDescription: 'A magnetic flow transmitter is an electromagnetic flow measurement device designed for conductive liquids in industrial pipelines. It delivers accurate and maintenance-free flow monitoring with no moving parts, making it suitable for water treatment, chemical processing, food, and wastewater applications.',
    price: 'Custom Quote',
    image: '/Electro-Magnetic-Flow-Meter.jpg',
    specifications: {
      type: 'Electromagnetic Flow Transmitter',
      application: 'Conductive liquid flow measurement',
      measurement: 'Volumetric flow',
      output: '4–20mA, Pulse, Modbus',
      accuracy: '±0.5%',
      installation: 'Inline pipeline mounting',
      'measurement principle': 'Electromagnetic induction',
      'fluid type': 'Conductive liquids',
      'pipe size': 'DN10 to DN2000',
      'power supply': '24 Vdc / 230 Vac',
      'lining material': 'PTFE / Rubber',
      protection: 'IP67/IP68'
    },
    features: [
      {
        title: 'No Moving',
        description: 'Maintenance-free design improves reliability.'
      },
      {
        title: 'High Accuracy',
        description: 'Ensures precise liquid flow measurement.'
      },
      {
        title: 'Low Pressure',
        description: 'Minimal pressure loss during operation.'
      },
      {
        title: 'Wide Application',
        description: 'Suitable for water, chemicals, and slurry.'
      },
      {
        title: 'Digital Output',
        description: 'Supports industrial communication protocols.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-108',
    name: 'Vortex Flow Transmitter',
    category: 'Transmitters',
    description: 'A vortex flow transmitter measures the flow of liquids, gases, and steam using the vortex shedding principle. It provides reliable and accurate flow measurement with robust construction and is widely used in process industries for utility and energy monitoring applications.',
    longDescription: 'A vortex flow transmitter measures the flow of liquids, gases, and steam using the vortex shedding principle. It provides reliable and accurate flow measurement with robust construction and is widely used in process industries for utility and energy monitoring applications.',
    price: 'Custom Quote',
    image: '/vortex-flow-meter.jpg',
    specifications: {
      type: 'Vortex Flow Transmitter',
      application: 'Steam, gas, and liquid flow',
      measurement: 'Mass and volumetric flow',
      output: '4–20mA, Pulse, HART',
      accuracy: '±1%',
      process: 'High temperature compatible',
      'measurement principle': 'Vortex shedding',
      'fluid type': 'Liquids, gases, steam',
      'temperature range': 'Up to 400°C',
      'pressure rating': 'Up to 100 bar',
      'body material': 'SS316',
      communication: 'HART / Modbus'
    },
    features: [
      {
        title: 'Steam Ready',
        description: 'Ideal for steam and utility flow monitoring.'
      },
      {
        title: 'No Moving',
        description: 'Reduces wear and maintenance requirements.'
      },
      {
        title: 'Stable Output',
        description: 'Provides reliable measurement under varying conditions.'
      },
      {
        title: 'Industrial Build',
        description: 'Designed for demanding process applications.'
      },
      {
        title: 'Wide Compatibility',
        description: 'Suitable for gases, liquids, and steam.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-109',
    name: 'Coriolis Flow Meter',
    category: 'Transmitters',
    description: 'A Coriolis flow meter measures mass flow directly using the Coriolis effect and provides highly accurate flow, density, and temperature measurement. It is widely used in chemical, oil & gas, food, and pharmaceutical industries for critical process applications.',
    longDescription: 'A Coriolis flow meter measures mass flow directly using the Coriolis effect and provides highly accurate flow, density, and temperature measurement. It is widely used in chemical, oil & gas, food, and pharmaceutical industries for critical process applications.',
    price: 'Custom Quote',
    image: '/corilois flow meter.jpg',
    specifications: {
      type: 'Mass Flow Meter',
      application: 'Chemical, oil & gas, food processing',
      measurement: 'Mass flow, density, temperature',
      accuracy: '±0.1%',
      output: '4–20mA, HART, Modbus',
      media: 'Liquids and gases',
      'measurement principle': 'Coriolis effect',
      'flow measurement': 'Direct mass flow',
      'additional measurement': 'Density and temperature',
      'accuracy rating': '±0.1% to ±0.2%',
      communication: 'HART / Modbus / Pulse',
      construction: 'Dual vibrating tube'
    },
    features: [
      {
        title: 'Mass Flow',
        description: 'Directly measures true mass flow.'
      },
      {
        title: 'High Precision',
        description: 'Provides extremely accurate process measurement.'
      },
      {
        title: 'Multi Variable',
        description: 'Measures flow, density, and temperature simultaneously.'
      },
      {
        title: 'Wide Application',
        description: 'Suitable for critical industrial processes.'
      },
      {
        title: 'Reliable Design',
        description: 'Stable operation with minimal maintenance.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-110',
    name: 'Thermal Mass Flow Meter',
    category: 'Transmitters',
    description: 'A thermal mass flow meter measures gas flow based on heat transfer principles and provides direct mass flow measurement without pressure or temperature compensation. It is commonly used for compressed air, natural gas, nitrogen, and industrial gas monitoring applications.',
    longDescription: 'A thermal mass flow meter measures gas flow based on heat transfer principles and provides direct mass flow measurement without pressure or temperature compensation. It is commonly used for compressed air, natural gas, nitrogen, and industrial gas monitoring applications.',
    price: 'Custom Quote',
    image: '/thermal flow metere.webp',
    specifications: {
      type: 'Thermal Mass Flow Meter',
      application: 'Compressed air and gas monitoring',
      measurement: 'Direct mass flow',
      media: 'Air and industrial gases',
      output: '4–20mA, Pulse, Modbus',
      installation: 'Inline or insertion type',
      'measurement principle': 'Thermal dispersion',
      'fluid type': 'Air and gases',
      accuracy: '±1% FS',
      'temperature compensation': 'Integrated',
      communication: 'Modbus / HART',
      'power supply': '24 Vdc'
    },
    features: [
      {
        title: 'Direct Mass',
        description: 'Measures gas mass flow directly.'
      },
      {
        title: 'Low Pressure',
        description: 'Minimal pressure loss in pipeline.'
      },
      {
        title: 'Gas Optimized',
        description: 'Designed specifically for gas applications.'
      },
      {
        title: 'Energy Saving',
        description: 'Helps optimize compressed air systems.'
      },
      {
        title: 'Easy Integration',
        description: 'Supports industrial communication protocols.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-111',
    name: 'Insertion Flow Meter',
    category: 'Transmitters',
    description: 'An insertion flow meter is a probe-style flow measuring device inserted directly into pipelines for monitoring liquid or gas flow. It offers economical installation and is suitable for large pipe sizes in water, air, and industrial utility applications.',
    longDescription: 'An insertion flow meter is a probe-style flow measuring device inserted directly into pipelines for monitoring liquid or gas flow. It offers economical installation and is suitable for large pipe sizes in water, air, and industrial utility applications.',
    price: 'Custom Quote',
    image: '/insertion-type-electromagnetic-flow-meter.jpg',
    specifications: {
      type: 'Insertion Flow Meter',
      application: 'Large pipelines and utilities',
      installation: 'Probe insertion type',
      media: 'Liquids and gases',
      output: '4–20mA, Pulse',
      maintenance: 'Easy installation and servicing',
      'installation type': 'Hot tap / insertion',
      'pipe size': 'Large diameter pipelines',
      'measurement principle': 'Velocity / thermal / electromagnetic',
      communication: 'Pulse / Modbus',
      construction: 'SS316 probe'
    },
    features: [
      {
        title: 'Easy Install',
        description: 'Suitable for large pipeline retrofits.'
      },
      {
        title: 'Low Cost',
        description: 'Economical compared to full bore meters.'
      },
      {
        title: 'Flexible Use',
        description: 'Supports liquid and gas applications.'
      },
      {
        title: 'Compact Probe',
        description: 'Minimal piping modification required.'
      },
      {
        title: 'Industrial Ready',
        description: 'Designed for utility and process systems.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'tr-112',
    name: 'Clamp-On Ultrasonic Flow Meter',
    category: 'Transmitters',
    description: 'A clamp-on ultrasonic flow meter measures liquid flow externally using ultrasonic transit-time technology without cutting the pipe or interrupting the process. It is ideal for temporary monitoring, retrofit installations, and non-invasive flow measurement applications.',
    longDescription: 'A clamp-on ultrasonic flow meter measures liquid flow externally using ultrasonic transit-time technology without cutting the pipe or interrupting the process. It is ideal for temporary monitoring, retrofit installations, and non-invasive flow measurement applications.',
    price: 'Custom Quote',
    image: '/clamp-on-ultrasonic-flow-meter.jpg',
    specifications: {
      type: 'Clamp-On Ultrasonic Flow Meter',
      application: 'Non-invasive liquid flow measurement',
      measurement: 'Transit-time ultrasonic',
      installation: 'External clamp mounting',
      output: '4–20mA, Pulse, Modbus',
      'pipe access': 'No pipe cutting required',
      'measurement principle': 'Ultrasonic transit-time',
      'fluid type': 'Clean liquids',
      'installation type': 'Clamp-on external sensors',
      'pipe material': 'Metal and plastic pipes',
      communication: 'Modbus / Pulse',
      'power supply': '24 Vdc / Battery'
    },
    features: [
      {
        title: 'Non Invasive',
        description: 'No pipe cutting or process interruption required.'
      },
      {
        title: 'Easy Retrofit',
        description: 'Quick installation on existing pipelines.'
      },
      {
        title: 'Portable Option',
        description: 'Available in fixed and portable versions.'
      },
      {
        title: 'Low Maintenance',
        description: 'External sensors reduce servicing requirements.'
      },
      {
        title: 'Accurate Reading',
        description: 'Provides reliable liquid flow measurement.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  // Gauges
  {
    id: 'ga-101',
    name: 'Pressure Gauges',
    category: 'Gauges',
    description: 'Differential and duplex differential pressure gauges for oil, gas, and industrial applications.',
    longDescription: 'Differential and duplex differential pressure gauges are designed for the oil and gas, alternative fuels, chemical, HVAC, refrigeration and air handling industries. These differential and duplex pressure gauges are for measuring high and low pressure and static process pressures. Differential pressure and duplex pressure gauges are for measuring 2 applied pressures.',
    price: 'Custom Quote',
    image: '/gauage_1.jpg',
    specifications: {
      type: 'Differential / Duplex',
      application: 'Oil, Gas, Chemical, HVAC',
      measurement: 'High/Low/Static Pressure',
      accuracy: 'Industrial Grade'
    }
  },
  {
    id: 'ga-102',
    name: 'Temperature Gauge',
    category: 'Gauges',
    description: 'Professional bimetal, gas-filled, and mercury-filled temperature measurement instruments.',
    longDescription: 'Our comprehensive range of temperature gauges covers all industrial requirements:\n\nBMT Bimetal Temperature Gauges: BMT Temperature Gauge operating on the Bimetal coil principle meets the general industrial and OEM temperature measurements. Size: 63mm, 100mm, 150mm. Accuracy: Class 1 (EN-13190). Range: -50 to 400 °C.\n\nGTS Gas Filled Temperature Gauges: Mass® GTS inert gas actuated Temperature Gauge is a reliable instrument that can fit in to variety of applications. Features include rugged construction, fast response time, high repeatability. Accuracy: Class 1 (EN-13190). Range: -50 to 500 °C.\n\nMTS Mercury Filled Temperature Gauges: Size: 100mm, 150mm. Accuracy: Class 1 (EN-13190). Range: -38 to 650 °C.',
    price: 'Custom Quote',
    image: '/gauge_2.jpg',
    specifications: {
      types: 'Bimetal / Gas / Mercury',
      accuracy: 'Class 1 (EN-13190)',
      range: '-50 to 650 °C',
      material: 'SS 316L'
    }
  },
  {
    id: 'ga-103',
    name: 'Gauge Cock, Snubber & Accessories',
    category: 'Gauges',
    description: 'Renowned Gauge Cock and needle valves for isolating and protecting pressure instrumentation.',
    longDescription: 'We are a renowned manufacturer and exporter of Gauge Cock and needle valve. Designed in compliance with industrial standards these cock and valve are widely used for isolating the pressure gauge from pressure medium or to throttle and to damp pressure pulses. These are widely appreciated for reliability and application specific design.',
    price: 'Custom Quote',
    image: '/gauge_3.jpg',
    specifications: {
      type: 'Cock / Needle Valve / Snubber',
      compliance: 'Industrial Standards',
      function: 'Isolation / Throttling / Damping',
      design: 'Application Specific'
    }
  },
  {
    id: 'ga-104',
    name: 'Instrument Fittings',
    category: 'Gauges',
    description: 'Double ferrule type compression tube fittings for leak-proof, torque-free seals.',
    longDescription: 'General instruments has built reputation for manufacturing standard instrumentation / tube fittings as well as customized fittings based on client requirements and various process applications. General Compression tube fittings are double ferrule type fittings which provide leak-proof, torque-free seals at the tubing connection. They provide safety and eliminates hazardous leaks of fluids in instrumentation field for a process, pressure, hydraulic and other applicable tubing systems.',
    price: 'Custom Quote',
    image: '/gauge_4.jpg',
    specifications: {
      type: 'Double Ferrule Compression',
      material: 'SS 316 / Brass / CS',
      connection: 'Leak-proof / Torque-free',
      application: 'Hydraulic / Pressure Systems'
    }
  },
  {
    id: 'ga-105',
    name: 'Capsule Pressure Gauge',
    category: 'Gauges',
    description: 'A capsule pressure gauge is a low-pressure measuring instrument designed for accurate monitoring of gaseous media at very low pressures. It uses a capsule sensing element formed by joined diaphragms that expand or contract with pressure changes, making it suitable for HVAC, medical, laboratory, and industrial applications.',
    longDescription: 'A capsule pressure gauge is a low-pressure measuring instrument designed for accurate monitoring of gaseous media at very low pressures. It uses a capsule sensing element formed by joined diaphragms that expand or contract with pressure changes, making it suitable for HVAC, medical, laboratory, and industrial applications.',
    price: 'Custom Quote',
    image: '/capsule.webp',
    specifications: {
      type: 'Low Pressure Gauge',
      application: 'Gas and air pressure measurement',
      measurement: 'Low differential pressure',
      range: 'Vacuum to low positive pressure',
      media: 'Non-corrosive gases',
      display: 'Analog dial indication',
      'measurement principle': 'Capsule diaphragm element',
      'accuracy': '±1.6% FS',
      'dial size': '63 mm / 100 mm',
      'connection': 'Bottom or back entry',
      'material': 'SS304 / Brass'
    },
    features: [
      {
        title: 'Low Pressure',
        description: 'Designed for precise low-pressure gas measurement.'
      },
      {
        title: 'Sensitive Element',
        description: 'Capsule diaphragm ensures accurate response.'
      },
      {
        title: 'Compact Design',
        description: 'Suitable for panel and field mounting.'
      },
      {
        title: 'Reliable Reading',
        description: 'Provides stable analog pressure indication.'
      },
      {
        title: 'Industrial Use',
        description: 'Ideal for HVAC and laboratory applications.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'ga-106',
    name: 'Magnetic Level Gauge',
    category: 'Gauges',
    description: 'A magnetic level gauge is a visual level indication device used for continuous monitoring of liquid levels in tanks and vessels. It operates using a magnetic float inside a chamber that drives an external indicator, providing clear level indication without direct contact with the process fluid.',
    longDescription: 'A magnetic level gauge is a visual level indication device used for continuous monitoring of liquid levels in tanks and vessels. It operates using a magnetic float inside a chamber that drives an external indicator, providing clear level indication without direct contact with the process fluid.',
    price: 'Custom Quote',
    image: '/magnetic-level-gauge-500x500.webp',
    specifications: {
      type: 'Magnetic Level Gauge',
      application: 'Tank and vessel level indication',
      measurement: 'Continuous liquid level',
      media: 'Liquids and chemicals',
      indication: 'Magnetic flap / roller display',
      installation: 'Side mounted',
      'measurement principle': 'Magnetic float coupling',
      'pressure rating': 'Up to 40 bar',
      'temperature range': '-20°C to +350°C',
      'chamber material': 'SS304 / SS316',
      'output option': 'Switches / Transmitter optional',
      'mounting': 'Side / top mounted'
    },
    features: [
      {
        title: 'Clear Indication',
        description: 'Provides highly visible liquid level display.'
      },
      {
        title: 'Non Contact',
        description: 'Indicator operates without process fluid exposure.'
      },
      {
        title: 'High Pressure',
        description: 'Suitable for demanding industrial vessels.'
      },
      {
        title: 'Corrosion Resistant',
        description: 'Available in stainless steel construction.'
      },
      {
        title: 'Low Maintenance',
        description: 'Simple magnetic operation minimizes servicing.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  // Switches
  {
    id: 'sw-101',
    name: 'Level Switches',
    category: 'Switches',
    description: 'RF capacitance based high/low level detection for bulk solids and storage applications.',
    longDescription: 'Level switch model 5716 is suitable for detecting high or low level of bulk solids, in storage applications. The level detection is done based on RF capacitance principle using micro processor based measuring circuit. The sensing probe unit is built with two elements of positive and negative electrode as a single rigid rod construction. The separation of the electrodes are done by using either PTFE or ceramic material depending on the temperature of the media. Both the circuits are housed in a IP65 compliant weatherproof aluminium enclosure.',
    price: 'Custom Quote',
    image: '/switch_1.jpg',
    specifications: {
      type: 'RF Capacitance Principle',
      application: 'Bulk Solids / Storage',
      enclosure: 'IP65 Weatherproof',
      probe: 'Rigid Rod Construction'
    }
  },
  {
    id: 'sw-102',
    name: 'Flow Switches',
    category: 'Switches',
    description: 'Mechanical paddle-type switches for detecting fluid flow and protecting heat exchangers/pumps.',
    longDescription: 'Flow Switch is a mechanical switch that is switched on or off in response to the flow or non-flow of a fluid such as air or water. The switch typically operates through the use of a paddle which gets displaced due to the force of fluid moving past it. Flow switch is a special electric device with a very simple design and of a small size. Used to protect central heating systems, pump protection, safety spray nozzle monitoring, and refrigeration/cooling systems.',
    price: 'Custom Quote',
    image: '/switch_2.jpg',
    specifications: {
      operation: 'Paddle Displacement',
      applications: 'Pump Protection / Cooling',
      media: 'Air / Water / Fluids',
      design: 'Compact / Mechanical'
    }
  },
  {
    id: 'sw-103',
    name: 'Pressure Switches',
    category: 'Switches',
    description: 'High-precision electromechanical pressostats with extreme vibration resistance and durability.',
    longDescription: 'Electromechanical pressure switches / Pressostats from Trafag provide high vibration resistance and switch point precision in combination with an extremely robust and durable design. This results in switches that can be operated for decades without requiring maintenance, even under harsh conditions. Various designs with bellows, membrane and piston sensors cover a wide variety of pressure ranges, media and load profiles for many different applications like hydraulics, the railway and shipbuilding industry.',
    price: 'Custom Quote',
    image: '/switch_3.jpg',
    specifications: {
      type: 'Electromechanical Pressostat',
      precision: 'High Switch Point Accuracy',
      resistance: 'High Vibration Resistance',
      sensors: 'Bellows / Membrane / Piston'
    }
  },
  {
    id: 'sw-104',
    name: 'Differential Pressure Switch',
    category: 'Switches',
    description: 'A differential pressure switch is an industrial switching device used to monitor the pressure difference between two process points. It activates electrical contacts when the differential pressure reaches a predefined set point, making it suitable for filter monitoring, pump protection, HVAC systems, compressors, clean rooms, and industrial process control applications.',
    longDescription: 'A differential pressure switch is an industrial switching device used to monitor the pressure difference between two process points. It activates electrical contacts when the differential pressure reaches a predefined set point, making it suitable for filter monitoring, pump protection, HVAC systems, compressors, clean rooms, and industrial process control applications.',
    price: 'Custom Quote',
    image: '/diffential pressuer switch.jpg',
    specifications: {
      type: 'Differential Pressure Switch',
      application: 'Filter, pump, HVAC monitoring',
      measurement: 'Differential pressure',
      output: 'SPDT / DPDT switching',
      protection: 'IP65/IP67',
      media: 'Air, gas, liquids',
      'measurement principle': 'Diaphragm / piston operated',
      'pressure range': 'Low pressure to high differential pressure',
      'switch type': 'Micro switch / Reed switch',
      accuracy: '±1% repeatability',
      'enclosure protection': 'IP65 / IP67',
      'electrical output': 'SPDT / DPDT contacts'
    },
    features: [
      {
        title: 'Reliable Switching',
        description: 'Provides accurate differential pressure switching.'
      },
      {
        title: 'Industrial Duty',
        description: 'Designed for harsh industrial environments.'
      },
      {
        title: 'Adjustable Setpoint',
        description: 'Allows flexible switching configuration.'
      },
      {
        title: 'Low Maintenance',
        description: 'Robust construction ensures long service life.'
      },
      {
        title: 'Wide Application',
        description: 'Suitable for HVAC, filtration, and process systems.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  // Temperature Sensors
  {
    id: 'ts-101',
    name: 'R.T.D.',
    category: 'Temperature Sensors',
    description: 'Resistance Temperature Detectors correlates resistance with temperature, providing immune-to-noise industrial sensing.',
    longDescription: 'Resistance Temperature Detectors (RTD), as the name implies, are sensors used to measure temperature by correlating the resistance of the RTD element with temperature. RTDs are relatively immune to electrical noise and therefore well suited for temperature measurement in industrial environments, especially around motors, generators and other high voltage equipment.',
    price: 'Custom Quote',
    image: '/temp_1.jpg',
    specifications: {
      element: 'Pt100 / Pt1000',
      immunity: 'Electrical Noise Resistant',
      environment: 'Industrial / High Voltage',
      standard: 'IEC 751 / DIN 43760'
    }
  },
  {
    id: 'ts-102',
    name: 'Thermocouples',
    category: 'Temperature Sensors',
    description: 'High accurate thermocouples designed for a variety of industrial thermal measurement applications.',
    longDescription: 'High Accurate Thermocouples for variety of applications. These sensors are engineered for precision and durability in heavy-duty process control environments.',
    price: 'Custom Quote',
    image: '/temp_2.jpg',
    specifications: {
      type: 'K, J, T, E, R, S, B',
      accuracy: 'Class 1 / Class 2',
      protection: 'Ceramic / Metal Sheath',
      range: 'Up to 1800°C'
    }
  },
  {
    id: 'ts-103',
    name: 'Thermowells',
    category: 'Temperature Sensors',
    description: 'Custom manufactured thermowells confirming to ASTM PTC 19.3 with wake frequency calculations.',
    longDescription: 'Thermowells are designed and manufactured confirming to ASTM PTC 19.3 and Wake frequency calculation is performed based on latest version 2010 to ensure the optimum suitable design. Types: Bar stock threaded, Flanged, Weld-in, Fabricated, and Sleeved/Lined. Material: Carbon Steel (A105), SS304, SS316, Monel, Hastelloy, Inconel, Titanium, Tantalum, etc.',
    price: 'Custom Quote',
    image: '/temp_3.jpg',
    specifications: {
      standard: 'ASTM PTC 19.3',
      rating: '150# to 2500#',
      material: 'SS316 / Monel / Hastelloy',
      connection: 'Threaded / Flanged'
    }
  },
  {
    id: 'ts-104',
    name: 'M.I. Cable',
    category: 'Temperature Sensors',
    description: 'Mineral insulated metal sheathed cables for nuclear, blast furnace, and high-pressure applications.',
    longDescription: 'World class manufacturing for Mineral insulated (MI Cable), metal sheathed cable. Applications include blast furnace, atomic research, nuclear reactors, and kilns. One or more wire cores are embedded in high quality MGO and pressed into a metal tube (sheath). High flexibility, excellent mechanical strength, and pressure resistance for complex installations.',
    price: 'Custom Quote',
    image: '/temp_4.jpg',
    specifications: {
      insulation: 'High Quality MGO',
      sheath: 'Corrosion Resistant Metal',
      flexibility: 'Excellent',
      applications: 'Nuclear / Blast Furnace'
    }
  },
  {
    id: 'ts-105',
    name: 'Pyrometers',
    category: 'Temperature Sensors',
    description: 'Non-contact pyrometers ranging from 0 to 3200ºC for various industrial and foundry applications.',
    longDescription: 'Tempsens offers wide range of highly accurate non-contact pyrometers in temperature range 0 to 3200ºC. Includes Portable Pyrometer, Online Pyrometer (A, E, T, AL, ML series), Fiber Optic Pyrometers, and Focusable Pyrometers. Specialized designs for foundries, glass, and aluminium industries.',
    price: 'Custom Quote',
    image: '/temp_5.jpg',
    specifications: {
      range: '0 to 3200ºC',
      type: 'Portable / Online / Fiber Optic',
      technology: 'Infrared Non-contact',
      application: 'Steel / Glass / Aluminium'
    }
  },
  {
    id: 'ts-106',
    name: 'Compensating Cables',
    category: 'Temperature Sensors',
    description: 'Thermocouple extension leads with similar EMF output for glass and cryogenic industry applications.',
    longDescription: 'Extension leads mostly used in glass industry, low temperature & cryogenic applications and reducing atmosphere. EMF output in the range of 0 to 100°C. Connects the thermocouple metal junction and measuring instrument. Available range: K, T, J, E, R, S, B types with different color codes and sheathing as per international standards.',
    price: 'Custom Quote',
    image: '/temp_6.jpg',
    specifications: {
      emfRange: '0 to 100°C',
      standards: 'International Color Codes',
      conductor: 'Solid Conductor Leads',
      environments: 'Cryogenic / Reducing / Glass'
    }
  },
  {
    id: 'ts-107',
    name: 'Thermal Imagers',
    category: 'Temperature Sensors',
    description: 'Non-contact device detecting infrared energy to produce high-resolution thermograms.',
    longDescription: 'A thermal imager is a non-contact temperature measurement device. Detects infrared energy emitted, transmitted or reflected by all materials at temperatures above absolute zero (0°K) and converts it into a temperature reading or thermogram. Thermograms display the thermal image of the object.',
    price: 'Custom Quote',
    image: '/temp_7.jpg',
    specifications: {
      type: 'Non-contact Infrared',
      output: 'Thermogram Image',
      principle: 'Infrared Energy Detection',
      range: 'Above 0°K'
    }
  },
  {
    id: 'ts-108',
    name: 'R Type Thermocouple',
    category: 'Temperature Sensors',
    description: 'An R type thermocouple is a high-temperature sensor made from platinum-rhodium and platinum conductors for accurate and stable temperature measurement in demanding industrial processes. It is widely used in furnaces, kilns, glass manufacturing, and heat treatment applications requiring long-term reliability at elevated temperatures.',
    longDescription: 'An R type thermocouple is a high-temperature sensor made from platinum-rhodium and platinum conductors for accurate and stable temperature measurement in demanding industrial processes. It is widely used in furnaces, kilns, glass manufacturing, and heat treatment applications requiring long-term reliability at elevated temperatures.',
    price: 'Custom Quote',
    image: '/r-type-thermocouple.webp',
    specifications: {
      type: 'Noble Metal Thermocouple',
      application: 'Furnaces, kilns, heat treatment',
      'temperature range': '0°C to 1600°C',
      accuracy: 'High stability and precision',
      material: 'Platinum / Platinum-Rhodium',
      output: 'Millivolt signal',
      'thermocouple type': 'Type R',
      'positive leg': 'PtRh13%',
      'negative leg': 'Platinum',
      'temperature limit': 'Up to 1600°C',
      'protection tube': 'Ceramic / Alumina',
      'application media': 'High-temperature industrial processes'
    },
    features: [
      {
        title: 'High Temperature',
        description: 'Suitable for extreme heat applications.'
      },
      {
        title: 'Stable Output',
        description: 'Provides reliable long-term temperature measurement.'
      },
      {
        title: 'Precision Grade',
        description: 'Ensures excellent measurement accuracy.'
      },
      {
        title: 'Industrial Duty',
        description: 'Designed for furnace and kiln environments.'
      },
      {
        title: 'Corrosion Resistant',
        description: 'Noble metal construction improves durability.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'ts-109',
    name: 'S Type Thermocouple',
    category: 'Temperature Sensors',
    description: 'An S type thermocouple is a precision noble-metal temperature sensor designed for accurate measurement in high-temperature industrial environments. It offers excellent stability, repeatability, and oxidation resistance, making it ideal for laboratory, glass, ceramic, and metallurgical applications.',
    longDescription: 'An S type thermocouple is a precision noble-metal temperature sensor designed for accurate measurement in high-temperature industrial environments. It offers excellent stability, repeatability, and oxidation resistance, making it ideal for laboratory, glass, ceramic, and metallurgical applications.',
    price: 'Custom Quote',
    image: '/stype-thermocouple.webp',
    specifications: {
      type: 'Noble Metal Thermocouple',
      application: 'Glass, ceramic, metallurgy',
      'temperature range': '0°C to 1600°C',
      stability: 'Excellent long-term accuracy',
      material: 'Platinum / Platinum-Rhodium',
      output: 'Millivolt signal',
      'thermocouple type': 'Type S',
      'positive leg': 'PtRh10%',
      'negative leg': 'Platinum',
      'temperature limit': 'Up to 1600°C',
      'sensor construction': 'Mineral insulated / ceramic protected',
      'application media': 'High-temperature process monitoring'
    },
    features: [
      {
        title: 'Precision Sensor',
        description: 'Provides highly accurate temperature readings.'
      },
      {
        title: 'Long Stability',
        description: 'Maintains calibration over extended operation.'
      },
      {
        title: 'Heat Resistant',
        description: 'Designed for continuous high-temperature exposure.'
      },
      {
        title: 'Industrial Grade',
        description: 'Suitable for demanding process industries.'
      },
      {
        title: 'Oxidation Resistant',
        description: 'Noble metal construction improves sensor life.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  // Digital Indicators & Controllers
  {
    id: 'dc-101',
    name: 'Digital Indicators and Controllers',
    category: 'Digital Indicators & Controllers',
    description: 'Precision panel indicators and process controllers with universal inputs and RS485 communication.',
    longDescription: 'Digital Indicators and Controllers manufactured by us include panel mounting indicators, process controllers, Differential Pressure Indicators, Digital Temperature Indicators, Temperature Controllers, Jumbo Sized Display Indicators. The Universal Input Indicators can accept selectable inputs of RTD Pt-100, All Thermocouples, Analog 4-20mA, Voltage 0-1V.D.C. or 0-10V.D.C. Available in panel mounting sizes of 96 x 96, 48x48, 96 x 48 mm. Additional features include 4-20mA Retransmission Output, RS 485 Communication & upto 4" Large Size Displays. Range covers: LCD/LED Indication, Numeric/Alphanumeric, Loop Powered, Bar-Graph, and Battery powered variants.',
    price: 'Custom Quote',
    image: '/digi_1.jpg',
    specifications: {
      input: 'Universal (PT-100, TC, 4-20mA, 0-10V)',
      sizes: '96x96, 48x48, 96x48 mm',
      output: '4-20mA Retransmission',
      comm: 'RS 485 Communication'
    }
  },
  // Multimeters & Testers
  {
    id: 'mt-101',
    name: 'Multimeters & Testers',
    category: 'Multimeters & Testers',
    description: 'Professional Fluke 177 Digital Multimeter for troubleshooting electrical and electronic systems.',
    longDescription: 'Digital Multimeter delivers the right features for electrical maintenance experts. With its precision, reliability, and ease of use, the Fluke 177 Digital Multimeter is the preferred solution for professional technicians worldwide. Independently tested for safe use in CAT IV 600 V/CAT III 1000 V environments, the product includes all the features you need to troubleshoot and repair many problems in electrical and electronic systems. Features True-RMS voltage/current, 6000-count resolution, and 0.09% basic accuracy.',
    price: 'Custom Quote',
    image: '/multi_1.jpg',
    specifications: {
      rating: 'CAT IV 600 V / CAT III 1000 V',
      accuracy: '0.09% Basic Accuracy',
      resolution: '6000-count',
      measurement: 'True-RMS Voltage / Current'
    }
  },
  {
    id: 'mt-102',
    name: 'Digital Multimeters & Testers',
    category: 'Multimeters & Testers',
    description: 'Rugged and affordable digital multimeters for residential, commercial, and HVAC technicians.',
    longDescription: 'Above all digital multimeter offers reliable measurements for residential/commercial electricians and heating and air conditioning technicians. This small, lightweight multimeter fits comfortably in your hand but is rugged enough to withstand daily use for years to come. When it comes to professional-grade affordable multimeters, these digital multimeters are your best choice. Features automatic shutdown and easy battery replacement.',
    price: 'Custom Quote',
    image: '/multi_2.jpg',
    specifications: {
      dcAccuracy: '0.5%',
      safety: 'CAT III 600 V',
      design: 'Small / Lightweight / One-handed',
      test: 'Diode / Continuity / Buzzer'
    }
  },
  {
    id: 'mt-103',
    name: 'Clamp Meter',
    category: 'Multimeters & Testers',
    description: 'A clamp meter is an electrical testing instrument used to measure current without disconnecting wiring or interrupting the circuit. It combines current sensing with multimeter functions such as voltage, resistance, continuity, and frequency measurement, making it ideal for industrial maintenance and troubleshooting.',
    longDescription: 'A clamp meter is an electrical testing instrument used to measure current without disconnecting wiring or interrupting the circuit. It combines current sensing with multimeter functions such as voltage, resistance, continuity, and frequency measurement, making it ideal for industrial maintenance and troubleshooting.',
    price: 'Custom Quote',
    image: '/clamp meters.png',
    specifications: {
      type: 'Digital Clamp Meter',
      application: 'Electrical testing and maintenance',
      measurements: 'Current, voltage, resistance',
      'current type': 'AC / DC',
      display: 'Digital LCD',
      safety: 'CAT III / CAT IV',
      'current measurement': 'AC/DC',
      'voltage measurement': 'Up to 1000 V',
      'resistance measurement': 'Up to MΩ range',
      'continuity test': 'Audible buzzer',
      'display type': 'Backlit LCD',
      'power supply': 'Battery operated'
    },
    features: [
      {
        title: 'Non Intrusive',
        description: 'Measures current without disconnecting cables.'
      },
      {
        title: 'Multi Function',
        description: 'Combines current and multimeter measurements.'
      },
      {
        title: 'Portable Design',
        description: 'Compact handheld instrument for field use.'
      },
      {
        title: 'Safe Operation',
        description: 'Provides insulated measurement for live circuits.'
      },
      {
        title: 'Industrial Use',
        description: 'Suitable for maintenance and troubleshooting.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'mt-104',
    name: 'Milliamp Source Injector',
    category: 'Multimeters & Testers',
    description: 'A milliamp source injector is a precision calibration instrument used to simulate and measure 4–20 mA process signals in industrial control systems. It is commonly used for testing transmitters, PLCs, control loops, and instrumentation equipment during commissioning and maintenance.',
    longDescription: 'A milliamp source injector is a precision calibration instrument used to simulate and measure 4–20 mA process signals in industrial control systems. It is commonly used for testing transmitters, PLCs, control loops, and instrumentation equipment during commissioning and maintenance.',
    price: 'Custom Quote',
    image: '/sourcemiliamp.webp',
    specifications: {
      type: 'Loop Calibrator / mA Injector',
      application: 'Process loop testing and calibration',
      'signal range': '0–24 mA',
      function: 'Source and measure current',
      display: 'Digital LCD',
      portability: 'Handheld instrument',
      'output signal': '0–24 mA',
      'measurement accuracy': '±0.02% FS',
      'loop power': '24 V loop supply',
      'display type': 'Digital display',
      'power supply': 'Battery operated'
    },
    features: [
      {
        title: 'Precise Calibration',
        description: 'Generates accurate milliamp process signals.'
      },
      {
        title: 'Loop Testing',
        description: 'Tests transmitters and control loops efficiently.'
      },
      {
        title: 'Portable Unit',
        description: 'Compact handheld design for field calibration.'
      },
      {
        title: 'Dual Function',
        description: 'Supports both sourcing and measurement modes.'
      },
      {
        title: 'Easy Operation',
        description: 'Simple controls improve maintenance efficiency.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'mt-105',
    name: 'Electrical Testing Equipment',
    category: 'Multimeters & Testers',
    description: 'Electrical testing equipment includes instruments used for measuring, testing, calibrating, and troubleshooting electrical and electronic systems. These devices support preventive maintenance, commissioning, and industrial diagnostics across power, automation, and process industries.',
    longDescription: 'Electrical testing equipment includes instruments used for measuring, testing, calibrating, and troubleshooting electrical and electronic systems. These devices support preventive maintenance, commissioning, and industrial diagnostics across power, automation, and process industries.',
    price: 'Custom Quote',
    image: '/multi_1.jpg',
    specifications: {
      type: 'Electrical Testing Instrument',
      application: 'Industrial testing and diagnostics',
      function: 'Measurement and calibration',
      measurements: 'Voltage, current, resistance',
      portability: 'Portable and handheld options',
      safety: 'Industrial protection standards',
      'measurement functions': 'Voltage, current, continuity',
      display: 'Digital LCD',
      'power source': 'Battery / AC powered',
      'safety category': 'CAT III / CAT IV',
      'application area': 'Electrical and industrial systems'
    },
    features: [
      {
        title: 'Accurate Testing',
        description: 'Provides reliable electrical measurements.'
      },
      {
        title: 'Industrial Grade',
        description: 'Designed for demanding field environments.'
      },
      {
        title: 'Portable Design',
        description: 'Easy to carry for onsite diagnostics.'
      },
      {
        title: 'Safe Operation',
        description: 'Built with electrical safety protection.'
      },
      {
        title: 'Multi Purpose',
        description: 'Supports testing, troubleshooting, and calibration.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  // Wires & Cables
  {
    id: 'wc-101',
    name: 'Power cables',
    category: 'Wires & Cables',
    description: 'Power transmission and distribution cables for overhead, underground, and submarine industrial systems.',
    longDescription: 'Power cables are principally used for power transmission and distribution systems (overhead, underground and submarine) in the power and other industries. We manufacture a range of cables with high to low voltage and different sheathings such as PVC, XLPE, flame retardant and low smoke. The main structural components include conductor, insulation and sheath.',
    price: 'Custom Quote',
    image: '/wir_1.jpg',
    specifications: {
      voltage: 'High / Medium / Low Voltage',
      insulation: 'PVC / XLPE',
      sheathing: 'Flame Retardant / Low Smoke',
      application: 'Power Transmission / Distribution'
    }
  },
  {
    id: 'wc-102',
    name: 'Control cables',
    category: 'Wires & Cables',
    description: 'Automation control cables with galvanized steel braiding for equipment signal distribution.',
    longDescription: 'Control cables send signals to control the functioning of an equipment and allow distribution of data or signals that have low voltage. Designed specifically for automation controls, these cables have a copper conductor, which is enveloped in galvanized steel braid. Usually bear a PVC/XLPE insulation that protects them from impacts and harsh climatic conditions.',
    price: 'Custom Quote',
    image: '/wir_3.jpg',
    specifications: {
      conductor: 'Copper',
      shielding: 'Galvanized Steel Braid',
      insulation: 'PVC / XLPE',
      suitability: 'Automation Controls'
    }
  },
  {
    id: 'wc-103',
    name: 'Instrumentation cables',
    category: 'Wires & Cables',
    description: 'Precision measurement and supervision cables for oil, gas, and power industries.',
    longDescription: 'Instrumentation cables find a wide variety of applications for process instrumentation for measurement, supervision and control in oil & gas, power and chemical industries. Prone to external interferences, these cables demand stringent quality requirements and special electrical properties. Tinned copper conductors are laid up in pair/triad/quad either overall shielded or individually and overall shielded.',
    price: 'Custom Quote',
    image: '/wir_4.jpg',
    specifications: {
      conductor: 'Tinned Copper',
      config: 'Pair / Triad / Quad',
      shielding: 'Individual / Overall Shielded',
      application: 'Instrumentation / Control'
    }
  },
  {
    id: 'wc-104',
    name: 'Solar cables',
    category: 'Wires & Cables',
    description: 'Specialized DC and AC cables for photovoltaic module interconnection and grid connection.',
    longDescription: 'DC solar cables connect photovoltaic modules. LT solar AC cables connect inverters to transformers, and HT Solar AC cables connect transformers to the grid. Solar cables must withstand extreme weather conditions, be flame and fire retardant, and operate at consistent high temperatures in air or underground trays.',
    price: 'Custom Quote',
    image: '/wir_5.jpg',
    specifications: {
      types: 'DC / LT AC / HT AC',
      weather: 'Extreme Weather Resistant',
      standard: 'Flame & Fire Retardant',
      operatingTemp: 'Consistent High Temperature'
    }
  },
  {
    id: 'wc-105',
    name: 'Building Wires',
    category: 'Wires & Cables',
    description: 'Environmentally friendly wires for building electrification and household appliances.',
    longDescription: 'Suitable where high flexibility is of prime importance for indoor and outdoor applications. Meets stringent European Euroclass and Construction Product Regulations. Energy efficient, recyclable, RoHS compliant, and emissions-optimized in fire situations. Ideal for household appliances like refrigerators and air conditioners.',
    price: 'Custom Quote',
    image: '/wir_6.jpg',
    specifications: {
      compliance: 'RoHS / Euroclass',
      flexibility: 'High Flexibility',
      environment: 'Low Smoke / Non-Toxic',
      application: 'Indoor / Outdoor Building'
    }
  },
  {
    id: 'wc-106',
    name: 'Flexible single/Multi core',
    category: 'Wires & Cables',
    description: 'Energy efficient Class 5 copper rods with various insulation properties for multicore segments.',
    longDescription: 'Manufacture of energy efficient class 5 wire with properties such as PVC, HRFR, HR and HR-FRLS. Constructed from 0.5 to 1000 Sq.mm. in single core copper rods, and up to 61 cores in multicore segments. Provides excellent electrical efficiency and mechanical durability.',
    price: 'Custom Quote',
    image: '/wir_9.jpg',
    specifications: {
      conductor: 'Class 5 Copper',
      range: '0.5 to 1000 Sq.mm',
      insulation: 'PVC / HRFR / HR-FRLS',
      cores: 'Single to 61-Core'
    }
  },
  {
    id: 'wc-107',
    name: 'Communication cables',
    category: 'Wires & Cables',
    description: 'Wide range of telephone, LAN, co-axial, and speaker cables for data and signal transmission.',
    longDescription: 'Comprehensive range of communication cables designed for clear signal transmission. Includes telephone wiring, high-speed LAN cables for networking, co-axial cables for video/radio, and high-fidelity speaker cables.',
    price: 'Custom Quote',
    image: '/wir_11.jpg',
    specifications: {
      categories: 'Telephone / LAN / Co-axial / Speaker',
      transmission: 'High Fidelity / Low Interference',
      jacketing: 'PVC / LSZH',
      impedance: 'Application Specific'
    }
  },
  {
    id: 'wc-108',
    name: 'Other cables',
    category: 'Wires & Cables',
    description: 'Specialty cables including welding, submersible, rubber, and specialty industrial conductors.',
    longDescription: 'Includes welding cables, submersible flat and round cables, rubber cables, overhead conductors, railway signaling cables and specialty cables. Specialty cables are engineered for marine, oil and gas, extreme fire conditions, space station systems, and traffic signaling.',
    price: 'Custom Quote',
    image: '/placeholder.jpg',
    specifications: {
      variants: 'Welding / Submersible / Rubber',
      specialty: 'Marine / Space / Traffic',
      ruggedness: 'Extreme Condition Ready',
      standard: 'Industrial Duty'
    }
  },
  // Online Moisture Analyser
  {
    id: 'om-101',
    name: 'Online Moisture Analyser',
    category: 'Online Moisture Analyser',
    description: 'A Reliable, Rugged and Accurate Transmitter',
    longDescription: 'Online Moisture Analyser has been developed to provide reliable performance in the harsher industrial operating environments found in the minerals, ceramics, ore processing, chemical, sinter and similar processes. Each MT56 measurement produces analog and digital outputs for control. An Ethernet interface is available as an option. The MT56 is made up of 5 basic components: a quartz halogen lamp, a filter wheel motor, multiple NIR interference filters in a rotating filter wheel assembly, a Lead Sulfide detector and a single “smart” circuit board. The MT56 is fully modular – each of these components can be replaced in the field within minutes.',
    price: 'Custom Quote',
    image: '/kled online moist analyers.avif',
    images: ['/kled online moist analyers.avif', '/mois_1.jpg'],
    specifications: {
      operation: 'Simple to Operate',
      installation: 'Easy to Install',
      value: 'Affordable & Dependable',
      maintenance: 'Fully Modular Design'
    }
  },
  // SS Pipe & Fittings
  {
    id: 'pf-101',
    name: 'SS Pipe & Fittings',
    category: 'SS Pipe & Fittings',
    description: 'Stainless Steel Pipe Fittings manufactured with modern technology.',
    longDescription: 'Having a definite quality management system, we are regarded as the one of the leading manufacturer, exporter and supplier of an extensive gamut of Stainless Steel Pipe Fittings. The offered fittings are manufactured by using premium quality stainless steel and modern technology by our adroit professionals. Our provided fittings are used to assist proper flow of liquid and gas. In addition to this, we provide these fittings in variegated sizes and designs at nominal prices.',
    price: 'Custom Quote',
    image: '/pipe_1.jpg',
    specifications: {
      design: 'Sturdy design',
      tempResistance: 'High temperature resistance',
      accuracy: 'Dimensional accuracy'
    }
  },
  {
    id: 'pf-102',
    name: '2 VALVE MANIFOLD',
    category: 'SS Pipe & Fittings',
    description: 'Rugged manifolds for isolation and calibration',
    longDescription: 'We have 2 valve manifolds are designed for connecting system impulse line & transmitters. These manifold consist of two valve configuration which allows for easy isolation, calibration, block and bleed for gauges, pressure switches and static pressure transmitting instruments. These manifolds are rugged in construction to withstand high pressures and temperatures. The manifolds are rated for pressures as high as 6000 PSI at 200°F or 4000 PSI at 500°F with PTFE Packing. For a Higher Temperatures Grafoil Packing is used. These valve manifolds combine the functions of a tee, calibration valve, isolation valve and all tubing and fittings into a single compact unit thus reducing number of fittings and space required for installation.',
    price: 'Custom Quote',
    image: '/pipe_2.jpg',
    specifications: {
      rating: 'Up to 6000 PSI',
      temp: 'Up to 500°F',
      packing: 'PTFE / Grafoil',
      design: 'Compact Multi-function'
    }
  },
  {
    id: 'pf-103',
    name: '3 VALVE MANIFOLD',
    category: 'SS Pipe & Fittings',
    description: 'Connecting system impulse lines & transmitters',
    longDescription: 'We have 3 valve manifolds pipe to pipe (R), pipe to flange (T) and flange to flange (H) designed for connecting system impulse lines & transmitters. These manifolds consist of 1/2″ NPT(F), pipe to flange or flange to flange connections on 54mm (2 1/8″) centers, and of one equalizer valve, two block valves and 2 nos 1/4″ NPT(F) purge (VENT) connections. These manifolds are rugged in construction to withstand high pressures and temperatures. The manifolds are rated for pressures as high as 6000 PSI at 200°F or 4000 PSI at 500°F with PTFE Packing. For a Higher Temperatures Grafoil Packing is used.',
    price: 'Custom Quote',
    image: '/pipe_3.jpg',
    specifications: {
      types: 'Pipe-Pipe / Pipe-Flange / Flange-Flange',
      connections: '1/2" NPT(F) / 1/4" Purge',
      rating: '6000 PSI @ 200°F',
      center: '54mm (2 1/8")'
    }
  },
  {
    id: 'pf-104',
    name: '5 VALVE MANIFOLD',
    category: 'SS Pipe & Fittings',
    description: 'High-integrity 5-valve manifold systems',
    longDescription: 'We have 5 valve manifolds pipe to pipe (R), pipe to flange (T) and flange to flange (H) designed for connecting system impulse lines & transmitters. These manifolds consist of 1/2″ NPT(F), pipe to flange or flange to flange connections on 54mm (2 1/8″) centers, and of one equaliser valve, two block valves, one Bleed Valve and 2 nos 1/4″ NPT(F) purge (VENT) connections. These manifolds are rugged in construction to withstand high pressures and temperatures. The manifolds are rated for pressures as high as 6000 PSI at 200°F or 4000 PSI at 500°F with PTFE Packing. For a Higher Temperatures Grafoil Packing is used.',
    price: 'Custom Quote',
    image: '/pipe_4.jpg',
    specifications: {
      config: 'Equaliser, 2 Block, 1 Bleed',
      rating: '6000 PSI',
      temp: '4000 PSI @ 500°F',
      standards: 'PTFE / Grafoil Options'
    }
  },
  // Panel Buildings
  {
    id: 'pb-101',
    name: 'Power Distribution Panel',
    category: 'Panel Buildings',
    description: 'Main Distribution Boards (MDB) for electrical energy transmission.',
    longDescription: 'Power Distribution Board is a system, consisting of a Main Distribution Board (MDB), Sub Main Distribution Boards (SMDBs) and Final Distribution Boards, by which the electrical energy is transmitted via branches to reach the exact end user. An MDB is a panel or enclosure that houses the fuses, circuit breakers and ground leakage protection units where the electrical energy, which is used to distribute electrical power to numerous individual circuits or consumer points, is taken in from the transformer. Typically has a single or multiple incoming power sources and includes main circuit breakers and residual current or earth leakage protection devices. Free standing enclosure with bus bar system, MCCB\'s, metering and required current transformers.',
    price: 'Custom Quote',
    image: '/panel_4.jpg',
    specifications: {
      rating: 'Up to 6000A',
      voltage: 'Up to 440 Volts',
      protection: 'IP 31 & IP 54',
      mount: 'Floor Mounting'
    }
  },
  {
    id: 'pb-102',
    name: 'Feeder Pillar',
    category: 'Panel Buildings',
    description: 'Weatherproof lighting control and distribution pillars.',
    longDescription: 'Feeder pillar Board are manufactured from galvanized/electro galvanized steel sheets or CRCA sheets. Single doors or Double doors front and rear constructions are available on request with Canopy to make it a complete Rain Proof including Dust and Vermin proof. These Feeder Pillars are generally installed Outside, like streets, foothpaths, General Pavements, Outside Factories. These include instrument panel with voltmeters, ammeters, service fuses and selector switches. The built, structure and designs are suitable to all kinds of lighting applications.',
    price: 'Custom Quote',
    image: '/panel_1.jpg',
    specifications: {
      busbarRating: '630A',
      protection: 'IP 55 & IP 56',
      material: 'Aluminum / GRP',
      design: 'Single / Double Walled'
    }
  },
  {
    id: 'pb-103',
    name: 'Fire Fighting MCC Panel',
    category: 'Panel Buildings',
    description: 'Automatic detection and control panel for fire breakthroughs.',
    longDescription: 'This panel is widely used in many industries for detecting and controlling fire in the initial stage and is suitable in case of fire breakouts, sprinkle, control panel incorporates hydrant and many more. It is manufactured with the help of advanced technology and using the finest quality components. Features completely automatic operation of Main & jockey pumps with RPM measurement and fault alarms on the controller display.',
    price: 'Custom Quote',
    image: '/panel_2.jpg',
    specifications: {
      operation: 'Completely Automatic',
      display: 'Digital Parameter Setup',
      input: 'Magnetic Pick-up / Remote',
      starter: 'In-built Hydrant Starter'
    }
  },
  {
    id: 'pb-104',
    name: 'Lighting Distribution Boards',
    category: 'Panel Buildings',
    description: 'Integral safety boards for building lighting projects.',
    longDescription: 'Lighting Distribution Boards are an integral and essential part of every building project and it must be designed, manufactured and installed all in accordance with the safety standards. Constructed of 1.6 mm thick CRCA Sheet, wall mounting, indoor type with proper neoprene gaskets at doors and joints to ensure dust and vermin-proof enclosures. Top and bottom detachable gland plates for cable entry. Separate Chamber of Cable Alley is provided with Connectors for final terminations.',
    price: 'Custom Quote',
    image: '/panel_5.jpg',
    specifications: {
      construction: '1.6mm CRCA Sheet',
      mounting: 'Wall / Indoor',
      busbars: 'Aluminium / Tinned Copper',
      enclosure: 'Dust & Vermin-proof'
    }
  },
  {
    id: 'pb-105',
    name: 'Local Control Stations & JB',
    category: 'Panel Buildings',
    description: 'Robust field control and junction enclosures.',
    longDescription: 'Local control stations and junction boxes designed for high performance and reliability in industrial process environments. Equipped with optimized layouts for signal detection and measurement immunity from hydraulic noise and pipeline vibration, providing heavy-duty protection for field instrumentation cabling.',
    price: 'Custom Quote',
    image: '/panel_3.jpg',
    specifications: {
      design: 'Heavy-duty / Robust',
      application: 'Field Protection',
      reliability: 'High Signal Integrity',
      enclosure: 'Industrial Grade'
    }
  },
  // Wireless System
  {
    id: 'ws-101',
    name: 'Wireless System',
    category: 'Wireless System',
    description: 'Bi-directional signal communication system RCI-800-RF9.',
    longDescription: 'The RCI-800-RF9 is a bi-directional signal communication system that exchanges 8 analog (0-20mA) and 8 dry contact inputs between a master and a remote unit. A complete system consists of one master station and one remote station each with 8 analog inputs/outputs, and 8 relay contact outputs. Retreives signals from remote sites for monitoring and control. Licensing-free 900MHz Spread Spectrum Radio using channel hopping technology for greater reliability. Line-of-Sight ranges of up to 12 miles can be achieved.',
    price: 'Custom Quote',
    image: '/wireless-1.jpg',
    specifications: {
      radio: '900MHz Spread-Spectrum',
      io: '8 Analog / 8 Dry Contact',
      output: '8 Form C Relay',
      range: 'Up to 12 Miles (LOS)',
      logic: 'Microprocessor Controlled'
    }
  },
  {
    id: 'ws-102',
    name: 'LoRa Wireless Communication System',
    category: 'Wireless System',
    description: 'A LoRa wireless communication system is a long-range, low-power industrial networking solution designed for remote monitoring and IoT applications. It enables reliable wireless data transmission between field instruments, sensors, gateways, and control systems across large industrial areas with minimal power consumption.',
    longDescription: 'A LoRa wireless communication system is a long-range, low-power industrial networking solution designed for remote monitoring and IoT applications. It enables reliable wireless data transmission between field instruments, sensors, gateways, and control systems across large industrial areas with minimal power consumption.',
    price: 'Custom Quote',
    image: '/lora bancd wireless.jpg',
    specifications: {
      type: 'Long Range Wireless System',
      application: 'Industrial IoT and remote monitoring',
      communication: 'LoRa / LoRaWAN',
      range: 'Up to several kilometers',
      power: 'Low power consumption',
      connectivity: 'Sensor and gateway integration',
      'wireless technology': 'LoRa / LoRaWAN',
      'communication range': '2–15 km depending on environment',
      'frequency band': '433 MHz / 868 MHz / 915 MHz',
      'power supply': 'Battery / 24 Vdc',
      'network topology': 'Star network',
      'data interface': 'Modbus / RS485 / Ethernet'
    },
    features: [
      {
        title: 'Long Range',
        description: 'Supports wireless communication across large industrial sites.'
      },
      {
        title: 'Low Power',
        description: 'Optimized for battery-powered remote devices.'
      },
      {
        title: 'IoT Ready',
        description: 'Enables smart industrial monitoring applications.'
      },
      {
        title: 'Reliable Network',
        description: 'Provides stable communication in challenging environments.'
      },
      {
        title: 'Easy Integration',
        description: 'Compatible with industrial sensors and gateways.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  // Dust Monitor
  {
    id: 'dm-101',
    name: 'DSL-340 MkIII Double Pass Dust Monitor',
    category: 'Dust Monitor',
    description: 'The DSL-340 MkIII is an optical double-pass dust monitoring system designed for continuous measurement of particulate concentration in industrial exhaust gases, ducts, stacks, and filtration systems.',
    longDescription: 'The DSL-340 MkIII is an optical double-pass dust monitoring system designed for continuous measurement of particulate concentration in industrial exhaust gases, ducts, stacks, and filtration systems. Using Dynamic Detection Principle (DDP), it provides highly stable dust monitoring with reduced drift, improved reliability, and accurate mg/m³ readings when calibrated.\n\nDDP technology minimizes signal drift caused by temperature, contamination, or optical degradation. It provides precise dust concentration monitoring with ±2% accuracy and is built with stainless steel construction for demanding industrial environments. Supports analogue, USB, and Modbus communication for easy system integration. No moving parts and accessible optical surfaces simplify routine servicing. Meets US EPA PS-11 and EU regulatory standards.',
    price: 'Custom Quote',
    image: '/dsl-340.jpg',
    specifications: {
      range: '0–1000 mg/m³',
      principle: 'Dynamic Detection Principle (DDP)',
      accuracy: '±2% of max range',
      pathLength: '0.5–10 m',
      output: '4–20mA, Modbus RTU RS485, USB',
      compliance: 'US EPA PS-11 compliant',
      resolution: '0.1 mg/m³',
      protection: 'IP65',
      material: '316L stainless steel'
    }
  },
  // Level Transmitter
  {
    id: 'lt-101',
    name: 'Radar Level Transmitter',
    category: 'Level Transmitter',
    description: 'Radar level transmitters provide continuous, non-contact level measurement for liquids, solids, and bulk materials in industrial tanks, silos, and process vessels.',
    longDescription: 'Radar level transmitters provide continuous, non-contact level measurement for liquids, solids, and bulk materials in industrial tanks, silos, and process vessels. Using microwave radar technology, they deliver accurate, reliable readings even in harsh conditions such as dust, vapor, pressure, or temperature variations.\n\nThese transmitters measure level without direct media contact, ensuring precise level measurement for demanding processes. They operate in dust, vapor, and extreme temperatures with no moving parts, reducing service needs. Supports 4–20mA, HART, and Modbus communication protocols for flexible integration into existing plant automation systems.',
    price: 'Custom Quote',
    image: '/non-contact-radar-level-transmitter.jpg',
    specifications: {
      type: 'Non-contact Microwave Radar',
      range: 'Up to 120 m',
      accuracy: '±2 mm',
      frequency: '6–80 GHz',
      output: '4–20mA, HART, Modbus',
      temperature: '-40°C to +200°C',
      pressure: 'Vacuum to 40 bar',
      protection: 'IP67/IP68'
    }
  },
  // Pressure / Flow Switch
  {
    id: 'ps-101',
    name: 'Pressure and Flow Switches',
    category: 'Pressure / Flow Switch',
    description: 'Industrial protection and control devices used to monitor system pressure, liquid flow, and gas movement, providing reliable switching outputs for alarms, automation, and equipment safety.',
    longDescription: 'Pressure and flow switches are industrial protection and control devices used to monitor system pressure, liquid flow, and gas movement. They provide reliable switching outputs for alarms, automation, and equipment safety across utilities and process industries.\n\nThese switches deliver stable process monitoring and alarms across varied industrial conditions. Compact design enables easy integration into existing systems, while the rugged SS316 / Brass construction ensures continuous plant operation. Adjustable set points allow precise control for pressure ranges from vacuum to 600 bar across liquid and gas applications.',
    price: 'Custom Quote',
    image: '/flow-pressure-switch-600.jpg',
    specifications: {
      type: 'Mechanical / Electronic Switch',
      pressureRange: 'Vacuum to 600 bar',
      output: 'SPDT / Relay / Digital',
      material: 'SS316 / Brass',
      temperature: '-20°C to +120°C',
      protection: 'IP65/IP67',
      setPoint: 'Adjustable',
      power: '24 Vdc / AC'
    }
  },
  // Emission Monitoring Analyzer
  {
    id: 'em-101',
    name: 'Dust, Opacity & Zirconia Analyzers',
    category: 'Emission Monitoring Analyzer',
    description: 'Comprehensive stack emission monitoring for particulate concentration, combustion efficiency, and oxygen analysis for industrial compliance and process optimization.',
    longDescription: 'Dust, opacity, and zirconia analyzers provide comprehensive stack emission monitoring for particulate concentration, combustion efficiency, and oxygen analysis. These systems are designed for industrial compliance, process optimization, and complete analytical monitoring solutions.\n\nThis integrated analytical platform combines multiple emission parameters — dust, opacity, and O₂ — in a single system. Using optical and zirconia technology, these analyzers support environmental regulations and provide high long-term stability. They simplify plant monitoring architecture and enhance combustion and emission control efficiency.',
    price: 'Custom Quote',
    image: '/Zirconia-Oxygen-Analyzer2.jpg',
    specifications: {
      type: 'Continuous Emission Monitoring',
      dustRange: '0–1000 mg/m³',
      opacity: '0–100%',
      oxygenRange: '0–25%',
      technology: 'Optical + Zirconia',
      output: '4–20mA, Modbus',
      compliance: 'Industrial environmental standards',
      application: 'Stack, boiler, process gas'
    }
  },
  {
    id: 'em-102',
    name: 'NDIR Type Gas Analyzer',
    category: 'Emission Monitoring Analyzer',
    description: 'An NDIR (Non-Dispersive Infrared) gas analyzer is designed for continuous measurement of industrial gases using infrared absorption technology. It is widely used for emission monitoring, combustion control, and process gas analysis in power plants, chemical industries, and environmental monitoring systems.',
    longDescription: 'An NDIR (Non-Dispersive Infrared) gas analyzer is designed for continuous measurement of industrial gases using infrared absorption technology. It is widely used for emission monitoring, combustion control, and process gas analysis in power plants, chemical industries, and environmental monitoring systems.',
    price: 'Custom Quote',
    image: '/ndir_product.avif',
    specifications: {
      type: 'NDIR Gas Analyzer',
      application: 'Emission and process gas monitoring',
      measurements: 'CO, CO₂, SO₂, NOx',
      technology: 'Infrared absorption',
      output: '4–20mA, Modbus, Digital',
      system: 'Continuous online monitoring',
      'measurement principle': 'Non-Dispersive Infrared (NDIR)',
      'response time': '<60 seconds',
      accuracy: '±1% FS',
      'power supply': '24 Vdc / 230 Vac'
    },
    features: [
      {
        title: 'High Accuracy',
        description: 'Infrared technology provides precise gas analysis.'
      },
      {
        title: 'Continuous Monitoring',
        description: 'Supports real-time industrial emission analysis.'
      },
      {
        title: 'Multi Gas',
        description: 'Measures multiple process gases simultaneously.'
      },
      {
        title: 'Stable Operation',
        description: 'Reliable performance for long-term industrial use.'
      },
      {
        title: 'Low Maintenance',
        description: 'Minimal servicing requirements with stable sensors.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  {
    id: 'em-103',
    name: 'Extractive Type Gas Analyzer',
    category: 'Emission Monitoring Analyzer',
    description: 'An extractive type gas analyzer continuously extracts gas samples from industrial stacks or process lines for conditioning and analysis. It is commonly used in emission monitoring systems for accurate measurement of pollutant and combustion gases under demanding industrial conditions.',
    longDescription: 'An extractive type gas analyzer continuously extracts gas samples from industrial stacks or process lines for conditioning and analysis. It is commonly used in emission monitoring systems for accurate measurement of pollutant and combustion gases under demanding industrial conditions.',
    price: 'Custom Quote',
    image: '/extract-gas-analyzer.jpg',
    specifications: {
      type: 'Extractive Gas Analyzer',
      application: 'Stack and process gas monitoring',
      measurements: 'SOx, NOx, CO, O₂',
      system: 'Sample extraction and conditioning',
      output: '4–20mA, Modbus, Ethernet',
      installation: 'CEMS and industrial plants',
      'measurement method': 'Extractive sampling',
      'sample conditioning': 'Integrated filtration and cooling',
      'response time': '<120 seconds',
      'power supply': '230 Vac'
    },
    features: [
      {
        title: 'Precise Sampling',
        description: 'Provides stable and conditioned gas analysis.'
      },
      {
        title: 'Multi Parameter',
        description: 'Measures multiple emission gases simultaneously.'
      },
      {
        title: 'Industrial Grade',
        description: 'Designed for harsh stack monitoring environments.'
      },
      {
        title: 'Compliance Ready',
        description: 'Suitable for continuous emission monitoring systems.'
      },
      {
        title: 'Integrated System',
        description: 'Combines sampling, conditioning, and analysis functions.'
      }
    ],
    documents: {
      technical_datasheet: '/profile.pdf'
    }
  },
  // Gas Analyzer
  {
    id: 'gz-101',
    name: 'SOx and NOx Analyzers',
    category: 'Gas Analyzer',
    description: 'Continuously monitor sulfur oxides and nitrogen oxides in industrial emissions, combustion processes, and environmental systems for regulatory compliance and pollution control.',
    longDescription: 'SOx and NOx analyzers continuously monitor sulfur oxides and nitrogen oxides in industrial emissions, combustion processes, and environmental systems. They support regulatory compliance, process optimization, and pollution control.\n\nUsing UV, NDIR, and chemiluminescence technology, these analyzers measure SO₂, SO₃, NO, and NO₂ at ppm to percent levels with ±1% accuracy and response times under 60 seconds. Designed for harsh plant conditions, they provide real-time emission data to enhance combustion efficiency and ensure environmental compliance.',
    price: 'Custom Quote',
    image: '/sox-nox-analyzer.jpg',
    images: ['/sox-nox-analyzer.jpg', '/sox-nox-analyzer 2.jpg'],
    specifications: {
      type: 'Continuous Gas Analyzer',
      measurements: 'SO₂, SO₃, NO, NO₂',
      technology: 'UV / NDIR / Chemiluminescence',
      accuracy: '±1%',
      responseTime: '<60 seconds',
      range: 'ppm to % levels',
      output: '4–20mA, Digital',
      power: '24 Vdc / AC'
    }
  },
  // Sampling and Water Analysis System
  {
    id: 'wa-101',
    name: 'Sampling System with SWAS Panel',
    category: 'Sampling & Water Analysis',
    description: 'Accurate steam and water analysis systems for power plants, boilers, and industrial utilities, ensuring controlled sample conditioning and precise analytical measurements.',
    longDescription: 'Sampling systems with SWAS panels provide accurate steam and water analysis for power plants, boilers, and industrial utilities. They ensure controlled sample conditioning and precise analytical measurements for plant safety and efficiency.\n\nThe SWAS (Steam and Water Analysis System) panel integrates sample coolers and analytical instruments to monitor pH, conductivity, silica, and sodium levels. This complete system reduces high-pressure sample handling risks and simplifies installation and operation, making it ideal for critical utility systems in power generation.',
    price: 'Custom Quote',
    image: '/steam-and-water-analysis-system-01.jpg',
    specifications: {
      type: 'Steam & Water Analysis System',
      panelType: 'SWAS',
      measurements: 'pH, Conductivity, Silica, Sodium',
      cooling: 'Sample cooler integrated',
      pressure: 'High-pressure steam compatible',
      application: 'Boiler / Power plant monitoring',
      system: 'Integrated panel solution'
    }
  },
  // Industrial Communication System
  {
    id: 'ic-101',
    name: 'Walkie Talkie with IoT Solutions',
    category: 'Industrial Communication',
    description: 'Industrial wireless communication systems with IoT integration combining tracking, monitoring, and remote connectivity to improve workforce coordination and operational visibility.',
    longDescription: 'Walkie talkie systems with IoT integration combine industrial wireless communication with tracking, monitoring, and remote connectivity. These solutions improve workforce coordination, safety, and operational visibility.\n\nThese two-way radio systems are enhanced with GPS, cloud telemetry, and IoT networking to enable real-time communication, personnel tracking, and centralized communication oversight. Rechargeable batteries ensure continuous operation across shift cycles, making these ideal for plant floors, construction sites, and large industrial facilities.',
    price: 'Custom Quote',
    image: '/walie talkie.jpg',
    specifications: {
      type: 'Wireless Communication + IoT',
      communication: 'Two-way radio',
      iotFeatures: 'GPS, Telemetry, Cloud',
      connectivity: 'Radio + IoT network',
      battery: 'Rechargeable',
      application: 'Industrial tracking & coordination'
    }
  },
  // Ultrasonic Transmitter (merged into Level Transmitter)
  {
    id: 'ut-101',
    name: 'Ultrasonic Level Transmitter',
    category: 'Level Transmitter',
    description: 'Reliable non-contact level measurement for liquids and solids using ultrasonic pulse echo technology, suitable for tanks, reservoirs, wastewater, and process applications.',
    longDescription: 'Ultrasonic transmitters provide reliable non-contact level measurement for liquids and solids using sound wave reflection technology. They are suitable for tanks, reservoirs, wastewater, and process applications.\n\nUsing the ultrasonic pulse echo principle, these transmitters measure level without touching the media, offering ±0.25% accuracy with ranges up to 15 m. Simple mounting and setup, IP67 protection, and stable continuous readings make them a low-maintenance choice for water treatment, chemical storage, and general process industries.',
    price: 'Custom Quote',
    image: '/Ultrasonic-Level-Transmitter.jpg',
    specifications: {
      type: 'Non-contact Ultrasonic',
      principle: 'Ultrasonic pulse echo',
      range: 'Up to 15 m',
      accuracy: '±0.25%',
      output: '4–20mA / Digital',
      power: '24 Vdc',
      temperature: '-20°C to +70°C',
      protection: 'IP67'
    }
  },
  {
    id: 'ut-102',
    name: 'Micropilot FMR30B',
    category: 'Level Transmitter',
    description: 'The Micropilot FMR30B is a compact non-contact radar level transmitter designed for continuous measurement of liquids and bulk solids.',
    longDescription: 'The Micropilot FMR30B is a compact non-contact radar level transmitter designed for continuous measurement of liquids and bulk solids. It is ideal for utility and basic industrial applications such as water treatment, storage tanks, and silos, offering reliable performance with simple setup and wireless access. Features include: Easy Setup with guided commissioning, Wireless Access via Bluetooth, Compact Design for small tanks, and Smart Diagnostics using Heartbeat Technology.',
    price: 'Custom Quote',
    image: '/Micropilot_FMR30B.jpg',
    images: ['/Micropilot_FMR30B.jpg'],
    specifications: {
      type: 'Non-contact Radar Level Transmitter',
      application: 'Water, wastewater, tanks, silos',
      range: 'Up to 30 m',
      accuracy: '±2 mm',
      frequency: '80 GHz',
      connectivity: 'Bluetooth, SmartBlue App',
      principle: 'Radar (Free Space)',
      temperature: '-40°C to +80°C',
      pressure: '-1 to 3 bar',
      power: '2-wire system',
      output: '4–20mA, HART',
      display: 'Color touch display'
    },
    features: [
      {
        title: "Easy Setup",
        description: "Guided commissioning simplifies installation and configuration."
      },
      {
        title: "Wireless Access",
        description: "Bluetooth connectivity enables remote monitoring and setup."
      },
      {
        title: "Compact Design",
        description: "Suitable for small tanks and utility applications."
      },
      {
        title: "Reliable Measurement",
        description: "Provides stable level readings for liquids and solids."
      },
      {
        title: "Smart Diagnostics",
        description: "Heartbeat Technology enables device verification without shutdown."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  {
    id: 'ut-103',
    name: 'Micropilot FMR67B',
    category: 'Level Transmitter',
    description: 'The Micropilot FMR67B is a high-performance 80 GHz radar level transmitter designed for demanding solid applications such as silos, bunkers, and stockpiles.',
    longDescription: 'The Micropilot FMR67B is a high-performance 80 GHz radar level transmitter designed for demanding solid applications such as silos, bunkers, and stockpiles. It delivers highly accurate, non-contact level measurement even under extreme temperatures, pressures, and challenging process conditions. Key features: High Performance for long-range solids, Extreme Condition operation (up to 450°C), Narrow Beam for complex vessels, and Heartbeat Technology for advanced diagnostics.',
    price: 'Custom Quote',
    image: '/FMR67B.jpg',
    images: ['/FMR67B.jpg'],
    specifications: {
      type: '80 GHz Radar Level Transmitter',
      application: 'Silos, bunkers, bulk solids',
      range: 'Up to 125 m',
      accuracy: '±3 mm',
      temperature: '-40°C to +450°C',
      pressure: 'Vacuum to 160 bar',
      principle: 'Radar (80 GHz)',
      frequency: 'W-band (~80 GHz)',
      communication: '4–20mA HART, PROFIBUS, PROFINET, Bluetooth',
      ambientTemp: '-40°C to +85°C',
      connection: 'Flanged',
      material: '316L stainless steel / PTFE'
    },
    features: [
      {
        title: "High Performance",
        description: "Designed for long-range and complex solid level applications."
      },
      {
        title: "Extreme Conditions",
        description: "Operates reliably in high temperature and pressure environments."
      },
      {
        title: "Narrow Beam",
        description: "Ensures accurate measurement in narrow silos and complex vessels."
      },
      {
        title: "Smart Monitoring",
        description: "Heartbeat Technology enables diagnostics and verification."
      },
      {
        title: "Flexible Integration",
        description: "Supports multiple industrial communication protocols."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  // Flow Measuring Equipments
  {
    id: 'fm-101',
    name: 'Orifice Flow Meter Assemblies',
    category: 'Flow Measuring Equipments',
    description: 'Precision flow measurement solutions featuring both standard Orifice Assemblies and advanced Orifice Conditioning Assemblies for varied piping requirements.',
    longDescription: 'Our Orifice Flow Meter line offers versatile solutions for industrial fluid measurement. This includes the standard Orifice Assembly for traditional applications and the high-performance Orifice Conditioning Assembly. The conditioning assembly uses a unique multi-hole design that "conditions" the flow, significantly reducing the required straight pipe runs while maintaining high accuracy. Both assemblies are robust, cost-effective, and suitable for liquids, gases, and steam.',
    price: 'Custom Quote',
    image: '/orifice assmebly.jpg',
    images: ['/orifice assmebly.jpg', '/orifce condition.jpeg'],
    specifications: {
      type: 'Differential Pressure Flow Meter',
      application: 'Liquid, gas, and steam flow measurement',
      principle: 'Bernoulli’s equation',
      accuracy: '±2–4%',
      pressureLoss: 'High permanent loss',
      installation: 'Simple and low cost',
      measurementPrinciple: 'Differential pressure across restriction',
      rangeability: '3:1 to 4:1',
      fluidType: 'Liquids, gases, steam'
    },
    features: [
      {
        title: "Standard Orifice Assembly",
        description: "Traditional plate design for reliable flow measurement in standard piping."
      },
      {
        title: "Conditioning Assembly",
        description: "Advanced multi-hole plate that reduces required straight pipe runs by up to 70%."
      },
      {
        title: "Versatile Media",
        description: "Suitable for high-pressure and high-temperature liquids, gases, and steam."
      },
      {
        title: "Robust Build",
        description: "Manufactured from high-grade stainless steel and exotic alloys for harsh environments."
      },
      {
        title: "Cost Effective",
        description: "Economical solution for accurate flow measurement across various industries."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  {
    id: 'fm-102',
    name: 'Annubar Flow Meter',
    category: 'Flow Measuring Equipments',
    description: 'An Annubar flow meter is an insertion-type differential pressure device that measures flow by averaging velocity pressure across a pipe.',
    longDescription: 'An Annubar flow meter is an insertion-type differential pressure device that measures flow by averaging velocity pressure across a pipe. It uses multiple sensing ports to provide accurate and stable flow measurement with minimal pressure loss. This averaging design provides accurate measurement across the full pipe profile and can be installed without major pipeline changes, often being hot-tap capable.',
    price: 'Custom Quote',
    image: '/annubar-flow-meter-with-flow-totalizer.jpg',
    specifications: {
      type: 'Averaging Pitot Tube',
      application: 'Gas, liquid, and steam flow',
      principle: 'Velocity averaging with differential pressure',
      pressureLoss: 'Very low',
      accuracy: '±0.75–2%',
      installation: 'Insertion type / Hot tap capable',
      measurementPrinciple: 'Averaging Pitot (ΔP)',
      pressureTaps: 'Multiple upstream ports',
      fluidType: 'Liquids, gases, steam'
    },
    features: [
      {
        title: "Low Loss",
        description: "Minimizes pressure drop and energy consumption."
      },
      {
        title: "Averaging Design",
        description: "Provides accurate measurement across full pipe profile."
      },
      {
        title: "Easy Retrofit",
        description: "Can be installed without major pipeline changes."
      },
      {
        title: "High Efficiency",
        description: "Improves performance in non-ideal flow conditions."
      },
      {
        title: "No Moving Parts",
        description: "Ensures long-term reliability and low maintenance."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  {
    id: 'fm-103',
    name: 'Venturi Tube Flow Meter',
    category: 'Flow Measuring Equipments',
    description: 'A Venturi tube flow meter measures fluid flow by creating a smooth constriction in the pipeline and calculating flow from the pressure difference.',
    longDescription: 'A Venturi tube flow meter measures fluid flow by creating a smooth constriction in the pipeline and calculating flow from the pressure difference between inlet and throat. It offers high accuracy with low permanent pressure loss, making it suitable for large and critical flow applications. The smooth design resists fouling and buildup, providing long-term stability and high accuracy.',
    price: 'Custom Quote',
    image: '/venturi-tube-500x500.webp',
    images: ['/venturi-tube-500x500.webp'],
    specifications: {
      type: 'Venturi Differential Pressure Meter',
      application: 'Clean, dirty, and viscous fluids',
      principle: 'Bernoulli’s equation',
      accuracy: '±1%',
      pressureLoss: 'Low',
      rangeability: '4:1',
      construction: 'Converging, throat, diverging sections',
      pressureRecovery: 'High',
      fluidCompatibility: 'Liquids, gases, slurries'
    },
    features: [
      {
        title: "High Accuracy",
        description: "Provides precise flow measurement with stable output."
      },
      {
        title: "Low Loss",
        description: "Ensures minimal permanent pressure drop."
      },
      {
        title: "Energy Efficient",
        description: "Reduces pumping energy requirements."
      },
      {
        title: "Self Cleaning",
        description: "Smooth design resists fouling and buildup."
      },
      {
        title: "Versatile Use",
        description: "Suitable for a wide range of fluids and industries."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  // Gas Detectors
  {
    id: 'gd-101',
    name: 'Dräger Polytron Series',
    category: 'Gas Detectors',
    description: 'The Dräger Polytron series offers high-performance fixed gas detection for toxic gases, oxygen, and combustible gases.',
    longDescription: 'The Dräger Polytron series (5000, 8000) is a robust and flexible gas detector for continuous monitoring in hazardous environments. It features a high-visibility backlit display, 3-wire installation, and a modular design that supports both electrochemical and catalytic sensors. The system is designed for easy integration with existing plant control systems and provides reliable, accurate readings even in the toughest industrial conditions.',
    price: 'Custom Quote',
    image: '/fixed 1.jpeg',
    images: ['/fixed 1.jpeg', '/fixed 2.jpeg'],
    specifications: {
      type: 'Fixed Installation',
      sensorType: 'Electrochemical / Catalytic / Infrared',
      output: '4–20mA / RS485 Modbus',
      protection: 'IP66 / ATEX / IECEx Certified',
      gases: 'O2, CO, H2S, LEL, NH3, Cl2, CO2',
      display: 'OLED / LCD Local Display',
      power: '24V DC'
    },
    features: [
      {
        title: "Continuous Monitoring",
        description: "24/7 detection for maximum facility safety."
      },
      {
        title: "Explosion Proof",
        description: "Certified for use in Zone 1 and Zone 2 hazardous areas."
      },
      {
        title: "Smart Sensors",
        description: "Plug-and-play sensors for easy field maintenance."
      },
      {
        title: "Versatile Output",
        description: "Supports analog and digital industrial protocols."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  {
    id: 'gd-104',
    name: 'Honeywell Sensepoint XCD',
    category: 'Gas Detectors',
    description: 'The Sensepoint XCD provides comprehensive monitoring of combustible, toxic and Oxygen gas hazards in potentially explosive atmospheres.',
    longDescription: 'The Honeywell Sensepoint XCD provides high-performance gas detection in a rugged, explosion-proof housing. It features a unique tri-color backlit LCD that indicates its status at a glance, even from a distance. The XCD is designed for ease of installation and use, with a non-intrusive one-man operation that reduces maintenance costs. It supports a wide range of plug-in sensors and is suitable for both indoor and outdoor use in hazardous locations.',
    price: 'Custom Quote',
    image: '/fixed 2.jpeg',
    images: ['/fixed 2.jpeg', '/fixed 1.jpeg'],
    specifications: {
      type: 'Fixed Transmitter',
      housing: 'Epoxy-coated aluminum or 316 SS',
      display: 'Tri-color backlit LCD (Green, Yellow, Red)',
      output: '4-20mA, RS485 Modbus, 3 Relays',
      sensors: 'Plug-in Electrochemical, IR, and Catalytic Bead',
      protection: 'IP66 / NEMA 4X / ATEX / IECEx Certified',
      operatingTemp: '-40°C to +75°C'
    },
    features: [
      {
        title: "Tri-Color Display",
        description: "Instantly identify device status via green (normal), yellow (fault), or red (alarm) backlight."
      },
      {
        title: "Non-Intrusive Operation",
        description: "Magnetically-actuated interface allows for configuration without opening the enclosure."
      },
      {
        title: "Flexible Installation",
        description: "Common transmitter for all sensor types reduces parts inventory and training."
      },
      {
        title: "Robust Performance",
        description: "Certified for use in Zone 1 and Zone 2 hazardous areas with harsh environment protection."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  {
    id: 'gd-102',
    name: 'Honeywell BW Solo',
    category: 'Gas Detectors',
    description: 'The Honeywell BW Solo is a next-generation single-gas detector that helps you reduce cost, ensure compliance and know your workers are safe.',
    longDescription: 'The Honeywell BW Solo is a service-friendly single-gas detector with Bluetooth connectivity that provides real-time visibility into the status and safety of hazardous-area workers. It is the easiest single-gas detector to service, with no need to take it apart to replace sensors or batteries. Features include high-speed 1-Series sensors for reliability, high-visibility alarms, and the ability to manage the device from your smartphone.',
    price: 'Custom Quote',
    image: '/hand 1.jpeg',
    images: ['/hand 1.jpeg', '/hand 2.jpeg'],
    specifications: {
      type: 'Single-gas Portable Detector',
      sensors: '1-Series high-performance sensors',
      connectivity: 'Bluetooth Low Energy (BLE)',
      battery: 'Replaceable Lithium (up to 12 months)',
      display: 'High-resolution LCD',
      alarms: '95dB audible, visual (vibrant LEDs), vibration',
      protection: 'IP66/68 rating',
      gases: 'H2S, CO, O2, NH3, SO2, HCN, Cl2, NO, NO2, PH3, ETO, O3'
    },
    features: [
      {
        title: "Service Friendly",
        description: "Easiest single-gas detector to service with no-tools sensor/battery replacement."
      },
      {
        title: "Real-time Monitoring",
        description: "Bluetooth connectivity for remote monitoring via the Safety Suite Device Configurator app."
      },
      {
        title: "One-Button Operation",
        description: "Simple user interface for easy use even with heavy gloves."
      },
      {
        title: "High Precision",
        description: "Uses 1-Series sensors for fast response and long-term stability."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  {
    id: 'gd-103',
    name: 'Dräger Pac Series',
    category: 'Gas Detectors',
    description: 'The Dräger Pac series provides reliable personal gas detection for a variety of toxic gases and oxygen.',
    longDescription: 'The Dräger Pac series (6000, 6500, 8000) is designed for tough industrial conditions. These personal single-gas detection devices are reliable, precise, and easy to use. Equipped with powerful Dräger XXS sensors, they provide fast response times and clear warnings. The robust housing is chemical-resistant and meets IP68 requirements, ensuring durability in the most demanding environments.',
    price: 'Custom Quote',
    image: '/hand 2.jpeg',
    images: ['/hand 2.jpeg', '/hand 1.jpeg'],
    specifications: {
      type: 'Personal Single-gas Detector',
      sensorTechnology: 'Dräger XXS Sensors',
      durability: 'IP68 water and dust resistance',
      connectivity: 'Bluetooth integration (on select models)',
      indicators: 'D-Light for device status verification',
      alarms: '360° visual, audible, and vibration',
      dataLogger: 'Event and concentration logging',
      maintenance: 'Quick bump test and calibration'
    },
    features: [
      {
        title: "Robust Performance",
        description: "Shock-proof and chemical-resistant housing for extreme durability."
      },
      {
        title: "Clear Status",
        description: "D-Light indicator confirms the device is tested and ready for use."
      },
      {
        title: "User-Centric",
        description: "Large, language-free display clearly indicates gas concentration."
      },
      {
        title: "Fast Response",
        description: "Powerful sensors ensure the shortest possible response times."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  // Radar Level Sensor (merged into Level Transmitter)
  {
    id: 'rls-101',
    name: '80 GHz Radar Level Transmitter',
    category: 'Level Transmitter',
    description: 'A compact 80 GHz radar level transmitter designed for continuous, non-contact measurement of liquids and bulk solids.',
    longDescription: 'A compact 80 GHz radar level transmitter designed for continuous, non-contact measurement of liquids and bulk solids. It delivers accurate and stable readings independent of process conditions, making it suitable for water treatment, open channels, and general industrial applications. The device features robust construction for harsh environments and supports wireless configuration via Bluetooth and multiple communication protocols including HART, SDI-12, and Modbus.',
    price: 'Custom Quote',
    image: '/80hz radar level.png',
    specifications: {
      measurementPrinciple: 'Radar (80 GHz)',
      range: 'Up to 15 m',
      output: '4–20 mA / HART',
      operatingTemperature: '-40 to +80 °C',
      pressureRange: '-1 to +3 bar',
      ingressProtection: 'IP66/IP68',
      material: 'PVDF',
      communication: 'HART, SDI-12, Modbus'
    },
    features: [
      {
        title: "High Accuracy",
        description: "Ensures precise level measurement independent of process conditions."
      },
      {
        title: "Non Contact",
        description: "Eliminates wear and enables maintenance-free operation."
      },
      {
        title: "Rugged Build",
        description: "Designed for reliable use in harsh industrial environments."
      },
      {
        title: "Wireless Setup",
        description: "Bluetooth connectivity allows easy configuration and monitoring."
      },
      {
        title: "Flexible Integration",
        description: "Supports multiple industrial communication protocols."
      },
      {
        title: "Low Maintenance",
        description: "Stable performance reduces calibration and servicing needs."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
  {
    id: 'rls-102',
    name: 'NivoRadar NR 7100',
    category: 'Level Transmitter',
    description: 'The NivoRadar NR 7100 is a non-contact 80 GHz FMCW radar level transmitter designed for continuous level measurement in liquids and solids.',
    longDescription: 'The NivoRadar NR 7100 is a high-precision, non-contact 80 GHz FMCW radar level transmitter designed for continuous measurement in both liquids and solids. With its narrow 8° beam angle, it ensures reliable and accurate performance even in narrow tanks, silos, and IBC containers. The device is particularly effective in aggressive or viscous media and is compatible with food industry requirements, offering a robust and low-maintenance solution for challenging industrial environments.',
    price: 'Custom Quote',
    image: '/nr7100.jpg',
    specifications: {
      type: 'Non-contact Radar Level Transmitter',
      application: 'Silos, tanks, IBC containers',
      frequency: '80 GHz FMCW',
      range: 'Up to 10 m',
      beamAngle: '8° narrow beam',
      media: 'Liquids and solids',
      measurementPrinciple: 'FMCW Radar',
      processConnection: '1½ inch (PVDF)',
      applicationMedia: 'Acids, alkalis, solvents, viscous liquids',
      compliance: 'Food industry compatible'
    },
    features: [
      {
        title: "High Precision",
        description: "Provides accurate level measurement independent of medium properties."
      },
      {
        title: "Narrow Beam",
        description: "8° beam ensures reliable measurement in confined spaces."
      },
      {
        title: "Robust Design",
        description: "Durable construction suitable for harsh industrial environments."
      },
      {
        title: "Low Maintenance",
        description: "Non-contact design eliminates wear and reduces servicing."
      },
      {
        title: "Easy Setup",
        description: "User-friendly configuration and diagnostics via mobile app."
      }
    ],
    documents: {
      technical_datasheet: "/profile.pdf"
    }
  },
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
