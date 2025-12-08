import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raman Subedi | AI & DevOps Engineer Portfolio",
  description: "Portfolio of Raman Subedi - Aspiring AI & DevOps Engineer specializing in machine learning, artificial intelligence, and modern DevOps practices. Explore my projects and experience.",
  keywords: ["Raman Subedi", "AI Engineer", "DevOps", "Machine Learning", "Artificial Intelligence", "Portfolio"],
  authors: [{ name: "Raman Subedi" }],
  creator: "Raman Subedi",
  publisher: "Raman Subedi",
  metadataBase: new URL("https://ramansubedi.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramansubedi.online",
    title: "Raman Subedi | AI & DevOps Engineer Portfolio",
    description: "Portfolio of Raman Subedi - Aspiring AI & DevOps Engineer specializing in machine learning and AI solutions.",
    siteName: "Raman Subedi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raman Subedi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raman Subedi | AI & DevOps Engineer Portfolio",
    description: "Portfolio of Raman Subedi - Aspiring AI & DevOps Engineer",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
