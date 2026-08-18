export type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  status?: "live" | "building" | "completed";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "GitBud",
    category: "AI / Developer Tooling",
    summary:
      "An AI-powered GitHub companion designed to make unfamiliar repositories easier to understand.",
    description:
      "GitBud combines repository visualization, code explanations and potential issue detection into an interactive developer experience. The system uses React, FastAPI, MongoDB Atlas and Hugging Face APIs.",
    technologies: [
      "React",
      "D3.js",
      "Python",
      "FastAPI",
      "MongoDB Atlas",
      "LLaMA-3",
    ],
    github:
      "https://github.com/Vedant-1107/GitBud",
    live:
      "https://git-bud.vercel.app",
    featured: true,
    status: "live",
  },

  {
    number: "02",
    name: "FlickFinder",
    category: "Full-Stack Product",
    summary:
      "A movie discovery platform built around search, recommendations and persistent watchlists.",
    description:
      "FlickFinder uses React, FastAPI and the TMDB API for real-time movie data. JWT authentication, REST APIs and MongoDB Atlas provide secure user management and persistent cloud-synced watchlists.",
    technologies: [
      "React",
      "Vite",
      "FastAPI",
      "TMDB API",
      "JWT",
      "MongoDB",
      "TailwindCSS",
    ],
    github:
      "https://github.com/Vedant-1107/FlickFinder",
    status: "completed",
  },

  {
    number: "03",
    name: "License Plate Recognition",
    category: "Computer Vision / OCR",
    summary:
      "A real-time computer vision pipeline for detecting and extracting license plate text.",
    description:
      "The system uses OpenCV for image preprocessing and contour detection, followed by Tesseract OCR for text extraction from live video feeds.",
    technologies: [
      "Python",
      "OpenCV",
      "Tesseract OCR",
    ],
    github:
      "https://github.com/Vedant-1107/Licence-Plate-Recognition-System",
    status: "completed",
  },

  {
    number: "04",
    name: "DevOS",
    category: "Personal System",
    summary:
      "A developer-focused operating system for organizing projects, experiments and the process of building.",
    description:
      "DevOS is currently being developed and will become an evolving space for managing development work, ideas and technical experiments.",
    technologies: [
      "In Progress",
    ],
    status: "building",
  },
];
