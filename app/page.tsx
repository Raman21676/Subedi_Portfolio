import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/About'));
const Projects = dynamic(() => import('@/components/Projects'));
const ResumeDownload = dynamic(() => import('@/components/ResumeDownload'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Raman Subedi | Senior AI/ ML & DevOps Engineer | Python Developer Nepal',
  description: 'Raman Subedi - AI Engineer and DevOps specialist from Nepal. Expertise in Python, Machine Learning, Data Analytics, Docker, CI/CD, and Backend Development. BIT Graduate building scalable intelligent systems.',
  keywords: [
    'Raman Subedi',
    'AI Engineer Nepal',
    'AI Engineer',
    'Artificial Intelligence',
    'AI',
    'AI Engineer',
    'AI & ML',
    'Python Developer',
    'Python',
    'pyhton',
    'Python Developer',
    'Machine Learning Engineer',
    'Machine Learning',
    'ML',
    'Machine Learning Engineer',
    'machine learning engineer',
    'Best',
    'Best Developer',
    'Best AI Engineer',
    'Best DevOps Engineer',
    'best deveops engineer',
    'best ai engineer',
    'best developer',
    'best ai engineer nepal',
    'best devops engineer nepal',
    'best developer nepal',
    'best ai engineer nepal',
    'best devops engineer nepal',
    'best developer nepal',
    'DevOps Engineer',
    'Data Analytics',
    'Data Science',
    'Data Science Engineer',
    'Backend Developer',
    'Docker',
    'CI/CD',
    'Kathmandu Nepal',
    'Artificial Intelligence',
    'Scikit-learn',
    'Jenkins',
    'Neural Networks'
  ],
  authors: [{ name: 'Raman Subedi', url: 'https://www.ramansubedi.com' }],
  creator: 'Raman Subedi',
  publisher: 'Raman Subedi',
  metadataBase: new URL('https://www.ramansubedi.com'),
  alternates: {
    canonical: 'https://www.ramansubedi.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ramansubedi.com',
    title: 'Raman Subedi | AI/ML & DevOps Engineer',
    description: 'AI Engineer and DevOps specialist from Nepal with expertise in Python, Machine Learning, Docker, and scalable systems.',
    siteName: 'Raman Subedi Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You'll add this image later
        width: 1200,
        height: 630,
        alt: 'Raman Subedi - AI/ML & DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raman Subedi | AI/ML & DevOps Engineer',
    description: 'AI Engineer from Nepal specializing in Python, Machine Learning, and DevOps',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ResumeDownload />
      <Contact />
      <Footer />
    </main>
  );
}