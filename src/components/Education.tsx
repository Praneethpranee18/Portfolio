import React from 'react';
import { educationData } from '../data/resumeData';
import { GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Education
          <div className="absolute bottom-[-5px] left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
        </h2>
        
        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2"></div>
          
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'sm:pr-12 sm:ml-auto sm:mr-0' : 'sm:pl-12'
              } sm:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 sm:left-auto sm:right-0 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center transform translate-x-[-50%] sm:translate-x-[50%] z-10">
                <GraduationCap size={18} className="text-white" />
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md ml-8 sm:ml-0 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <div className="flex items-center mb-3 text-slate-600 dark:text-slate-400">
                  <MapPin size={16} className="mr-2" />
                  <span>{edu.institution}, {edu.location}</span>
                </div>
                <p className="text-sm mb-3 text-slate-500">{edu.period}</p>
                {edu.score && (
                  <p className="text-teal-500 font-medium">{edu.score}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;