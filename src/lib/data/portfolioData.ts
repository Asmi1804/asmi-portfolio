import type {
  ProfileData,
  Project,
  ExperienceItem,
  ResearchPaper,
  SkillGroup,
  Certification,
  EducationItem,
} from '../types/portfolio';

export const PROFILE: ProfileData = {
  name: 'Asmitha Banu A',
  role: 'Aspiring Software Engineer',
  heroHeadline: "Hi, I'm Asmitha. I build ideas into working experiences.",
  heroSubtext:
    'Electronics and Communication Engineering graduate transitioning with deliberate focus into software engineering. I bridge analytical hardware problem-solving with Java, SQL, modern web engineering, and intelligent systems.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'asmithabanu1804@gmail.com',
  phone: '+91 7200430418',
  availabilityStatus: 'Open to Software Engineering Opportunities',
  socials: {
    linkedin: 'https://www.linkedin.com/in/asmi18/',
    github: 'https://github.com/Asmi1804',
    leetcode: 'https://leetcode.com/u/Asmithabanu/',
  },
  // You can easily update this list anytime!
  currentlyLearning: [
    'Advanced Data Structures & Algorithms in Java',
    'Spring Boot & RESTful Microservices',
    'Modern Full-Stack Engineering Practices',
    'System Design Fundamentals',
  ],
  softSkills: [
    'Analytical Thinking',
    'Problem-Solving',
    'Communication',
    'Leadership',
    'Adaptability',
    'Teamwork',
  ],
  languages: ['English', 'Tamil', 'Hindi'],
};

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
    institution: 'Panimalar Engineering College',
    location: 'Chennai, Tamil Nadu',
    period: 'Oct 2022 – Apr 2026',
    grade: '8.9',
    gradeType: 'CGPA',
    notes: 'Rigorous foundation in circuit analysis, signal processing, embedded systems, and algorithmic problem-solving.',
  },
  {
    degree: 'Higher Secondary Examination',
    institution: 'Dawn Matriculation Higher Secondary School',
    location: 'Chennai, Tamil Nadu',
    period: 'Completed',
    grade: '84.16%',
    gradeType: 'Percentage',
    notes: 'Strong academic foundation in Mathematics, Physics, and Chemistry.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'infomatronics',
    role: 'Intern & Project Associate',
    organization: 'Infomatronics Project Services',
    period: 'Mar 2024 – Apr 2025',
    durationNote: '1 year 2 mos',
    year: '2024 – 2025',
    type: 'Associate',
    description:
      'Contributed across technical project lifecycles spanning web technologies and IoT integrations, delivering technical instruction sessions, authoring system documentation, and facilitating company operations.',
    highlights: [
      'Developed and tested web and IoT-based hardware-software integrated projects.',
      'Conducted interactive technical training sessions for students and junior project teams.',
      'Maintained rigorous technical documentation, schematics, and client-facing project specifications.',
      'Collaborated cross-functionally to streamline sprint milestones and operational workflows.',
    ],
    skills: ['Web Technologies', 'IoT Systems', 'Technical Training', 'Documentation', 'Operations'],
  },
  {
    id: 'eisystem',
    role: 'Intern',
    organization: 'Eisystem of Technologies (AICTE)',
    period: 'May 2024 – Jun 2024',
    durationNote: '2 months',
    year: '2024',
    type: 'Internship',
    description:
      'Engineered an automated Attendance Tracker application using Python, acquiring direct exposure to data handling routines, automated record-keeping, and user-centric application workflows.',
    highlights: [
      'Architected an automated Attendance Tracker system utilizing Python data manipulation libraries.',
      'Optimized file I/O operations and tabular data storage for attendance logging.',
      'Designed an intuitive, friction-free interface ensuring accurate user record management.',
      'Implemented input validation and automated duplicate entry handling.',
    ],
    skills: ['Python', 'Automation', 'Data Handling', 'Application Development', 'UI Logic'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'fcep-va-compression',
    title: 'Video Compression Performance Analysis Using FCEP-VA Algorithm',
    year: 'Mar 2026',
    category: ['Software', 'AI/ML', 'Academic'],
    featured: true,
    shortDescription:
      'A deep convolutional neural network framework (Frame-wise CNN Enhanced Performance Analysis for Video Applications) built to reconstruct and enhance compressed video streams.',
    fullDescription:
      'Developed the FCEP-VA algorithm utilizing frame-wise deep convolutional neural networks to post-process and enhance video quality degraded during aggressive compression. Evaluated the reconstruction efficacy quantitatively against original raw footage using standardized signal fidelity and structural perception benchmarks.',
    technologies: ['Python', 'CNN Architecture', 'Computer Vision', 'FCEP-VA Algorithm', 'Video Analysis'],
    contribution:
      'Designed the frame-wise CNN enhancement pipeline; implemented automated evaluation loops calculating Peak Signal-to-Noise Ratio (PSNR) and Structural Similarity Index (SSIM); analyzed trade-offs across bitrate constraints and compression ratios.',
    learned:
      'Mastered deep learning computer vision principles for image/video restoration, mathematical benchmarking of visual fidelity (PSNR vs. SSIM), and balancing model inference complexity against streaming compression ratios.',
    statusLabel: 'Project details available on request',
    architectureNote: 'CNN Post-Processor • PSNR & SSIM Benchmark • Rate-Distortion Optimization',
    metrics: [
      { label: 'Algorithm', value: 'FCEP-VA' },
      { label: 'Signal Fidelity', value: 'PSNR Gain Achieved' },
      { label: 'Structural Quality', value: 'SSIM Preserved' },
      { label: 'Bandwidth Overhead', value: 'Low Bitrate Maintained' },
    ],
  },
  {
    id: 'traffic-sign-matlab',
    title: 'Traffic Sign Recognition Using MATLAB',
    year: 'Oct 2024',
    category: ['Software', 'AI/ML', 'Academic'],
    shortDescription:
      'Real-time traffic sign detection and classification system powered by image processing and supervised machine learning techniques.',
    fullDescription:
      'Engineered a computer vision classification system in MATLAB capable of isolating, segmenting, and classifying road traffic signs from noisy road imagery to support intelligent driver assistance systems.',
    technologies: ['MATLAB', 'Image Processing Toolbox', 'Machine Learning', 'Computer Vision'],
    contribution:
      'Implemented image preprocessing, color threshold segmentation, edge contour detection, feature extraction, and trained a multiclass classifier to categorize regulatory and warning signs.',
    learned:
      'Gained deep practical intuition for image filtering, morphological operations, feature vector design, and evaluating classification accuracy under varying lighting conditions.',
    statusLabel: 'Project details available on request',
  },
  {
    id: 'plant-watering-system',
    title: 'Automatic Plant Watering System',
    year: 'Sept 2024',
    category: ['IoT'],
    shortDescription:
      'Smart closed-loop Arduino irrigation system that continuously monitors soil moisture and dispenses water autonomously at optimal hydration thresholds.',
    fullDescription:
      'Built an embedded hardware-software feedback controller that reads analog soil moisture sensor readings, determines soil dryness levels, and actuates a water pump relay precisely until moisture reaches optimal saturation.',
    technologies: ['Arduino', 'Embedded C', 'Moisture Sensor', 'Relay Switching', 'Hardware Prototyping'],
    contribution:
      'Designed the electronic schematic, assembled the sensor-actuator circuit, programmed calibration and threshold detection loops in C, and tested failsafe cutoff mechanisms.',
    learned:
      'Hands-on mastery of analog-to-digital sensor conversion, threshold hysteresis, microcontroller power management, and real-time physical feedback control.',
    statusLabel: 'Project details available on request',
  },
  {
    id: 'soft-smile-dental',
    title: 'Soft Smile Dental Care Website',
    year: 'Aug 2024',
    category: ['Web'],
    shortDescription:
      'Modern, accessible patient-facing web application crafted for a dental care clinic startup in Chennai.',
    fullDescription:
      'Designed and coded the frontend user interface and experience for Soft Smile Dental Care, focusing on welcoming aesthetic design, clear doctor profiles, service catalogs, and intuitive appointment consultation forms.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI/UX', 'Accessible Design'],
    contribution:
      'Developed responsive page layouts from scratch, built clean consultation request interfaces, structured mobile navigation menus, and ensured WCAG accessibility standards.',
    learned:
      'Gained empathy for end-user healthcare design, converting client branding into modern CSS layouts, and building seamless responsive websites without bulky third-party templates.',
    statusLabel: 'Project details available on request',
  },
  {
    id: 'hotel-freelance-website',
    title: 'Hotel Website – Freelancing Project',
    year: 'Aug 2024',
    category: ['Web', 'Software'],
    shortDescription:
      'Dynamic dining and hospitality website featuring interactive culinary category menus and enhanced customer navigation.',
    fullDescription:
      'Delivered a freelance web application for a hospitality business, developing interactive food category exploration tabs, fluid menu transitions, responsive layout systems, and booking inquiry workflows.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'UI Components'],
    contribution:
      'Engineered interactive category filtering tabs using vanilla JavaScript, styled responsive card grids for culinary items, and optimized frontend assets for rapid loading.',
    learned:
      'Practical freelance client delivery, scoping project deliverables, clean DOM manipulation, and building interactive, lightweight web experiences.',
    statusLabel: 'Project details available on request',
  },
  {
    id: 'motion-light-sensor',
    title: 'Motion Light Sensor',
    year: 'Aug 2023',
    category: ['IoT'],
    shortDescription:
      'Automatic energy-conserving lighting system using infrared sensors and Arduino to control illumination based on physical occupancy.',
    fullDescription:
      'Created an intelligent automation system that utilizes infrared detection to sense presence and motion in interior spaces, automatically powering on lighting when movement is detected and switching off after an idle interval.',
    technologies: ['Arduino', 'IR Sensors', 'Embedded C', 'Power Relays', 'Circuit Design'],
    contribution:
      'Assembled breadboard prototypes, programmed sensor reading thresholds with debounce timers, and connected high-voltage switching relays safely.',
    learned:
      'Fundamental hardware logic, understanding sensor trigger latencies, relay isolation, and practical energy-conservation automation.',
    statusLabel: 'Project details available on request',
  },
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'wireless-charging-evs',
    title: 'Wireless Charging Roads for EVs',
    conference: '8th International Conference on Intelligent Computing (IConIC 2025)',
    institution: 'Panimalar Engineering College, Chennai',
    year: '2025',
    summary:
      'Investigates dynamic wireless power transfer (DWPT) systems embedded directly into road infrastructure, allowing electric vehicles to charge dynamically during transit and mitigating range anxiety and heavy battery constraints.',
    keyContributions: [
      'Comparative evaluation of inductive power transfer (IPT) magnetic resonance topologies.',
      'Architectural analysis of buried transmitter coil alignment and dynamic switching efficiency.',
      'Feasibility framework for roadway grid integration and autonomous EV power scheduling.',
    ],
    significance:
      'Addressed fundamental bottlenecks in electric mobility infrastructure by presenting dynamic in-motion charging paradigms.',
    status: 'Presented & Published in Conference Proceedings',
  },
  {
    id: 'track-n-seat',
    title: 'Track N Seat: Smart Bus Seat Vacancy Detection and Arrival Alerts',
    conference: '8th International Conference on Intelligent Computing (IConIC 2025)',
    institution: 'Panimalar Engineering College, Chennai',
    year: '2025',
    summary:
      'Presents an intelligent public transit IoT telemetry architecture integrating physical seat sensors with real-time route tracking to transmit live seat vacancy counts and arrival forecasts to commuters.',
    keyContributions: [
      'Hardware sensor array design for reliable, non-intrusive seat occupancy detection.',
      'Telemetry pipeline transmitting occupancy states and GPS coordinates to passenger dashboards.',
      'Predictive alert logic dispatching arrival notifications to waiting commuters at bus stops.',
    ],
    significance:
      'Enhances passenger transit convenience and commuter distribution efficiency using lightweight, scalable edge sensors.',
    status: 'Presented & Published in Conference Proceedings',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    description: 'Object-oriented foundations and algorithmic problem-solving',
    skills: [
      {
        name: 'Java',
        level: 'Core',
        context: 'OOP Principles, Data Structures, Exception Handling, Collections Framework',
      },
    ],
  },
  {
    category: 'Database & Data Storage',
    description: 'Relational data modeling, querying, and schema organization',
    skills: [
      {
        name: 'SQL',
        level: 'Core',
        context: 'RDBMS concepts, complex joins, aggregation, schema design, indexes',
      },
    ],
  },
  {
    category: 'Web Engineering',
    description: 'Building responsive, accessible, standards-compliant user interfaces',
    skills: [
      {
        name: 'HTML',
        level: 'Core',
        context: 'Semantic markup, accessible structure, SEO fundamentals',
      },
      {
        name: 'CSS',
        level: 'Core',
        context: 'Flexbox, Grid, responsive layouts, animations, modern styling',
      },
      {
        name: 'JavaScript',
        level: 'Working Knowledge',
        context: 'DOM manipulation, async events, ES6+ syntax, client-side logic',
      },
    ],
  },
  {
    category: 'Other Technical Experience',
    description: 'Automation, embedded prototyping, and computational modeling',
    skills: [
      {
        name: 'Python',
        level: 'Working Knowledge',
        context: 'Data handling, automation scripts, Attendance Tracker development',
      },
      {
        name: 'Arduino',
        level: 'Working Knowledge',
        context: 'Embedded C, sensor integration, relay actuation, hardware prototyping',
      },
      {
        name: 'MATLAB',
        level: 'Familiar',
        context: 'Image processing routines, machine learning classification pipelines',
      },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'HTML Certification',
    issuer: 'Great Learning',
    category: 'Web Development',
    highlights: 'Semantic page structuring, accessible components, standards compliance.',
    skillsCovered: ['Semantic HTML5', 'Document Structure', 'Forms & Inputs', 'Accessibility'],
  },
  {
    title: 'CSS Certification',
    issuer: 'Great Learning',
    category: 'Web Development',
    highlights: 'Modern CSS layout models, responsive media queries, visual styling hierarchy.',
    skillsCovered: ['CSS3 Grid & Flexbox', 'Responsive Design', 'Transitions & Transforms', 'Box Model'],
  },
  {
    title: 'Basics of Java',
    issuer: 'Simplilearn',
    category: 'Software Engineering',
    highlights: 'Core Java syntax, variables, data types, control flow structures, and arrays.',
    skillsCovered: ['Java Syntax', 'Control Statements', 'Methods & Functions', 'Memory Basics'],
  },
  {
    title: 'Object Oriented Programming (OOP)',
    issuer: 'Simplilearn',
    category: 'Software Engineering',
    highlights: 'Object-oriented paradigms, class modeling, inheritance hierarchies, polymorphism.',
    skillsCovered: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Clean Code'],
  },
  {
    title: 'SQL and Relational Databases 101',
    issuer: 'Cognitive Class (IBM)',
    category: 'Database Management',
    highlights: 'Relational database architecture, relational algebra, DDL/DML, multi-table joins.',
    skillsCovered: ['Relational Schemas', 'SELECT Queries', 'Filtering & Sorting', 'JOIN Operations', 'Keys & Constraints'],
  },
];

