import { 
  Wrench, 
  Shield, 
  Cog, 
  ClipboardCheck, 
  Activity, 
  Search, 
  Palmtree, 
  Package, 
  FileSearch, 
  Ship, 
  Truck, 
  Anchor, 
  Warehouse, 
  Apple,
  LucideIcon
} from 'lucide-react';

// Image imports
import reeferRepairsImg from '@/assets/services/reefer-repairs.jpg';
import warrantyRepairsImg from '@/assets/services/warranty-repairs.jpg';
import sparePartsImg from '@/assets/services/spare-parts.jpg';
import ptiInspectionImg from '@/assets/services/pti-inspection.jpg';
import reeferMonitoringImg from '@/assets/services/reefer-monitoring.jpg';
import reeferSurveysImg from '@/assets/services/reefer-surveys.jpg';
import maldivesServicesImg from '@/assets/services/maldives-services.jpg';
import reeferRentingImg from '@/assets/services/reefer-renting.jpg';
import cargoSurveysImg from '@/assets/services/cargo-surveys.jpg';
import vesselSurveysImg from '@/assets/services/vessel-surveys.jpg';
import cargoLogisticsImg from '@/assets/services/cargo-logistics.jpg';
import vesselLogisticsImg from '@/assets/services/vessel-logistics.jpg';
import bondedWarehouseImg from '@/assets/services/bonded-warehouse.jpg';
import fruitsVegetablesImg from '@/assets/services/fruits-vegetables-exports.jpg';

