import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import a2zimg from "@/public/a2z.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Glassmastering Engineer",
    location: "Sydney NSW",
    description:
      "Led a team in receiving and processing media (CD/DVD, tape) from customers. Utilized software to convert media into specialized formats for machine recognition and sample creation.",
    icon: React.createElement(CgWorkAlt),
    date: "2011-2023",
  },
  {
    title: "Certificate IV in Web Development",
    location: "Sydney NSW",
    description:
      "Completed Certificate IV in Web Development, focusing on foundational web technologies and coding skills. Gained practical experience in front-end development and basic backend principles..",
    icon: React.createElement(LuGraduationCap),
    date: "2023.7- - 2023.12",
  },
  {
    title: "Diploma of Web Development",
    location: "Sydney NSW",
    description:
      "Pursued a Diploma in Front-End and Back-End Development, enhancing skills in full-stack development. Acquired hands-on experience in building and maintaining dynamic web applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2024.2 - 2024.7",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", , "HTML", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "A2z Recycle Website",
    description: "A public web app for a2z recycle company.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: a2zimg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",

  "Express",
  "GSAP",
  "Framer Motion",
] as const;
