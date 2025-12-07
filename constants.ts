import { Project, Experience, SkillCategory } from './types';



export const SKILLS: SkillCategory[] = [
  {
    title: "Power & Systems",
    skills: [
      { name: "Power Systems Analysis", level: 90 },
      { name: "PCB Design (KiCad/Altium)", level: 95 },
      { name: "Circuit Troubleshooting", level: 95 },
      { name: "Systems Integration", level: 90 },
      { name: "MATLAB / Simulink", level: 85 },
    ]
  },
  {
    title: "Embedded / Control",
    skills: [
      { name: "C/C++ (STM32/MSP430)", level: 85 },
      { name: "IoT Protocols (MQTT/CAN)", level: 80 },
      { name: "Arduino / Microcontrollers", level: 95 },
      { name: "FPGAs / VHDL", level: 70 },
      { name: "Control Systems", level: 80 },
    ]
  },
  {
    title: "Field / Tools",
    skills: [
      { name: "Fusion 360 / AutoCAD", level: 85 },
      { name: "Oscilloscopes / Spectrum Analyzers", level: 90 },
      { name: "Soldering / Rework", level: 95 },
      { name: "Equipment Accountability", level: 100 },
      { name: "Leadership (Army)", level: 100 },
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Electrical Engineer / Researcher",
    company: "Florida Space Institute",
    period: "Jul 2024 – Jul 2025",
    description: [
      "Designed, assembled, and tested 3+ PCBs and embedded control systems for DIMS (Dust In-situ Manipulation System).",
      "Integrated hardware for cooling loops, data acquisition, and user interfaces.",
      "Collaborated on systems replicating Titan’s gravity for environmental data collection.",
      "Conducted field validation and root cause analysis in lab and real-world simulations."
    ]
  },
  {
    id: "exp-2",
    role: "Electrical Engineering Intern",
    company: "Phasor Engineering, LLC",
    period: "Jan 2024 - Jul 2024",
    description: [
      "Delivered electrical system CAD designs under tight deadlines for diverse commercial projects.",
      "Performed power systems modeling and analysis to support client engineering deliverables.",
      "Developed an original ampacity calculator based on IEEE standards, reducing turnaround by ~20%."
    ]
  },
  {
    id: "exp-3",
    role: "Team Leader / Airborne Infantryman",
    company: "U.S. Army",
    period: "Jun 2016 – Jul 2020",
    description: [
      "Led 4-man infantry teams during domestic and multinational operations.",
      "Responsible for $2M+ in mission equipment with zero losses.",
      "Coordinated with NATO and allied forces during joint training and deployment exercises.",
      "Maintained accountability for high-value complex field systems."
    ]
  }
];

const DIMS_IMAGES = [
  "/projects/dims/Chamber Open.jpg",
  "/projects/dims/Blue Origin IMU.jpg",
  "/projects/dims/Chamber Housing.jpg",
  "/projects/dims/Chamber Vaccum Test.jpg",
  "/projects/dims/Chamber inside Housing.png",
  "/projects/dims/Chamber.jpg",
  "/projects/dims/Converters&Relays.jpg",
  "/projects/dims/Cooling Loop Board.jpg",
  "/projects/dims/Cooling Loop.png",
  "/projects/dims/PSU Board.jpeg"
];

const PARAPEDAL_IMAGES = [
  "/projects/parapedal/Device Final.png",
  "/projects/parapedal/Boards.jpg",
  "/projects/parapedal/Output 3D Model.png",
  "/projects/parapedal/Output PCB Layout.png",
  "/projects/parapedal/Regulator 3D Model.png",
  "/projects/parapedal/Regulator PCB Layout.png",
  "/projects/parapedal/User Input 3D Model.png",
  "/projects/parapedal/User Input PCB Layout.png"
];

const PHASOR_IMAGES = [
  "/projects/phasor/AmpCalcFull.png",
  "/projects/phasor/AmpCalc1.png",
  "/projects/phasor/AmpCalc2.png"
];

export const PROJECTS: Project[] = [
  {
    id: "dims",
    title: "DIMS (Dust In-situ Manipulation)",
    category: "Space Systems",
    description: "Embedded control system and PCB design for manipulating regolith in reduced-gravity environments. Featured custom cooling loops and real-time data acquisition.",
    technologies: ["PCB Design", "Embedded Systems", "Thermal Control", "Data Acquisition"],
    imageUrl: "/projects/dims/Chamber Open.jpg",
    images: DIMS_IMAGES,
    status: "completed"
  },
  {
    id: "parapedal",
    title: "ParaPedal",
    category: "Senior Design",
    description: "Assistive technology project focused on power efficiency and reliable control systems for adaptive mobility devices.",
    technologies: ["Power Systems", "Motor Control", "Circuit Design", "Safety Protocols"],
    imageUrl: "/projects/parapedal/Device Final.png",
    images: PARAPEDAL_IMAGES,
    status: "completed"
  },
  {
    id: "phasor",
    title: "Phasor Ampacity Calculator",
    category: "Power Eng",
    description: "Custom software tool built to automate IEEE standard calculations for cable ampacity, significantly improving engineering workflow efficiency.",
    technologies: ["IEEE Standards", "Automation", "Power Modeling", "Software Tooling"],
    imageUrl: "/projects/phasor/AmpCalcFull.png",
    images: PHASOR_IMAGES,
    status: "completed"
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Mission', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Comms', href: '#contact' },
];

export const LINKEDIN_URL = "https://linkedin.com/in/jason-knaebel-4673301b0";
export const RESUME_PATH = "/Jason Knaebel Resume.pdf";

