"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const Home = dynamic(() => import("@/pages/Home"), {
  loading: () => <Loading />,
  ssr: false,
});

const About = dynamic(() => import("@/pages/About"), {
  loading: () => <Loading />,
  ssr: false,
});

const Education = dynamic(() => import("@/pages/Education"), {
  loading: () => <Loading />,
  ssr: false,
});

const Experience = dynamic(() => import("@/pages/Experience"), {
  loading: () => <Loading />,
  ssr: false,
});

const Skills = dynamic(() => import("@/pages/Skills"), {
  loading: () => <Loading />,
  ssr: false,
});

const Projects = dynamic(() => import("@/pages/Projects"), {
  loading: () => <Loading />,
  ssr: false,
});

const Certificates = dynamic(() => import("@/pages/Certificates"), {
  loading: () => <Loading />,
  ssr: false,
});

const Contact = dynamic(() => import("@/pages/Contact"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="education" className="scroll-mt-20">
        <Education />
      </section>
      <section id="experience" className="scroll-mt-20">
        <Experience />
      </section>
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="certificates" className="scroll-mt-20">
        <Certificates />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </Suspense>
  );
}
