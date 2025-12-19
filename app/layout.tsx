import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Raman Subedi | AI Engineer & DevOps Specialist | Python Developer Nepal',
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
    'Biratnagar Nepal',
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
    title: 'Raman Subedi | AI & DevOps Engineer',
    description: 'AI Engineer and DevOps specialist from Nepal with expertise in Python, Machine Learning, Docker, and scalable systems.',
    siteName: 'Raman Subedi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raman Subedi - AI & DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raman Subedi | AI & DevOps Engineer',
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
  verification: {
    google: 'your-google-verification-code', // You'll add this later from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raman Subedi',
    url: 'https://www.ramansubedi.com',
    image: 'https://www.ramansubedi.com/profile-photo.jpg',
    jobTitle: 'AI & DevOps Engineer',
    description: 'AI Engineer and DevOps specialist from Nepal with expertise in Python, Machine Learning, and scalable systems',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Professional',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Tribhuvan University',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Nepal',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Biratnagar',
      addressRegion: 'Koshi',
      addressCountry: 'Nepal',
    },
    email: 'whoiskalikali@gmail.com',
    telephone: '+977-9824370085',
    sameAs: [
      'https://www.linkedin.com/in/raman-subedi-55b13b27b',
      'https://github.com/Raman21676',
      'https://www.ramansubedi.com.np',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Python Programming',
      'DevOps',
      'Data Analytics',
      'Docker',
      'CI/CD',
      'Backend Development',
      'Linux System Administration',
      'Git',
      'Neural Networks',
      'Scikit-learn',
      'Jenkins',
      'Data Engineering',
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
      {
        '@type': 'Language',
        name: 'Nepali',
        alternateName: 'ne',
      },
      {
        '@type': 'Language',
        name: 'German',
        alternateName: 'de',
      },
      {
        '@type': 'Language',
        name: 'Hindi',
        alternateName: 'hi',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://www.ramansubedi.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}