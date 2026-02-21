import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Azeez Dandawala - Masters student at Stony Brook University | Prev. Software Engineer",
  description:
    "Learn about Azeez Dandawala, a passionate Masters student at Stony Brook University. Expertise in backend development and data engineering. Dedicated to building scalable, high-performance web applications.",
  keywords:
    "About Azeez Dandawala, Masters student at Stony Brook University, backend development, data engineering",
  openGraph: {
    title: "About Azeez Dandawala - Masters student at Stony Brook University",
    description:
      "Learn about my journey as a Masters student at Stony Brook University specializing in backend development and data engineering",
    url: "https://azeez72.netlify.app/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Azeez Dandawala - Masters student at Stony Brook University",
    description: "Learn about my journey as a Masters student at Stony Brook University specializing in backend development and data engineering",
  },
  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
	return <About />;
}