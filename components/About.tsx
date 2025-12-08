"use client";

import { motion } from "framer-motion";
import { Code, Database, Cpu, GitBranch, Globe } from "lucide-react";

export default function About() {
  const skills = [
    { icon: Code, name: "Programming", items: ["Python", "C++", "SQL", "JavaScript", "Bash"] },
    { icon: Cpu, name: "AI & ML", items: ["Pandas", "NumPy", "Scikit-learn", "Neural Networks"] },
    { icon: GitBranch, name: "DevOps", items: ["Git", "Docker", "Jenkins", "Linux"] },
    { icon: Database, name: "Backend", items: ["API Integration", "Data Processing"] },
    { icon: Globe, name: "Languages", items: ["English", "Nepali", "German", "Hindi"] },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A highly motivated Information Technology graduate with a strong academic foundation 
            and practical experience in AI, machine learning, and DevOps.
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass glow-border rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary-400">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Bachelor in Information Technology (BIT)</p>
                <p className="text-foreground/70">Tribhuvan University, Nepal</p>
                <p className="text-foreground/60">2019 - 2023</p>
                <p className="text-sm text-foreground/60 mt-2">
                  Specialized in software foundations and data analysis
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent-400">Experience</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Technology Support Intern</p>
                <p className="text-foreground/70">Numa Digital Farm, Biratnagar</p>
                <p className="text-foreground/60">2023 - 2024</p>
                <p className="text-sm text-foreground/60 mt-2">
                  Collaborated with technical teams to optimize workflows
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-foreground/80 leading-relaxed">
              Over the past several months, I have continuously learned and applied cutting-edge 
              technologies. I am eager to deepen my theoretical and practical knowledge through a 
              Master&apos;s program in AI, bringing a disciplined, open-minded mindset and a proficiency 
              in ambition and culture.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass glow-border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-shadow">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold group-hover:text-gradient transition-all">{skill.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/5 text-sm text-foreground/80 border border-white/10 hover:border-primary-400/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
