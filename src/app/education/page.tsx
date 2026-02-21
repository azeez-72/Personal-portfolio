import Education from "@/pages/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education - Azeez Dandawala | Masters in Computer Science",
  description:
    "Educational background of Azeez Dandawala. Masters in Computer Science from Stony Brook University, New York. Academic achievements and certifications in backend development, programming, and software engineering.",
  keywords:
    "Education, Masters Computer Science, Engineering Degree, Stony Brook University, Academic Background, Backend Development, Software Engineering Education, Azeez Dandawala Education",
  openGraph: {
    title: "Education - Azeez Dandawala",
    description: "My educational background and academic journey",
    url: "https://{tbd}/education",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education - Azeez Dandawala",
    description: "My educational background",
  },
  alternates: {
    canonical: "/education",
  },
};

export default function EducationPage() {
  return <Education />;
}