export const STORY_STAGES = [
  {
    stage: '01',
    title: 'ECE Rigor & Analytical Foundation',
    subtitle: 'Circuits, Signals & Logic (2022–2024)',
    icon: 'Cpu',
    description:
      'Pursuing Electronics and Communication Engineering at Panimalar Engineering College established an uncompromising grounding in first-principles analytical thinking, signal analysis, and mathematical logic.',
    detail:
      'Understanding electronics from the silicon and gate level demystified how computers actually compute. It taught me patience, systemic debugging, and how hardware constraints dictate software efficiency.',
  },
  {
    stage: '02',
    title: 'IoT & Physical Computing',
    subtitle: 'From Schematics to Sensors (2023–2024)',
    icon: 'Radio',
    description:
      'Brought theoretical circuit theory into physical reality with Arduino microcontrollers, IR sensors, and soil moisture probes to build automated systems.',
    detail:
      'Projects like the Motion Light Sensor and Automatic Plant Watering System reinforced how code directly controls the physical world through sensor loops, analog-to-digital conversions, and fail-safe logic.',
  },
  {
    stage: '03',
    title: 'Web Engineering & UI Craft',
    subtitle: 'Human-Centered Interfaces (2024)',
    icon: 'Globe',
    description:
      'Expanded into client-facing web development, crafting clean, responsive interfaces for real dental clinics and hospitality clients.',
    detail:
      'Building the Soft Smile Dental Care website and freelance hotel portal taught me how to transform business requirements into accessible, performant, mobile-friendly interfaces using semantic HTML, modern CSS, and JavaScript.',
  },
  {
    stage: '04',
    title: 'Software Engineering & Automation',
    subtitle: 'Structured Code & Data Logic (2024–2025)',
    icon: 'Code2',
    description:
      'Deepened focus into object-oriented programming with Java, relational database design with SQL, and process automation with Python at Eisystem of Technologies.',
    detail:
      'Gained real-world engineering experience developing automated attendance trackers, structuring robust object models, querying relational schemas with SQL, and upholding clean software design principles.',
  },
  {
    stage: '05',
    title: 'Intelligent Systems & Research',
    subtitle: 'Computer Vision & Deep Learning (2025–2026)',
    icon: 'Sparkles',
    description:
      'Synthesized hardware and software domains into machine learning and advanced academic research, presenting twice at IConIC 2025 and authoring the FCEP-VA video compression system.',
    detail:
      'Authored papers on Wireless Charging Roads and Smart Bus Telemetry, followed by deep convolutional neural network research for video compression enhancement (FCEP-VA) evaluating PSNR and SSIM benchmarks.',
  },
];
