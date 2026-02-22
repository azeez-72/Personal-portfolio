import Projects from "@/pages/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Portfolio by Azeez Dandawala | Backend & Machine Learning Applications",
  description:
    "Explore backend & machine learning projects by Azeez Dandawala. Backend & machine learning applications, React.js projects, Next.js websites, Node.js backends, full-stack solutions, and open-source contributions. See real-world examples of modern web development.",
  keywords:
    "Backend & Machine Learning Projects, Backend & Machine Learning Portfolio, React.js Portfolio, Next.js Applications, Node.js Projects, Full Stack Applications, JavaScript Projects, Open Source Projects, Azeez Dandawala Projects",
  openGraph: {
    title: "Projects - Portfolio by Azeez Dandawala",
    description:
      "View my latest web development projects and full-stack applications",
    url: "https://azeez72.netlify.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Portfolio by Azeez Dandawala",
    description: "View my latest web development projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
