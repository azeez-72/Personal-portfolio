"use client";

import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import {
  Github,
  Code2,
  BookOpen,
  Copy,
  Check,
  FileDown,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Mail } from 'lucide-react';


const socialLinks = [
  {
    href: "https://github.com/azeez-72",
    icon: Github,
    label: "GitHub",
    ariaLabel: "Visit GitHub profile",
  },
  {
    href: "https://leetcode.com/u/azeez72",
    icon: Code2,
    label: "LeetCode",
    ariaLabel: "Visit LeetCode profile",
  },
  {
    href: "https://medium.com/@azeezdandawala",
    icon: BookOpen,
    label: "Medium",
    ariaLabel: "Visit Medium profile",
  },
];

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = "azeezdandawala@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to copy:", err);
      }
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 640) {
      // sm breakpoint
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Azeez Dandawala
        </motion.h1>
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Backend & Machine Learning
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Developer specializing in Backend Development and Machine Learning —
          building scalable systems, APIs, and intelligent solutions.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <Link
              href="/files/cv_pdf/Azeez_Dandawala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download Resume
            </Link>
            <a
              href="#about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </a>
          </div>

          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-copy sm:cursor-pointer"
            aria-label={`Email: ${email}`}
          >
            <div className="absolute left-0 flex items-center">
              <div className="w-3 text-gray-500 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">
                ~
              </span>
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors ml-4 sm:text-base">
              {email}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hidden sm:block">
              {copied ? (
                <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
              ) : (
                <Copy
                  className="w-4 h-4 text-gray-400 hover:text-white transition-colors"
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 justify-items-center gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-none mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group w-full"
              whileHover={{ y: -2 }}
              aria-label={link.ariaLabel}
            >
              <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
                <Icon
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto"
                  aria-hidden="true"
                />
              </div>
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-base sm:text-lg font-semibold">
                  {link.label}
                </span>
              </motion.div>
            </motion.a>
          );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
