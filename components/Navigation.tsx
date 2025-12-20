"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-extrabold text-gradient tracking-wide">
          RAMAN SUBEDI
        </Link>
        
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <a
          href="/Raman_Subedi_Resume.pdf"
          download
          className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-300 font-medium"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
