import Skills from "@/pages/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Technical Skills - Azeez Dandawala | React, Node.js, MongoDB Expert",
  description:
    "Technical skills and expertise of Azeez Dandawala: Backend Development, Machine Learning, Data Science, Python, Java, Node.js, React.js, Next.js, TypeScript, Databases (SQL, NoSQL), Cloud Computing, and more.",
  keywords:
    "React.js Skills, Node.js Expertise, Next.js Developer, TypeScript Expert, MongoDB Developer, Full Stack Skills, MERN Stack Skills, JavaScript Developer, Web Development Skills, Technical Expertise",
  openGraph: {
    title: "Technical Skills - Azeez Dandawala",
    description:
      "My technical skills and expertise in modern web development technologies",
    url: "https://azeez72.netlify.app/skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills - Azeez Dandawala",
    description: "My technical skills and expertise",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <Skills />;
}
