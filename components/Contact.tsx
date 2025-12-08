"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled by the user
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ramansubedi0309@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raman-subedi-55b13b27b/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Raman21676",
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, 
            or just having a chat about AI and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass glow-border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color}`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium group-hover:text-gradient transition-all">
                      {link.name}
                    </span>
                  </a>
                ))}
                
                <a
                  href="https://wa.me/9779824370085?text=Hello%2C%20I%20saw%20your%20portfolio%20website%20and%20wanted%20to%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="font-medium group-hover:text-gradient transition-all">
                    Chat on WhatsApp
                  </span>
                </a>
              </div>
            </div>

            <div className="glass glow-border rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">Quick Info</h3>
              <div className="space-y-3 text-foreground/70">
                <p>📍 Biratnagar, Nepal</p>
                <p>🎓 BIT Graduate, Tribhuvan University</p>
                <p>💼 Aspiring AI & DevOps Engineer</p>
                <p>🌐 ramansubedi.online</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
