import React, { useState } from 'react';
import { projectsData } from '../data/resumeData';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Projects
          <div className="absolute bottom-[-5px] left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
        </h2>
        
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleProject(index)}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <button
                  className={`transform transition-transform duration-300 text-teal-500 ${
                    activeProject === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              
              <div 
                className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                  activeProject === index ? 'max-h-[1000px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mb-4 text-slate-700 dark:text-slate-300">{project.period}</p>
                <ul className="space-y-2 mb-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {/* {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )} */}
                  
                  {/* {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
                    >
                      <Code size={16} />
                      <span>View Code</span>
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;