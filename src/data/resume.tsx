import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Melvin M T",
  initials: "MM",
  url: "https://www.linkedin.com/in/melvin-thankachan/",
  location: "Aluva, Ernakulam, Kerala, India",
  locationLink: "https://www.google.com/maps/place/Aluva,+Kerala,+India",
  description:
    "Self-Taught Full-Stack Developer transitioning from a leadership role in warehouse operations to building scalable web solutions.",
  summary:
    "Self-Taught Full-Stack Developer transitioning from a leadership role in warehouse operations to building scalable web solutions. Specialized in Python, Django, PostgreSQL and React. Trained in work simulated environment, consistently meeting tight weekly deadlines and passing rigorous technical reviews. Work-ready candidate with a deep understanding of core concepts like REST API, Data Structures & Algorithms (DSA) and modern front-end architecture using TypeScript, Zustand, and ShadcnUI.",
  avatarUrl: "/images/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
    { name: "TypeScript", icon: Typescript },
    { name: "SQL", icon: Postgresql },
    { name: "Django", icon: "/icons/django-svgrepo-com.svg" },
    { name: "Django REST Framework (DRF)", icon: "/icons/api-interface-svgrepo-com.svg" },
    { name: "React", icon: ReactLight },
    { name: "HTML 5", icon: "/icons/html-5-svgrepo-com.svg" },
    { name: "CSS 3", icon: "/icons/css-3-svgrepo-com.svg" },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "ShadcnUI", icon: Icons.shadcnui },
    { name: "Zustand", icon: "/icons/zustand-original.svg" },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: "/icons/mongodb-svgrepo-com.svg" },
    { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
    { name: "GitHub", icon: Icons.github },
    { name: "Docker", icon: "/icons/docker-svgrepo-com.svg" },
    { name: "Postman", icon: "/icons/postman-icon-svgrepo-com.svg" },
    { name: "Linux", icon: "/icons/linux-svgrepo-com.svg" },
    { name: "DSA", icon: null },
    { name: "REST APIs", icon: "/icons/api-interface-svgrepo-com.svg" },
    { name: "OAuth", icon: "/icons/oauth-svgrepo-com.svg" },
    { name: "JWT Authentication", icon: "/icons/jwt-svgrepo-com.svg" },
    { name: "Agile Methodology", icon: "/icons/scrum-svgrepo-com.svg" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "melvinthankachan101@gmail.com",
    tel: "+918289991281",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MelvinThankachan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/melvin-thankachan/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/files/Melvin M T - Resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:melvinthankachan101@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mary Matha Modern Rice Mill",
      href: "",
      badges: [],
      location: "Kerala, India",
      title: "Warehouse Manager",
      logoUrl: "/images/mary-matha-modern-rice-mill.png",
      start: "Jan 2024",
      end: "Jul 2024",
      description:
        "Led a team of workers to make sure daily operations and rice processing ran smoothly. Managed inventory, coordinated delivery schedules, and improved warehouse workflows.",
    },
  ],
  education: [
    {
      school: "Brototype",
      href: "https://www.brototype.com/",
      degree: "Python, Django, PostgreSQL and React Full Stack Development",
      logoUrl: "/images/brototype.jpg",
      start: "Aug 2024",
      end: "Present",
    },
    {
      school: "Kuppam Engineering College",
      href: "https://kec.ac.in/",
      degree: "B.Tech in Electronics and Communication Engineering",
      logoUrl: "/images/kec.jpg",
      start: "May 2017",
      end: "Mar 2021",
    },
  ],
  projects: [
    {
      title: "WallFramePhoto",
      href: "https://github.com/MelvinThankachan/wall-frame-photo",
      dates: "Present",
      active: true,
      description:
        "Real-time image manipulation workspace for visualizing photo frames on walls using React Konva and Zustand.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "React Konva",
        "Zustand",
        "ShadcnUI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MelvinThankachan/wall-frame-photo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/wall-frame-photo.png",
      video: "",
    },
    {
      title: "JobWin",
      href: "https://github.com/MelvinThankachan/jobwin-react-client",
      dates: "Present",
      active: true,
      description:
        "A comprehensive job portal with distinct user roles (Admin, Job Seekers, Companies), secure authentication, and role-based access control.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Django",
        "DRF",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Client Source",
          href: "https://github.com/MelvinThankachan/jobwin-react-client",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Server Source",
          href: "https://github.com/MelvinThankachan/jobwin-django-server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/JobWin.png",
      video: "",
    },
    {
      title: "Mulberry Fashions",
      href: "https://github.com/MelvinThankachan/mulberry-fashions",
      dates: "",
      active: true,
      description:
        "Men's Fashion E-commerce Platform built with Django and PostgreSQL, following MVC architecture. Features multi-user roles, payment integration (Razorpay), and deployment on AWS EC2.",
      technologies: [
        "Django",
        "PostgreSQL",
        "Bootstrap",
        "Razorpay",
        "AWS EC2",
        "Nginx",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MelvinThankachan/mulberry-fashions",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/mulberry-fashions.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
