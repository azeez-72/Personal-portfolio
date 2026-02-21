import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work Experience - Azeez Dandawala | Professional Journey",
  description:
    "Professional work experience and career journey of Azeez Dandawala. Internships at Bharat Intern, CodeAlpha, CodeClause, and Oasis Infobyte. Backend & Machine Learning experience with Node.js, React.js, and modern web technologies.",
  keywords:
    "Work Experience, Professional Experience, Software Developer Career, Full Stack Developer Journey, Internships, Backend & Machine Learning Experience, Web Development Career, Azeez Dandawala Experience",
  openGraph: {
    title: "Work Experience - Azeez Dandawala",
    description: "My professional journey as a Backend & Machine Learning",
    url: "https://azeez72.netlify.app/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience - Azeez Dandawala",
    description: "My professional journey as a Backend & Machine Learning",
  },
  alternates: {
    canonical: "/experience",
  },
};


export default function ExperiencePage() {
	return <Experience />;
}