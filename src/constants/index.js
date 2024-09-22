import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT_1 = `Full Stack Developer`;
export const HERO_CONTENT_2 = `Cybersecurity Engineer`;
export const HERO_CONTENT_3 = `UI/UX Developer`;
export const HERO_CONTENT_4 = `FreeLancer`;


export const ABOUT_TEXT = `I am a passionate Full Stack Developer and Cybersecurity enthusiast with a diverse background in 
                          software engineering, web development, and network security. With experience working on projects 
                          across front-end and back-end technologies, I specialize in building scalable web applications using 
                          React, Node.js, Express, and MongoDB. My journey into tech began with an interest in C++ and full 
                          stack development, leading me to explore the broader world of programming and security.`;

export const EXPERIENCES = [
  {
    year: "JAN 2024 - JUNE 2024",
    role: "Software Engineer 3 Intern",
    company: "Juniper Networks Ltd.",
    description: `I optimized policy lookup by transitioning from file-based to SQL-based systems, improving data management and firewall processes. I also contributed to refining network policy rules, implemented DHCP and NAT protocols, and ensured seamless router configuration for efficient IP address management.`,
    technologies: ["Protocols", "Security", "Routing","SQL"],
  },
  {
    year: "JUNE 2023 - JULY 2023",
    role: "Cyber Security Intern",
    company: "Edunet",
    description: `I designed a stealthy keylogger using Tkinter and Pynput, capturing over 10,000 keystrokes for testing. I also worked with Metasploit and over 10 payloads for penetration testing, enhancing my offensive security skills, and used Wireshark for packet tracing, gaining hands-on experience in network analysis.`,
    technologies: [ "Python","Metasploit","Wireshark", "GUI"],
  },
  {
    year: "JUNE 2022 - JULY 2022",
    role: "Front-End Developer Intern",
    company: "Internship Studio",
    description: `I developed and maintained responsive web applications using React, HTML, CSS, and JavaScript, while implementing back-end functionality with Node.js, Express, and MongoDB to create scalable solutions. I also deployed the applications, ensuring 100% accessibility and a seamless user experience.`,
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
  },
  {
    year: "MAY 2022 - JUNE 2022",
    role: "Cyber Security Mentee",
    company: "Microsoft",
    description: `Worked with malware analysis, digital forensics, and reverse engineering tools successfully identifying and understanding over 10 types of malware and more than 20 viruses..`,
    technologies: ["Malware Analysis", "Digital Forensics", "Reverse Engineering", "Vulnerability Assessment", "OWASP Top Ten"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    link:"https://github.com/eddyhacks/portfolio_project",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Password Manager",
    link:"https://github.com/eddyhacks/SecretPass",
    image: project2,
    description:
      "An application for managing passwords, with features such as task creation, Deletion, and editing.",
    technologies: ["HTML", "TailwindCSS", "React", "Node.Js", "Express.js","MongoDB"],
  },
  {
    title: "KeyLogger UI",
    link:"https://github.com/eddyhacks/KeyloggerUI",
    image: project3,
    description:
      "A Gui Keylogger, which records the keys and store them into a JSON file, running in background.",
    technologies: ["python","GUI","pyinput","tkinter"],
  },
  {
    title: "Carpooling And Parking System",
    link:"https://github.com/eddyhacks/housing_board_management_system",
    image: project4,
    description:
      "A platform for sharing rides and providing secure parking spaces for the people for MIT,manipal, A group project contribution!",
    technologies: ["HTML", "CSS","JavaScript","SQL"],
  },
];

export const CONTACT = {
  address: "Jaipur, Rajasthan, 302020",
  phoneNo: "+91 6350057390",
  email: "aditya8122002@gmail.com",
};
