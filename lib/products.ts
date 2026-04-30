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
    name: 'Magnetic Flow Meters',
    category: 'Transmitters',
    description: 'Flexible configurations for industrial use providing accurate measurement of conductive liquids in most process areas.',
    longDescription: 'Flow meters provide accurate measurement of mass flow, density, volumetric flow rate and temperature for gases, pastes, liquids with low viscosity and applications where users are unwilling/unable to cut into the process measurement line to install an in-line meter. Max experience with magnetic flowmeters spans decades. Our magnetic flow meters provide flexible configurations for industrial use in most areas.',
    price: 'Custom Quote',
    image: '/transmit_4.jpg',
    specifications: {
      type: 'Electromagnetic / Magnetic',
      output: '4-20mA / Pulse / HART',
      lining: 'PTFE, Rubber, PFA',
      protection: 'IP67 / IP68'
    }
  },
  {
    id: 'tr-105',
    name: 'Vortex Flow Meter',
    category: 'Transmitters',
    description: 'High performance and reliability in liquid, gas and steam measurements with advanced DSP and filtering techniques.',
    longDescription: 'The robust design of Max vortex flowmeters provides high performance and reliability in liquid, gas and steam measurements. Equipped with digital signal processing (DSP) and advanced filtering techniques, these innovative flowmeters from ABB allow excellent flow signal detection and provide measurement immunity from the effects of hydraulic noise and pipeline vibration.',
    price: 'Custom Quote',
    image: '/transmit_5.jpg',
    specifications: {
      media: 'Liquid, Gas, Steam',
      technology: 'Vortex Shedding + DSP',
      output: '4-20mA HART / Pulse',
      protection: 'IP67, ATEX / IECEx'
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
  // Variable Wires & Cables
  {
    id: 'wc-101',
    name: 'Power cables',
    category: 'Variable Wires & Cables',
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
    category: 'Variable Wires & Cables',
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
    category: 'Variable Wires & Cables',
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
    category: 'Variable Wires & Cables',
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
    category: 'Variable Wires & Cables',
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
    category: 'Variable Wires & Cables',
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
    category: 'Variable Wires & Cables',
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
    category: 'Variable Wires & Cables',
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
    image: '/mois_1.jpg',
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
    image: '/zirconia-oxygen-analyzer-for-stack-gas-emission-control-systems-500x500.webp',
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
  // Gas Analyzer
  {
    id: 'gz-101',
    name: 'SOx and NOx Analyzers',
    category: 'Gas Analyzer',
    description: 'Continuously monitor sulfur oxides and nitrogen oxides in industrial emissions, combustion processes, and environmental systems for regulatory compliance and pollution control.',
    longDescription: 'SOx and NOx analyzers continuously monitor sulfur oxides and nitrogen oxides in industrial emissions, combustion processes, and environmental systems. They support regulatory compliance, process optimization, and pollution control.\n\nUsing UV, NDIR, and chemiluminescence technology, these analyzers measure SO₂, SO₃, NO, and NO₂ at ppm to percent levels with ±1% accuracy and response times under 60 seconds. Designed for harsh plant conditions, they provide real-time emission data to enhance combustion efficiency and ensure environmental compliance.',
    price: 'Custom Quote',
    image: '/sox-nox-analyzer.jpg',
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
  // Ultrasonic Transmitter
  {
    id: 'ut-101',
    name: 'Ultrasonic Level Transmitter',
    category: 'Ultrasonic Transmitter',
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
  // Radar Level Sensor
  {
    id: 'rls-101',
    name: 'VEGAPULS C 21',
    category: 'Radar Level Sensor',
    description: 'Compact 80 GHz radar sensor for continuous, non-contact level measurement of liquids and bulk solids.',
    longDescription: 'VEGAPULS C 21 is a compact 80 GHz radar sensor for continuous, non-contact level measurement of liquids and bulk solids. It provides high accuracy independent of process conditions and is ideal for water treatment, open channels, and general industrial applications. The device ensures maintenance-free operation with robust protection for harsh environments. Bluetooth connectivity enables easy setup and monitoring via mobile devices. Supports multiple communication protocols including HART, SDI-12, and Modbus.',
    price: 'Custom Quote',
    image: '/vegac21.png',
    specifications: {
      technology: '80 GHz Radar',
      range: 'Up to 15 m',
      output: '4–20 mA / HART',
      temperature: '-40 to +80 °C',
      pressure: '-1 to +3 bar',
      protection: 'IP66/IP68',
      material: 'PVDF',
      communication: 'HART, SDI-12, Modbus'
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
