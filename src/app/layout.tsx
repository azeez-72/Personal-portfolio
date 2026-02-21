import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Background3D from "@/components/Background3D";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Azeez Dandawala - Backend & Machine Learning",
    template: "%s | Azeez Dandawala",
  },
  description:
    "Azeez Dandawala - Backend & Machine Learning specializing in Backend Development and Machine Learning. Expert in building scalable systems, APIs, and intelligent solutions. Based in Stony Brook, NY, USA.",

  // Extended keywords for better SEO
  keywords: [
    // Name variations
    "Azeez Dandawala",
    "azeez-72",
    "azeez-dandawala",

    // Technologies - Frontend
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Progressive Web Apps",
    "PWA",

    // Technologies - Backend
    "Node.js",
    "Express.js",
    "REST API",
    "GraphQL",
    "Server-Side Rendering",
    "SSR",

    // Technologies - Database
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "SQL",
    "Database Design",
    "Database Development",

    // Technologies - DevOps/Tools
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Cloud Computing",
    "CI/CD",
    "Vercel",

    // Skills
    "Web Development",
    "Web Applications",
    "Full Stack Development",
    "Modern Web Technologies",
    "Scalable Applications",
    "Performance Optimization",
    "SEO Optimization",

    // Location
    "Kolkata Developer",
    "West Bengal Developer",
    "India Developer",
    "Remote Developer",

    // Services
    "Portfolio",
    "Hire Developer",
    "Freelance Developer",
    "Web Development Services",
  ].join(", "),

  authors: [
    {
      name: "Azeez Dandawala",
      url: "https://azeez72.netlify.app",
    },
  ],
  creator: "Azeez Dandawala",
  publisher: "Azeez Dandawala",

  // Manifest
  manifest: "/manifest.json",

  // App-specific metadata
  applicationName: "Azeez Dandawala Portfolio",

  // OpenGraph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azeez72.netlify.app/",
    title: "Azeez Dandawala - Backend & Machine Learning",
    description:
      "Backend & Machine Learning specializing in Backend Development and Machine Learning. Expert in building scalable systems, APIs, and intelligent solutions.",
    siteName: "Azeez Dandawala Portfolio",
    images: [
      {
        url: "https://azeez72.netlify.app/profile/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Azeez Dandawala - Backend & Machine Learning",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Azeez Dandawala - Backend & Machine Learning",
    description:
      "Backend & Machine Learning specializing in Backend Development and Machine Learning. Expert in building scalable systems, APIs, and intelligent solutions.",
    creator: "@azeez-dandawala",
    images: ["https://azeez72.netlify.app/profile/profile.jpg"],
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Base URL for relative URLs
  metadataBase: new URL("https://azeez72.netlify.app"),

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Verification
  verification: {
    google: "googlea4a36904e14398c1",
    // Add other verifications if needed
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Additional metadata
  category: "technology",

  // Structured data will be added via JSON-LD in the component
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Azeez Dandawala",
      alternateName: "Azeez Dandawala",
    url: "https://azeez72.netlify.app",
    image: "https://azeez72.netlify.app/profile/profile.jpg",
    sameAs: [
      "https://github.com/azeez-72",
      "https://linkedin.com/in/azeez-dandawala",
    ],
    jobTitle: "Backend & Machine Learning",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stony Brook",
      addressRegion: "New York",
      addressCountry: "USA",
    },
    email: "azeezdandawala@gmail.com",
    telephone: "+1 (934) 221-6299",
    knowsAbout: [
      "Full Stack Development",
      "Backend Development",
      "Machine Learning",
      "Data Science",
      "Data Engineering",
      "API Development",
      "Cloud Computing",
      "DevOps",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Stony Brook University",
    },
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Favicons */}
        <link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/nextjs.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/nextjs.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/nextjs.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Azeez Dandawala Portfolio" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SpeedInsights />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
