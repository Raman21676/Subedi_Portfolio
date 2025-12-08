"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Model Implementation",
      description: "Developed classic machine learning models using Python and Scikit-learn to analyze datasets. Implemented data cleaning, feature engineering, and explored algorithms like decision trees and neural networks.",
      tags: ["Python", "Scikit-learn", "Neural Networks", "Data Analysis"],
      gradient: "from-purple-600 to-pink-600",
      year: "2024",
      icon: Code2,
    },
    {
      title: "DevOps Pipeline Simulation",
      description: "Simulated and automated deployment workflows using Git and Docker containers. Practiced setting up continuous integration (CI) pipelines to automate build processes and managed Linux-based server environments.",
      tags: ["Docker", "Git", "CI/CD", "Linux", "Automation"],
      gradient: "from-blue-600 to-cyan-600",
      year: "2024",
      icon: Code2,
    },
    {
      title: "AI Plant Disease Detection",
      description: "Machine learning project for identifying plant diseases using computer vision techniques. Implemented image classification models to help farmers detect crop diseases early.",
      tags: ["Computer Vision", "TensorFlow", "Image Classification", "AI"],
      gradient: "from-green-600 to-teal-600",
      year: "2023",
      icon: Code2,
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Natural language processing application that analyzes sentiment from text data. Utilized deep learning models to classify emotions and extract insights from customer reviews.",
      tags: ["NLP", "Deep Learning", "Text Analysis", "Python"],
      gradient: "from-orange-600 to-red-600",
      year: "2023",
      icon: Code2,
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of my work in AI, machine learning, and DevOps—combining 
            technical expertise with practical problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group glass glow-border rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-foreground/50">{project.year}</span>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 rounded-lg glass hover:bg-white/10 transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg glass hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-sm text-foreground/80 border border-white/10 hover:border-white/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
