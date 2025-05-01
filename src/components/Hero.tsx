import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    
    heading.innerHTML = heading.textContent!.replace(/\S/g, "<span class='inline-block hover:text-teal-500 hover:translate-y-[-5px] transition-all duration-300'>$&</span>");
  }, []);

  return (
    <section id="about" className="min-h-screen pt-24 pb-16 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-1 w-16 mb-6"></div>
        <p className="text-teal-500 font-medium mb-4">Hello, my name is</p>
        <h1 
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Praneeth Mahapathro
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate-400 mb-6">
          Computer Science Engineering Student
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mb-8">
          I'm a passionate tech enthusiast specializing in software development and data analysis.
          Currently pursuing my BTech in Computer Science Engineering at Lovely Professional University.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/praneeth-mahapathro-835102253"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Praneethpranee18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-colors duration-300"
          >
            <GitHub size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:praneethmahapatro46@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a
            href="tel:+918309238835"
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
          >
            <Phone size={18} />
            <span>Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;