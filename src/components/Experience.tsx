import React from 'react';
import { experienceData } from '../data/resumeData';
import { Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Experience
          <div className="absolute bottom-[-5px] left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
        </h2>
        
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="hidden sm:inline text-slate-400">|</span>
                <span className="text-teal-500 font-medium">{exp.company}</span>
              </div>
              
              <div className="flex items-center mb-4 text-sm text-slate-500 dark:text-slate-400">
                <Calendar size={16} className="mr-2" />
                <span>{exp.period}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <ChevronRight size={18} className="flex-shrink-0 text-teal-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;