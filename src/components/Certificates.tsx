import React from 'react';
import { certificatesData } from '../data/resumeData';
import { Award } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Certificates
          <div className="absolute bottom-[-5px] left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border-t-4 border-transparent hover:border-teal-500"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform duration-300">
                  <Award size={28} />
                </div>
              </div>
              
              <h3 className="text-center text-lg font-semibold mb-2">{certificate.title}</h3>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">{certificate.issuer}</p>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-1">{certificate.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;