export interface ContentSection {
  title: string;
  content: string[];
  bulletPoints?: string[];
  image?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  category: 'reefer' | 'survey' | 'logistics';
  path: string;
  image: string;
  features: string[];
  benefits: string[];
  relatedServices: string[];
  contentSections?: ContentSection[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'reefer-repairs',
    title: 'Reefer Container Repairs & Maintenance',
    shortTitle: 'Repairs & Maintenance',
    description: 'Comprehensive repair and maintenance services for all types of reefer containers.',
    longDescription: 'Our expert technicians provide comprehensive repair and maintenance services for all types of refrigerated containers. From routine maintenance to complex repairs, we ensure your reefer units operate at peak efficiency, minimizing downtime and protecting your valuable cargo.',
    icon: Wrench,
    category: 'reefer',
    path: '/services/reefer-repairs',
    image: reeferRepairsImg,
    features: [
      'Complete mechanical repairs',
      'Electrical system diagnostics',
      'Refrigeration unit servicing',
      'Emergency breakdown support',
      '24/7 availability',
      'OEM parts and components'
    ],
    benefits: [
      'Minimize container downtime',
      'Extend equipment lifespan',
      'Reduce operational costs',
      'Ensure cargo safety'
    ],
    relatedServices: ['warranty-repairs', 'spare-parts', 'pti'],
    contentSections: [
      {
        title: 'Reefer Container Repairs & Maintenance',
        content: [
          'Reefer containers can be damaged or malfunction due to various reasons. If a reefer container\'s cooling equipment is not working correctly, temperatures inside the container will fluctuate. This can cause frozen & perishable items to rotten or unfit for human consumption.',
          'In reefer repairs, it\'s highly important to correctly identify the exact cause of the malfunctioning reefer, within the shortest possible time. Thanks to the advanced technologies & the expertise of our factory-trained technicians, allow MSTS to offer the most reliable & fastest reefer repair solutions in Sri Lanka, minimizing the turnaround time.',
          'Timely attending to repairs & maintenance of your reefer containers will ensure that your reefers work optimally, for as long as possible. Don\'t wait until your reefer containers are desperate for a face-life. Instead, perform regular checks and repairs from MSTS, the best Authorized Service Agent for reefer container repairs & maintenance in Sri Lanka.'
        ]
      },
      {
        title: 'Reefer Container Repairs',
        content: [
          'You need to repair your reefer container machinery if you notice any malfunction, or if an alarm or warning light signals an issue with the cooling system. It\'s best to sort out any issues as soon as they occur, to prevent temperature fluctuations whilst transporting sensitive items.',
          'When it comes to reefer container repairs in Sri Lanka, MSTS reefer container repair experts handle any scale of reefer container machinery repairs of all four major reefer manufacturers in the world, using the expertise of our factory-trained technicians & manufacturers\' genuine spare parts within the shortest possible time.',
          'Our well-experienced & factory-trained reefer container repair experts will investigate the cause of the problem and then carry out the repair work quickly and professionally. We offer support 24/7, so feel free to reach out anytime.'
        ]
      },
      {
        title: 'Reefer Container Maintenance: Why it is Necessary?',
        content: [
          'Regular maintenance of reefer containers is important in order to prevent failures in the cooling system. Keeping refrigerated containers in good condition will allow them to perform optimally. Unwanted temperature fluctuations due to issues with the reefer machine can cause temperature-sensitive items to thaw, rot or spoil.',
          'This can be avoided with timely & regular maintenance of your reefer containers by an authorized service agent.',
          'Regular reefer maintenance guarantees the optimum performance of the containers, and the machinery inside, and ensures their extended serviceable life.'
        ]
      },
      {
        title: 'Why Should You Trust MSTS for Reefer Container Repairs & Maintenance?',
        content: [
          'MSTS is an authorized service agent for reefer container repairs & maintenance in Sri Lanka for Carrier Transicold, Star Cool, ThermoKing & Daikin.',
          'We have a pool of well-experienced & factory-trained technicians. By educating and qualifying our refrigeration technicians from the world\'s largest reefer manufacturers, MSTS ensures that our services are available to you with the best quality on par with global standards.',
          'MSTS customer care service is available around the clock. Our company-owned vehicle fleet enables us attending any issue quickly with necessary tools, spare parts & competent repair teams.',
          'We offer spare parts for refrigerated containers at duty-free prices. We are an authorized spare parts dealer for all major reefer brands in the world, such as Carrier Transicold, Star Cool, ThermoKing & Daikin.'
        ]
      }
    ]
  },
  {
    id: 'warranty-repairs',
    title: 'Reefer Container Warranty Repairs',
    shortTitle: 'Warranty Repairs',
    description: 'Authorized warranty repair services for major reefer container manufacturers.',
    longDescription: 'As authorized agents for leading reefer container manufacturers, we provide certified warranty repair services. Our technicians are factory-trained and use genuine OEM parts to ensure your warranty remains valid while getting your equipment back to optimal condition.',
    icon: Shield,
    category: 'reefer',
    path: '/services/warranty-repairs',
    image: warrantyRepairsImg,
    features: [
      'Factory-authorized repairs',
      'Certified technicians',
      'Genuine OEM parts',
      'Warranty documentation',
      'Direct manufacturer liaison',
      'Quality assurance certification'
    ],
    benefits: [
      'Maintain warranty validity',
      'Certified quality repairs',
      'Manufacturer compliance',
      'Peace of mind'
    ],
    relatedServices: ['reefer-repairs', 'spare-parts', 'reefer-surveys'],
    contentSections: [
      {
        title: 'Reefer Container Warranty Repairs',
        content: [
          'Marine Survey & Technology Services (Pvt) Ltd., is one of the best-authorized reefer container service agents in Sri Lanka to service Reefer containers that require repairs whilst still under warranty. These reefer container warranty repairs are handled by well-experienced & factory-trained technicians only.',
          'We offer the best reefer container warranty repairs in Sri Lanka, to all major reefer makes & models such as Carrier Transicold, Star Cool, ThermoKing & Daikin. MSTS is entrusted by some of the world\'s largest shipping lines to conduct reefer container warranty repairs in Sri Lanka, because of the quality of work our technicians take when servicing & repairing reefer containers.',
          'All our reefer container warranty repairs are completed according to the guidelines set in the manufacturers\' manual or bulletin. Therefore get your reefer container warranty repairs done by MSTS, the best-authorized service agent for reefer container warranty repairs in Sri Lanka.'
        ],
        image: warrantyRepairsImg
      },
      {
        title: 'On Call Response Team - 24 Hours & 7 Days',
        content: [
          'MSTS understands that every second is crucial for our customers and their cargo, which is why we are available 24 hours a day & 7 days a week.',
          'Our technicians are on a rotating roster and are on call to assist our customers and their reefer container warranty repair requirements. We have our technicians available on a 24/7 basis in all departments to take your call. Our technicians are able to come onboard/terminals and repair your containers within the shortest possible time, to avoid any further damage to your cargo.',
          'Our technicians are the best in the business and are qualified to handle all different types of reefer containers. You can be at ease knowing regardless of what reefer breaks down, MSTS will be able to get it back up and running in no time! It\'s another reason why our customers entrust us with their reefer container warranty repairs.'
        ],
        image: reeferRepairsImg
      }
    ]
  },
  {
    id: 'spare-parts',
    title: 'Supply of Reefer Container Spare Parts',
    shortTitle: 'Spare Parts Supply',
    description: 'Extensive inventory of genuine spare parts for all major reefer container brands.',
    longDescription: 'We maintain a comprehensive inventory of genuine spare parts for all major reefer container brands including Carrier, Daikin, Thermo King, and StarCool. Our extensive stock ensures quick turnaround times and minimal downtime for your refrigerated containers.',
    icon: Cog,
    category: 'reefer',
    path: '/services/spare-parts',
    image: sparePartsImg,
    features: [
      'Genuine OEM parts',
      'Multi-brand inventory',
      'Quick delivery service',
      'Competitive pricing',
      'Technical support',
      'Parts warranty'
    ],
    benefits: [
      'Reduce repair delays',
      'Ensure equipment reliability',
      'Cost-effective solutions',
      'Wide brand coverage'
    ],
    relatedServices: ['reefer-repairs', 'warranty-repairs', 'pti'],
    contentSections: [
      {
        title: 'Reefer Container Spare Parts',
        content: [
          'Supply of reefer container spare parts for ships calling Sri Lankan ports and Maldives is one of the main operations at MSTS. Being an authorized spare parts agent for world\'s leading reefer manufacturers\' namely Carrier Transicold, Star Cool, Thermo King and Daikin, we supply an extensive range of genuine reefer container spare parts at duty-free prices directly from our customs bonded warehouse to the ship.',
          'Having the largest reefer spare parts hub in Colombo, we are able to cater to any scale of reefer spare parts requirement of any reefer make & model. We always consistently maintain an extremely high inventory level in order to ensure that we are able to achieve an average high filled rate for any reefer spare parts order received. Also, we assure you that we are able to be mobilized within a short notice of time, on a non-stop 24 hours basis.',
          'With MSTS you can be sure that you will get the right spare part for your refrigerated container every time. Critical reefer container spare parts are stored at our customs bonded warehouse and are ready for installation. We can reduce your container downtime with fast parts delivery. We keep sufficient stocks of important reefer parts including compressors, evaporators/condenser coils, fan motors, humidity sensors, temperature sensors, controllers, and many more.'
        ],
        image: sparePartsImg
      },
      {
        title: 'Supply of Ship Kits, Gensets, Refrigerants & Tools',
        content: [
          'Besides the supply of reefer machinery spare parts, MSTS provides your fleet with spare part ship kits, refrigerant gases such as R-134a to R-404a, refrigerant gauges, reefer Gensets, diesel generator spare parts & necessary tools covering all the key manufacturers.',
          'In order to provide a complete service to customers, MSTS also stocks a large selection of consumable items including power cables, reefer plugs, receptacles, compressor oil, and more! We are Sri Lanka\'s #1 reefer parts supplier offering quick delivery, competitive pricing & guidance to help select the right spare parts.',
          'As the #1 reefer parts supplier in Sri Lanka, our stock levels allow us to deliver parts anywhere, anytime, including your vessels. Whether you need 1 part or a full kit, we are able to help ensure your cargo is safe whilst out at sea.'
        ],
        image: bondedWarehouseImg
      },
      {
        title: 'Are You Looking for Genuine Reefer Container Spare Parts?',
        content: [
          'We\'re just a phone call away!',
          'Timely attending to repairs & maintenance of your reefer containers using genuine spare parts from the manufacturers will ensure that your reefers work optimally, for as long as possible. Don\'t use duplicate parts & get into desperate situations. Instead, order your reefer container spare parts requirement from MSTS, the best authorized reefer container spare parts dealer for genuine reefer container spare parts in Sri Lanka.',
          'At MSTS, we have in stock original brand-new reefer container spare parts as well as manufacturer-re-built spares. We offer quick & professional customer care support 24/7, so feel free to reach out anytime. You can buy genuine reefer container spare parts for any reefer container by calling our service manager.'
        ],
        image: reeferRepairsImg
      }
    ]
  },
  {
    id: 'pti',
    title: 'Pre Trip Inspections (PTI)',
    shortTitle: 'Pre Trip Inspections',
    description: 'Thorough pre-trip inspections to ensure reefer containers are cargo-ready.',
    longDescription: 'Our comprehensive Pre-Trip Inspection (PTI) service ensures your reefer containers are fully operational and cargo-ready before each shipment. We follow international standards and provide detailed inspection reports, giving you confidence that your cargo will be transported safely.',
    icon: ClipboardCheck,
    category: 'reefer',
    path: '/services/pti',
    image: ptiInspectionImg,
    features: [
      'Complete system check',
      'Temperature verification',
      'Electrical testing',
      'Structural inspection',
      'Detailed documentation',
      'Compliance certification'
    ],
    benefits: [
      'Prevent cargo damage',
      'Ensure regulatory compliance',
      'Reduce claim risks',
      'Peace of mind shipping'
    ],
    relatedServices: ['reefer-repairs', 'monitoring', 'reefer-surveys'],
    contentSections: [
      {
        title: 'Pre-Trip Inspections (PTI) Services',
        content: [
          'Once on a ship, reefer containers must perform flawlessly to ensure that the cargo reaches its destination without deterioration in quality that could arise from malfunctioning in the reefer unit. Pre-Trip Inspections (PTI) on reefer containers are a mandatory procedure undertaken to ensure that all parameters are working well before the container is handed over to the shipper for loading the cargo.',
          'A pre-trip inspection is conducted on an empty reefer container to ensure the correct functioning of the cooling unit, temperature control, and recording devices. PTI is a detailed inspection of the container done by our reefer technicians to ensure that the container is clean and that the system is in perfect working condition, and doesn\'t need any repair work done before shipping goods.'
        ],
        image: ptiInspectionImg
      },
      {
        title: 'Pre-trip inspection of a reefer container includes:',
        content: [
          'Our comprehensive PTI process covers all critical aspects of reefer container functionality to ensure cargo safety and optimal performance during transit.'
        ],
        bulletPoints: [
          'Checking for Cleaning (dirt and odor removal)',
          'Inspection of container interior (to make sure it meets customer requirement criteria)',
          'Checking of all machinery such as cooling equipment',
          'Checking door seals and locks are in a good condition',
          'After the inspection, the time and date is documented and attached to the container\'s label'
        ],
        image: reeferRepairsImg
      },
      {
        title: 'The Best Pre-Trip Inspections (PTI) Services in Sri Lanka',
        content: [
          'MSTS offers the best Pre-Trip Inspections Services in Sri Lanka, for the worlds leading shipping lines. MSTS prides itself on the quality of inspections and being able to detect any possible issues which may arise whilst in transit. MSTS carries out PTIs according to the strict guidelines provided by the world\'s largest shipping lines.',
          'Our comprehensive PTI service includes a detailed inspection of bolts, compressor mountings, connectors, hoses, cable condition, insulation, and more. Further, it includes checking the container for structural damage, and ensuring that the inside of the container is clean and ready to receive cargo.',
          'During our Pre-Trip Inspection, the temperature, humidity, and ventilation will also be set according to the customer\'s specifications.'
        ],
        image: reeferMonitoringImg
      }
    ]
  },
  {
    id: 'monitoring',
    title: 'Reefer Container Monitoring',
    shortTitle: 'Container Monitoring',
    description: 'Real-time monitoring solutions for temperature-sensitive cargo.',
    longDescription: 'Our advanced reefer container monitoring service provides real-time visibility into your refrigerated cargo throughout its journey. With IoT sensors and cloud-based tracking, you can monitor temperature, humidity, and location 24/7, receiving instant alerts for any deviations.',
    icon: Activity,
    category: 'reefer',
    path: '/services/monitoring',
    image: reeferMonitoringImg,
    features: [
      'Real-time temperature tracking',
      'GPS location monitoring',
      'Automated alerts',
      'Cloud-based dashboard',
      'Historical data logging',
      'Mobile app access'
    ],
    benefits: [
      'Proactive issue detection',
      'Cargo safety assurance',
      'Complete supply chain visibility',
      'Reduced insurance premiums'
    ],
    relatedServices: ['pti', 'reefer-surveys', 'cargo-logistics'],
    contentSections: [
      {
        title: 'Reefer Container Monitoring',
        content: [
          'Proper monitoring and handling of reefer containers, is vital to maintain the quality of perishable goods during their whole journey. Reefer containers are embedded with an array of sensors connected to the reefer controller units, which grant access to all necessary control settings to ensure both the reefer container and its perishable cargo can be monitored and managed.',
          'The MSTS reefer monitoring crew physically checks the reefer controller units multiple times during the day & night to ensure reefers are working properly and take corrective action if needed. MSTS offers one of the best reefer monitoring services in Sri Lanka, being the sole reefer monitoring service provider at Colombo International Container Terminal (CICT), in the Port of Colombo.',
          'Reefer container monitoring services at MSTS allow the terminal operators to minimize the temperature-related spoilage due to unpredictable occurrences of reefer unit breakdowns. Reaction time is important in refrigerated shipping. Our reefer monitoring service allows fast response times in case of any reefer technical challenges such as small temperature changes etc.'
        ],
        image: reeferMonitoringImg
      }
    ]
  },
  {
    id: 'reefer-surveys',
    title: 'Reefer Container Surveys',
    shortTitle: 'Reefer Surveys',
    description: 'Professional survey services for reefer container condition assessment.',
    longDescription: 'Our certified surveyors conduct thorough assessments of reefer container conditions for insurance, damage claims, and quality verification purposes. We provide detailed reports with photographic evidence and expert recommendations.',
    icon: Search,
    category: 'survey',
    path: '/services/reefer-surveys',
    image: reeferSurveysImg,
    features: [
      'Condition assessment',
      'Damage documentation',
      'Insurance surveys',
      'Pre-purchase inspections',
      'Photographic evidence',
      'Expert recommendations'
    ],
    benefits: [
      'Accurate condition reports',
      'Support insurance claims',
      'Informed purchase decisions',
      'Independent verification'
    ],
    relatedServices: ['cargo-surveys', 'vessel-surveys', 'pti'],
    contentSections: [
      {
        title: 'Reefer Container Surveys',
        content: [
          'MSTS offers you the best reefer container survey services in Sri Lanka complying with international standards & world best industry practices. To carry out our reefer container survey services, we deploy only the best surveyors in the country who are professionally qualified & appointed by the Ceylon Chamber of Commerce.',
          'MSTS is the only authorized container survey service provider in Sri Lanka, for Super Freezer Stuffing / Container Blast Freezer Operations (-60° C / -40° C).',
          'We follow the internationally accepted reporting formats for all our reefer container survey reports.'
        ],
        image: reeferSurveysImg
      }
    ]
  },
  {
    id: 'maldives',
    title: 'Reefer Container Services for Maldives Resorts',
    shortTitle: 'Maldives Resort Services',
    description: 'Specialized reefer services tailored for Maldives resort operations.',
    longDescription: 'We provide specialized refrigerated container solutions designed specifically for the unique requirements of Maldives resort operations. From fresh food storage to pharmaceutical preservation, our services ensure your resort maintains the highest standards of quality for guests.',
    icon: Palmtree,
    category: 'reefer',
    path: '/services/maldives',
    image: maldivesServicesImg,
    features: [
      'Island delivery logistics',
      'On-site installation',
      'Maintenance contracts',
      'Emergency support',
      'Custom temperature solutions',
      'Fresh food preservation'
    ],
    benefits: [
      'Guest satisfaction',
      'Food safety compliance',
      'Reliable cold storage',
      'Tropical expertise'
    ],
    relatedServices: ['reefer-renting', 'reefer-repairs', 'monitoring'],
    contentSections: [
      {
        title: 'Reefer Container Services for Maldive\'s Resorts',
        content: [
          'As one of the leading end-to-end reefer container service providers in Sri Lanka, we have expanded our reefer container services portfolio to cater to the evolving needs of the Maldives market. We bring forth our experience of over three decades in the reefer container services industry backed by Ceyline Group, the most diversified shipping group in Sri Lanka.',
          'Our solutions include Reefer Container Repairs & Maintenance services for resorts & hotels in the Maldives, Reefer Container Warranty Repairs, Supply Of Reefer Container Spare Parts, Pre Trip Inspections (PTI) Services in the Maldives, Reefer Container Monitoring solutions for terminals at ports in the Maldives, Reefer Container Survey services, Reefer Container Renting Services in Maldives, Container & Cargo Surveys, Vessel Surveys, Cargo Related Operations, and Vessel Related Operations in the Maldives.',
          'Further, we also offer power-saving solutions for running reefers by introducing manufacturer-recommended software solutions with continual software upgrade support.'
        ],
        image: maldivesServicesImg
      },
      {
        title: 'Looking for a reliable reefer container service partner in the Maldives?',
        content: [
          'Call MSTS today…',
          'We offer the best reefer container services for leading resorts & hotel chains, frozen & perishable importers, and port terminal operators in the Maldives. MSTS is an authorized service agent and spare parts re-seller for the world\'s renowned reefer brands such as Carrier Transicold, Star Cool, Thermo King & Daikin.'
        ],
        image: reeferRepairsImg
      }
    ]
  },
  {
    id: 'reefer-renting',
    title: 'Reefer Container Renting Services',
    shortTitle: 'Container Renting',
    description: 'Flexible rental options for refrigerated containers of all sizes.',
    longDescription: 'Our comprehensive reefer container rental service offers flexible short-term and long-term leasing options. With a diverse fleet of well-maintained units in various sizes and configurations, we can meet your temporary cold storage needs efficiently.',
    icon: Package,
    category: 'reefer',
    path: '/services/reefer-renting',
    image: reeferRentingImg,
    features: [
      'Short-term rentals',
      'Long-term leasing',
      'Various sizes available',
      'Delivery and pickup',
      'Power solutions',
      'Maintenance included'
    ],
    benefits: [
      'Flexible commitments',
      'No capital investment',
      'Scalable capacity',
      'Fully maintained units'
    ],
    relatedServices: ['maldives', 'reefer-repairs', 'monitoring'],
    contentSections: [
      {
        title: 'Reefer Container Renting Services',
        content: [
          'MSTS offers the best reefer container renting services in Sri Lanka, backed by our integrated Depot & Container Repair Facility. At any given time, our current reefer container fleet consists of sufficient stock levels of 20ft & 40ft new reefer containers, enabling us to rent out these containers for domestic and commercial use on a short and long-term basis.',
          'Our reefer container rental fleet consists only of new or used units that are in good condition and continuously tested for a hassle-free rental experience. All models are ISO standard containers which are also suitable for international transportation. The reefer machine operates with 32 A 3-phase 5-pin or maritime plug, based on your preference.',
          'All our reefer containers are carefully checked before and after we rent them, Pre-Trip inspected (PTI) & safe for transportation. This guarantees that your reefer container complies with all international requirements.',
          'MSTS has reefer containers for rent, which temperatures ranging from -40°C to +30°C. -40°C units can also be used as blast freezers of which the cargo at room temperature, core can be reduced to -40°C within 4 to 6 hours.'
        ],
        image: reeferRentingImg
      },
      {
        title: 'Get the Best Mobile Cool Storage Facilities for Rent in Sri Lanka',
        content: [
          'MSTS offers a wide range of mobile cool storage facilities for rent in Sri Lanka which include refrigerated container rental services, portable reefer container rental services, and refrigerated-reefer container hiring services. Using Reefer Container Rental Service of MSTS can ensure the cooling effect, help preserve the interests with the best condition, and maintain all the quality although being stored for a long time.',
          'Advantages of renting out a reefer container from MSTS include short delivery times; proactive support team; rental periods from short term to longer terms; excellent quality; competitive rental pricing; & over 30 years of experience in reefer container renting services in Sri Lanka. Whilst containers are on rent, we offer an excellent 24/7 after-sales service backed by a mobile repair team. We also offer a real-time temperature monitoring mobile app for customers needy basis.',
          'When you temporarily and quickly need a reefer container, you can rent out it from MSTS, the best reefer container rental service in Sri Lanka.'
        ],
        image: bondedWarehouseImg
      },
      {
        title: 'Reefer Plug-in Services in Sri Lanka',
        content: [
          'In order to keep providing you with our end-to-end integrated reefer services, MSTS offers you the best rates for Reefer Plug-in Services in Sri Lanka. Reefer containers require a certain degree of infrastructural facilities at the depot, hence we have arranged the main requirement, reefer container plugging. We have allocated the needed space for plugging facilities where it allows the customers to plug their container for anytime required.',
          'If you are into frozen & perishable items Import / Export industry, MSTS is the right partner for your reefer container Plug-in Service requirements in Sri Lanka. Gensets are used to power the reefer container when normal power is not available, usually used for chilled or sensitive cargo travelling long distances. For temperature sensitive, high-value cargoes, MSTS also provides skilled technicians to accompany reefers while in transit, on needy basis.',
          'Our reefer container plug-in services include container renting, electricity, ground and temperature monitoring, etc. This helps importers & exporters to focus on their co-business with peace of mind.'
        ],
        image: reeferMonitoringImg
      }
    ]
  },
  {
    id: 'cargo-surveys',
    title: 'Container & Cargo Surveys',
    shortTitle: 'Cargo Surveys',
    description: 'Independent cargo and container surveys for quality and damage assessment.',
    longDescription: 'Our professional surveyors conduct independent cargo and container surveys to assess condition, verify quality, and document any damage. We serve shipping lines, insurers, and cargo owners with impartial, detailed reports.',
    icon: FileSearch,
    category: 'survey',
    path: '/services/cargo-surveys',
    image: cargoSurveysImg,
    features: [
      'Cargo condition surveys',
      'Container inspections',
      'Damage assessment',
      'Stock verification',
      'Quality audits',
      'Tally services'
    ],
    benefits: [
      'Independent assessment',
      'Claims support',
      'Risk mitigation',
      'Quality assurance'
    ],
    relatedServices: ['vessel-surveys', 'reefer-surveys', 'cargo-logistics'],
    contentSections: [
      {
        title: 'Bulk Cargo Condition / Tally Surveys',
        content: [
          'MSTS offers the best bulk cargo condition surveys, break bulk cargo condition surveys & tally surveys in Sri Lanka. Packaged but non-containerized cargo, loose cement, grains, ores, etc., are termed bulk cargo, whereas cargo shipped as a unit such as bags, bales, barrels, boxes, cartons, drums, pallets, sacks, vehicles, etc. is termed break bulk.',
          'Our break bulk survey services cover the following areas.'
        ],
        bulletPoints: [
          'Inspection of cargo condition and tally of goods pre-shipment and pre-discharge',
          'Hold inspection for cargo suitability and water tightness before loading',
          'Inspection of cargo stowage and lashing after loading and before discharge',
          'Damage goods investigation to determine the extent and cause of damage'
        ],
        image: cargoSurveysImg
      }
    ]
  },
  {
    id: 'vessel-surveys',
    title: 'Vessel Surveys',
    shortTitle: 'Vessel Surveys',
    description: 'Comprehensive marine vessel surveys for seaworthiness and compliance.',
    longDescription: 'Our marine surveyors conduct comprehensive vessel surveys covering hull condition, machinery, safety equipment, and cargo handling systems. We provide surveys for insurance, pre-purchase, and regulatory compliance purposes.',
    icon: Ship,
    category: 'survey',
    path: '/services/vessel-surveys',
    image: vesselSurveysImg,
    features: [
      'Hull condition surveys',
      'Machinery inspection',
      'Safety equipment audit',
      'Pre-purchase surveys',
      'Insurance surveys',
      'Draft surveys'
    ],
    benefits: [
      'Seaworthiness verification',
      'Compliance assurance',
      'Informed decisions',
      'Risk assessment'
    ],
    relatedServices: ['cargo-surveys', 'vessel-logistics', 'reefer-surveys'],
    contentSections: [
      {
        title: 'Vessel Surveys',
        content: [
          'We provide state-of-the-art vessel survey services and prompt marine survey reports, enabling commercial and business decisions to be made quickly and helping our clients save money & time. Our well-experienced & professionally qualified panels of Marine Surveyors are certified by the Ceylon Chamber of Commerce and some of them are accredited by the International Institute of Marine Surveyors, London, U.K.',
          'MSTS provides a comprehensive range of vessel survey services in Sri Lanka, including, On / Off Hire, General Condition Survey services, Draught Initial & Final Survey services, Bunker Survey services & Bulk Cargo Condition / Tally Survey services.',
          'All types of Marine Surveys are carried out by MSTS on behalf of P&I Clubs, Shipping Lines, Shippers & Consignees. MSTS represents the following Maritime Authorities and Organizations in Sri Lanka with regard to vessel survey services in Sri Lanka.'
        ],
        bulletPoints: [
          'Safety Inspectors for Antigua & Barbuda W.I. Registry',
          'Intracon Worldwide Ltd., for container On/Off Hire, In-Service Surveys',
          'International Commodity Control Services,(ICCS) Hamburg for Cargo Surveys',
          'International Maritime Centre S.A – Athens for IBS Class & IBS Panama'
        ],
        image: vesselSurveysImg
      },
      {
        title: 'On / Off Hire, General Condition Surveys',
        content: [
          'We offer our On/Off Hire Survey services when our customers are in need of an independent survey carried out on their behalf, as it is important for concerned parties when hiring/off-hiring a vessel to limit their liability. This service ensures that concerned parties have the correct information on the condition of the vessel and the work required in respect of the Charter Party.',
          'Our experienced marine surveyors at MSTS, together with our wide-trusted industry partners network are ready to represent you and protect your interests at any time.'
        ],
        image: vesselLogisticsImg
      },
      {
        title: 'Draught Initial & Final Survey',
        content: [
          'Draught Initial & Final Survey services of MSTS are offered to our customers to provide assistance in measuring the quantity of cargo on the vessel. Our experienced marine surveyors conduct this service before commencing and after the completion of loading or discharge operations.'
        ],
        image: cargoSurveysImg
      },
      {
        title: 'Bunker Surveys',
        content: [
          'Our Bunker Survey services are available to our customers to provide assistance in measuring the quantity of delivered fuel on the vessel during bunkering. Our well-experienced & competent marine surveyors at MSTS conduct this service before commencing and after completion of bunkering operations.'
        ],
        image: vesselSurveysImg
      }
    ]
  },
  {
    id: 'cargo-logistics',
    title: 'Cargo Related Logistics Operations',
    shortTitle: 'Cargo Logistics',
    description: 'End-to-end cargo logistics solutions for efficient supply chain management.',
    longDescription: 'We provide comprehensive cargo logistics services including documentation, customs clearance, transportation coordination, and warehousing. Our experienced team ensures smooth cargo movement from origin to destination.',
    icon: Truck,
    category: 'logistics',
    path: '/services/cargo-logistics',
    image: cargoLogisticsImg,
    features: [
      'Customs documentation',
      'Transportation coordination',
      'Cargo consolidation',
      'Door-to-door service',
      'Track and trace',
      'Insurance arrangements'
    ],
    benefits: [
      'Streamlined operations',
      'Cost optimization',
      'Time savings',
      'Single point of contact'
    ],
    relatedServices: ['vessel-logistics', 'bonded-warehouse', 'cargo-surveys'],
    contentSections: [
      {
        title: 'Cargo Related Logistics Operations',
        content: [
          'We offer the best cargo-related logistics operations in Sri Lanka, with the support of Ceyline Group of companies. Our end-to-end integrated cargo-related logistics operations include the following services.'
        ],
        bulletPoints: [
          'Handling complete Rework/ Stuffing operations',
          'Obtaining custom approval and arranging custom inspections',
          'Lashing/Securing cargo operations',
          'Handling Container minor repairs on damaged containers',
          'Disposing perishable cargo'
        ],
        image: cargoLogisticsImg
      }
    ]
  },
  {
    id: 'vessel-logistics',
    title: 'Vessel Related Logistics Operations',
    shortTitle: 'Vessel Logistics',
    description: 'Complete vessel logistics support including husbandry and port operations.',
    longDescription: 'Our vessel logistics services encompass all aspects of ship operations including port agency, husbandry services, crew changes, provisions, and coordination with port authorities. We ensure efficient vessel turnaround times.',
    icon: Anchor,
    category: 'logistics',
    path: '/services/vessel-logistics',
    image: vesselLogisticsImg,
    features: [
      'Port agency services',
      'Husbandry services',
      'Crew management',
      'Provisions supply',
      'Port authority liaison',
      'Vessel documentation'
    ],
    benefits: [
      'Efficient port calls',
      'Local expertise',
      'Cost management',
      'Regulatory compliance'
    ],
    relatedServices: ['cargo-logistics', 'vessel-surveys', 'bonded-warehouse'],
    contentSections: [
      {
        title: 'Vessel Related Logistics Operations',
        content: [
          'When it comes to vessel-related operations in Sri Lanka, we deploy skilled & experienced employees to ensure the best quality of our services. We always follow the industry best practices, internationally accepted guidelines & safety measures. Further, we use the latest technology, best tools & high-quality materials when offering our services.',
          'Under vessel-related logistics operations, we offer,'
        ],
        bulletPoints: [
          'Chipping services',
          'Painting services',
          'Tank and Boiler Cleaning services',
          'Garbage & Sludge Disposal services',
          'Main Engines Piston Cleaning services & many more…'
        ],
        image: vesselLogisticsImg
      }
    ]
  },
  {
    id: 'bonded-warehouse',
    title: 'Customs Bonded Warehouse Facility',
    shortTitle: 'Bonded Warehouse',
    description: 'Secure customs bonded warehouse for duty-deferred storage solutions.',
    longDescription: 'Our customs bonded warehouse facility offers secure, duty-deferred storage for imported goods. With controlled access, inventory management systems, and customs compliance expertise, we provide efficient warehousing solutions.',
    icon: Warehouse,
    category: 'logistics',
    path: '/services/bonded-warehouse',
    image: bondedWarehouseImg,
    features: [
      'Duty deferral',
      'Secure storage',
      'Inventory management',
      'Customs compliance',
      'Cold storage options',
      'Distribution services'
    ],
    benefits: [
      'Cash flow management',
      'Regulatory compliance',
      'Flexible storage',
      'Strategic location'
    ],
    relatedServices: ['cargo-logistics', 'vessel-logistics', 'fruits-vegetables'],
    contentSections: [
      {
        title: 'Customs Bonded Warehouse Facility',
        content: [
          'A customs bonded warehouse facility is a secure location where goods and inventory can be stored, imported, and exported. The difference between a non-bonded standard warehouse and a customs-bonded warehouse is related to the connection with customs. A bonded warehouse falls under the regulatory supervision of the country\'s customs agency.',
          'MSTS operates a well-designed customs bonded warehouse at Jaya Container Terminal (JCT) inside Colombo Port premises. All tools and spare gear necessary for most contingencies are stored within that warehouse which also has facilities for repair work to be carried out. It also acts as a locating point for our monitoring/repair crew at all times.',
          'Also, another bonded warehouse is available to MSTS in the Colombo Port premises to store reefer container spare parts. This is one of the distinct advantages to MSTS Customers as we are able to provide most of the items at duty-free prices to all our customers.',
          'We usually maintain an extensive stock of reefer container spare parts at our bonded warehouse. These stocks are regularly replenished from our manufacturers and dealers based in Singapore and Hong Kong. Urgently needed spare parts are air freighted with daily flights available from both countries to Colombo. We also offer manufacturers rebuilt reefer container spare parts at competitive prices to our valued customers.'
        ],
        image: bondedWarehouseImg
      }
    ]
  },
  {
    id: 'fruits-vegetables',
    title: 'Fruits & Vegetables Exports',
    shortTitle: 'F&V Exports',
    description: 'Specialized export services for fresh fruits and vegetables.',
    longDescription: 'We specialize in exporting fresh fruits and vegetables from the Maldives region. Our cold chain expertise ensures produce arrives at international markets in optimal condition, maintaining freshness and quality throughout transit.',
    icon: Apple,
    category: 'logistics',
    path: '/services/fruits-vegetables',
    image: fruitsVegetablesImg,
    features: [
      'Cold chain management',
      'Quality control',
      'Export documentation',
      'Market access',
      'Phytosanitary compliance',
      'Packaging solutions'
    ],
    benefits: [
      'Market expansion',
      'Quality preservation',
      'Regulatory expertise',
      'End-to-end service'
    ],
    relatedServices: ['bonded-warehouse', 'cargo-logistics', 'monitoring'],
    contentSections: [
      {
        title: 'Fresh Tropical Fruits and Vegetables Exports from Sri Lanka',
        content: [
          'At MSTS, our fruits & vegetables export service is committed to deliver the freshest, most flavorful tropical fruits and vegetables to our global customers while supporting the livelihoods of local farmers and promoting sustainable agriculture practices in Sri Lanka.',
          'Premium Quality: We source our products from carefully selected farms that adhere to strict quality control standards, ensuring you receive the best of what the tropics have to offer.',
          'Wide Variety: Our extensive product catalog includes a wide range of tropical fruits and vegetables, from luscious mangoes, succulent pineapples, and creamy avocados to vibrant papayas, exotic dragon fruits, and more.',
          'Sustainability: We are committed to sustainability and work closely with our partner farms to minimize environmental impact, reduce waste, and support fair labor practices.'
        ],
        image: fruitsVegetablesImg
      },
      {
        title: 'Reefer Container Transport Service',
        content: [
          'We guarantee the best quality of freshness with our expert reefer container transport service. At MSTS Fruits & Vegetables Exports, our commitment to delivering the highest quality tropical fresh fruits and vegetables is unwavering. We understand that maintaining the freshness and quality of our products throughout their journey from our partner farms to your doorstep is of utmost importance. That\'s why we take great pride in our expert reefer container transport service.'
        ],
        image: reeferRentingImg
      },
      {
        title: 'Why Choose MSTS Reefer Container Transport Service?',
        content: [
          'Precision Temperature Control: Our reefer containers are equipped with advanced temperature control systems that allow us to maintain precise temperature settings throughout the journey. This ensures that your tropical fruits and vegetables arrive at their destination in the same pristine condition as when they were harvested.'
        ],
        image: reeferMonitoringImg
      }
    ]
  }
];

export const serviceCategories = {
  reefer: {
    title: 'Reefer Container Services',
    description: 'Comprehensive refrigerated container solutions'
  },
  survey: {
    title: 'Survey Services',
    description: 'Professional marine and cargo surveys'
  },
  logistics: {
    title: 'Logistics & Specialized',
    description: 'End-to-end logistics operations'
  }
};

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};

export const getServicesByCategory = (category: 'reefer' | 'survey' | 'logistics'): ServiceData[] => {
  return servicesData.filter(service => service.category === category);
};

export const getRelatedServices = (serviceId: string): ServiceData[] => {
  const service = getServiceById(serviceId);
  if (!service) return [];
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is ServiceData => s !== undefined);
};
