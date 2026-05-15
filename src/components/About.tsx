"use client";

import { motion } from "framer-motion";
import {
  User, Calendar, Mail, Phone, GraduationCap, MapPin,
  Code2, Database, Server, Award, Globe, Smartphone, GitBranch, Layers,
  Github, Linkedin, Instagram
} from "lucide-react";

export default function About() {
  const personalDetails = [
    { icon: <Calendar size={18} />, label: "Birthday", value: "18 March 2002", href: null },
    { icon: <Mail size={18} />, label: "Email", value: "schauhan28275@gmail.com", href: "mailto:schauhan28275@gmail.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+91 8369749453", href: "tel:+918369749453" },
    { icon: <GraduationCap size={18} />, label: "Degree", value: "B.Tech CSE", href: null },
    { icon: <MapPin size={18} />, label: "Location", value: "Mumbai, Maharashtra", href: "https://maps.google.com/?q=Mumbai" },
    { icon: <Github size={18} />, label: "GitHub", value: "github.com/schauhan2001", href: "https://github.com/schauhan2001" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/shubhamchauhan", href: "https://www.linkedin.com/in/shubhamchauhan" },
    { icon: <Instagram size={18} />, label: "Instagram", value: "@_shubhamm_369", href: "https://www.instagram.com/_shubhamm_369" },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10 dark:bg-blue-400/10",
      border: "border-blue-500/20 dark:border-blue-400/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      skills: [
        { name: "React & Next.js", icon: <Globe size={16} /> },
        { name: "JavaScript & TypeScript", icon: <Code2 size={16} /> },
        { name: "HTML5 & CSS3", icon: <Layers size={16} /> },
        { name: "Tailwind CSS", icon: <Smartphone size={16} /> },
      ],
    },
    {
      title: "Backend",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
      border: "border-emerald-500/20 dark:border-emerald-400/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      skills: [
        { name: "Node.js & Express", icon: <Server size={16} /> },
        { name: "Python & Django", icon: <Code2 size={16} /> },
      ],
    },
    {
      title: "Database",
      color: "from-violet-500 to-purple-500",
      bg: "bg-violet-500/10 dark:bg-violet-400/10",
      border: "border-violet-500/20 dark:border-violet-400/20",
      iconColor: "text-violet-600 dark:text-violet-400",
      skills: [
        { name: "MongoDB", icon: <Database size={16} /> },
        { name: "PostgreSQL", icon: <Database size={16} /> },
        { name: "MySQL", icon: <Database size={16} /> },
        { name: "MSSQL", icon: <Database size={16} /> },
      ],
    },
    {
      title: "Tools & Certificates",
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-500/10 dark:bg-amber-400/10",
      border: "border-amber-500/20 dark:border-amber-400/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      skills: [
        { name: "Git & GitHub", icon: <GitBranch size={16} /> },
        { name: "MERN Stack Certificate", icon: <Award size={16} /> },
        { name: "Technical Quiz Certificate", icon: <Award size={16} /> },
        { name: "Gemini Google Certificate", icon: <Award size={16} /> },
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 rounded-full text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Know Who I Am
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Details - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-md rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-white/10 hover:border-primary-500/30 dark:hover:border-primary-400/30 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-primary-500/10 dark:bg-primary-400/10 flex items-center justify-center text-primary-600 dark:text-primary-400 border border-primary-500/20 dark:border-primary-400/20">
                <User size={22} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Personal Details
              </h3>
            </div>

            <p className="text-slate-500 dark:text-slate-300 mb-8 leading-relaxed text-[15px]">
              I am a dedicated software developer based in Mumbai, currently pursuing my B.Tech in Computer Science & Engineering. I have a strong foundation in modern web technologies and a passion for creating seamless, responsive digital experiences.
            </p>

            {/* Info rows */}
            <div className="space-y-3 mb-7">
              {[
                { icon: <Calendar size={16} />, label: "Birthday", value: "18 March 2002" },
                { icon: <GraduationCap size={16} />, label: "Degree", value: "B.Tech CSE" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 py-2 border-b border-slate-100 dark:border-white/5">
                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary-500/10 dark:bg-primary-400/10 text-primary-500 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest w-24 flex-shrink-0">{item.label}</span>
                  <span className="text-slate-700 dark:text-slate-200 font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Mail size={18} />, label: "Mail Now", value: "schauhan28275@gmail.com", href: "mailto:schauhan28275@gmail.com", color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-400/10 border-cyan-500/20 dark:border-cyan-400/20", hoverBg: "hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500" },
                { icon: <Phone size={18} />, label: "Call Now", value: "+91 8369749453", href: "tel:+918369749453", color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-400/10 border-emerald-500/20 dark:border-emerald-400/20", hoverBg: "hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500" },
                { icon: <MapPin size={18} />, label: "Location", value: "Mumbai, India", href: "https://maps.google.com/?q=Mumbai", color: "text-rose-600 dark:text-rose-400 bg-rose-500/10 dark:bg-rose-400/10 border-rose-500/20 dark:border-rose-400/20", hoverBg: "hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500" },
                { icon: <Github size={18} />, label: "GitHub", value: "schauhan2001", href: "https://github.com/schauhan2001", color: "text-slate-700 dark:text-slate-200 bg-slate-500/10 dark:bg-white/10 border-slate-500/20 dark:border-white/10", hoverBg: "hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700" },
                { icon: <Linkedin size={18} />, label: "LinkedIn", value: "shubhamchauhan", href: "https://www.linkedin.com/in/shubhamchauhan", color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/10 border-blue-500/20 dark:border-blue-400/20", hoverBg: "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600" },
                { icon: <Instagram size={18} />, label: "Instagram", value: "@_shubhamm_369", href: "https://www.instagram.com/_shubhamm_369", color: "text-pink-600 dark:text-pink-400 bg-pink-500/10 dark:bg-pink-400/10 border-pink-500/20 dark:border-pink-400/20", hoverBg: "hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500" },
              ].map((card, i) => (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex flex-col items-start p-4 rounded-2xl border transition-all duration-300 group ${card.color} ${card.hoverBg}`}
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform">{card.icon}</div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-0.5">{card.label}</p>
                  <p className="text-[12px] font-semibold leading-tight break-all">{card.value}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Skills - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-md rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-white/10 hover:border-primary-500/30 dark:hover:border-primary-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              My Skills
            </h3>

            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <h4 className={`text-xs font-bold uppercase tracking-widest ${category.iconColor}`}>
                      {category.title}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        whileHover={{ scale: 1.04, x: 4 }}
                        className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl border ${category.bg} ${category.border} cursor-default transition-all`}
                      >
                        <span className={category.iconColor}>{skill.icon}</span>
                        <span className="text-[13px] font-medium text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
