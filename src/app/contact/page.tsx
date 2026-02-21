import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Contact Azeez Dandawala",
  description:
    "Get in touch with Azeez Dandawala for web development projects, freelance work, collaboration opportunities, or job inquiries. Email: azeezdandawala@gmail.com | Phone: +1 (934) 221-6299. Based in Stony Brook, NY, USA. Available for remote work worldwide.",
  keywords:
    "Contact Azeez Dandawala, Hire Full Stack Developer, Freelance Web Developer, Contact Web Developer, Hire MERN Stack Developer, Web Development Services, Remote Developer Hire, Developer Contact Stony Brook, NY, USA",
  openGraph: {
    title: "Contact Azeez Dandawala - Full Stack Developer",
    description: "Get in touch for web development projects and collaboration",
    url: "https://{tbd}/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Azeez Dandawala",
    description: "Get in touch for web development projects",
  },
  alternates: {
    canonical: "/contact",
  },
};


export default function ContactPage() {
	return <Contact />;
}