import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Praneeth Mahapathro. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
              Built with <Heart size={14} className="text-red-500 mx-1" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;