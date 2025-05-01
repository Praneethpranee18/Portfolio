import React from 'react';
import { skillsData } from '../data/resumeData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Skills
          <div className="absolute bottom-[-5px] left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-4 text-teal-500">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm transition-all duration-300 hover:bg-teal-100 dark:hover:bg-teal-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;