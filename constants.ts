import { Project, Experience, SkillCategory } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Mission', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Comms', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Circuit Design",
    skills: [
      { name: "PCB Layout (Altium)", level: 95 },
      { name: "Schematic Capture", level: 95 },
      { name: "High Speed Digital", level: 80 },
      { name: "Power Electronics", level: 85 },
      { name: "Analog Front-ends", level: 90 },
    ]
  },
  {
    title: "Firmware / Embedded",
    skills: [
      { name: "C/C++", level: 90 },
      { name: "STM32 / ARM Cortex", level: 85 },
      { name: "RTOS", level: 75 },
      { name: "VHDL / Verilog", level: 70 },
      { name: "IoT Protocols (MQTT)", level: 80 },
    ]
  },
  {
    title: "Tools & Equipment",
    skills: [
      { name: "Oscilloscopes", level: 95 },
      { name: "Spectrum Analyzers", level: 85 },
      { name: "SPICE Simulation", level: 90 },
      { name: "MATLAB / Python", level: 80 },
      { name: "Soldering / Rework", level: 95 },
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Electrical Engineer",
    company: "AeroTech Defense Systems",
    period: "2021 - Present",
    description: [
      "Lead PCB designer for avionics control modules, reducing form factor by 30%.",
      "Designed high-reliability power distribution units handling 2kW+ loads.",
      "Mentored junior engineers in EMI/EMC best practices."
    ]
  },
  {
    id: "exp-2",
    role: "Embedded Systems Engineer",
    company: "Cyberdyne Logic",
    period: "2018 - 2021",
    description: [
      "Developed firmware for autonomous drone swarms using STM32 H7.",
      "Implemented real-time sensor fusion algorithms for IMU and GPS data.",
      "Collaborated with mechanical team for tight-tolerance enclosure integration."
    ]
  },
  {
    id: "exp-3",
    role: "Junior Hardware Engineer",
    company: "NextGen Robotics",
    period: "2016 - 2018",
    description: [
      "Designed motor controller circuits for industrial robotic arms.",
      "Performed board bring-up, debugging, and validation testing.",
      "Maintained component libraries and managed BOM lifecycles."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Autonomous Sentry Unit",
    category: "Robotics",
    description: "A mobile surveillance unit with redundant power systems and long-range LoRa communication capabilities.",
    technologies: ["Altium", "STM32", "LoRaWAN", "Power Management"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    status: "completed"
  },
  {
    id: "proj-2",
    title: "High-Frequency SDR",
    category: "RF Engineering",
    description: "Custom software-defined radio frontend capable of processing signals up to 6GHz with low noise floor.",
    technologies: ["RF Design", "FPGA", "Python", "KiCad"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    status: "prototype"
  },
  {
    id: "proj-3",
    title: "Quantum Encryption Key",
    category: "Security",
    description: "Hardware-based random number generator utilizing quantum tunneling noise for cryptographic keys.",
    technologies: ["Analog Design", "Low Noise Amplifiers", "C++"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    status: "in-progress"
  },
  {
    id: "proj-4",
    title: "Industrial IoT Gateway",
    category: "Embedded",
    description: "Ruggedized gateway converting legacy Modbus RTU signals to MQTT over cellular networks.",
    technologies: ["Embedded Linux", "PCB Design", "Industrial Comms"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    status: "completed"
  }
];