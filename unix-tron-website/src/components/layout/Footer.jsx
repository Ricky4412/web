import React from 'react';

const Footer = () => {
  const footerLinks = [
    { title: 'Company', links: ['About', 'Careers', 'Blog'] },
    { title: 'Products', links: ['Software', 'Cloud', 'AI Solutions'] },
    { title: 'Support', links: ['Contact', 'Documentation', 'Community'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
  ];

  return (
    <footer className="bg-unix-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-unix-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright text - left aligned in desktop, centered on mobile */}
            <p className="text-gray-400 mb-4 md:mb-0 md:text-left text-center">
              &copy; {new Date().getFullYear()} Unixtron Africa. All rights reserved.
            </p>
            
            {/* Social media icons with brand colors on hover */}
            <div className="flex space-x-5">
              {/* Facebook */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-black transition-colors duration-300"
                aria-label="X (formerly Twitter)"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#333] transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-3.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0012 .3" />
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#E4405F] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.53 1.56 4.66 4.66.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.14 3.12-1.56 4.53-4.66 4.66-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.12-.14-4.53-1.56-4.66-4.66-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.14-3.12 1.56-4.53 4.66-4.66 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.23 0-3.65.01-4.94.07-4.17.19-6.31 2.33-6.5 6.5-.06 1.29-.07 1.71-.07 4.94s.01 3.65.07 4.94c.19 4.17 2.33 6.31 6.5 6.5 1.29.06 1.71.07 4.94.07s3.65-.01 4.94-.07c4.17-.19 6.31-2.33 6.5-6.5.06-1.29.07-1.71.07-4.94s-.01-3.65-.07-4.94c-.19-4.17-2.33-6.31-6.5-6.5-1.29-.06-1.71-.07-4.94-.07zm0 5.81a4.94 4.94 0 100 9.88 4.94 4.94 0 000-9.88zm0 8.16a3.23 3.23 0 110-6.46 3.23 3.23 0 010 6.46zm6.44-8.16a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;