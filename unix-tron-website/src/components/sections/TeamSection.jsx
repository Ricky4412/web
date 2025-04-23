import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nana K.B Eric",
      role: "CEO & Founder",
      bio: "20+ years in enterprise technology leadership. Former Operations Manager at Nextforce Technologies Inc.",
      image: "/assets/eric.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      instagram: "#"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Cloud architecture expert with specialization in scalable infrastructure design.",
      image: "/assets/john.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      instagram: "#"
    },
    {
      name: "Michael Johnson",
      role: "Head of Security",
      bio: "Cybersecurity strategist with government and financial sector experience.",
      image: "/assets/hagan.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      instagram: "#"
    },
    {
      name: "Sarah Williams",
      role: "Lead Developer",
      bio: "Full-stack development specialist with focus on performance optimization.",
      image: "/images/team/developer.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#",
      instagram: "#"
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Techy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJyZ2JhKDEwMiwxMjYsMjM0LDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-sm font-semibold tracking-wider mb-6">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Leadership
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The experienced professionals driving innovation and excellence at Unixtron Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white border-opacity-10"
            >
              {/* Team Member Image */}
              <div className="relative pt-[100%] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.innerHTML = `
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
                          ${member.name.split(' ').map(name => name[0]).join('')}
                        </div>`;
                    }}
                  />
                </div>
              </div>
              
              {/* Team Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-300 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                
                {/* Social Media Links - Fixed clickable area */}
                <div className="flex justify-center space-x-4">
                  {/* LinkedIn */}
                  <a 
                    href={member.linkedin} 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                  {/* Twitter */}
                  <a 
                    href={member.twitter} 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                    aria-label={`Follow ${member.name} on Twitter`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                  
                  {/* GitHub */}
                  <a 
                    href={member.github} 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                    aria-label={`View ${member.name}'s GitHub profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-3.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0012 .3"/>
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href={member.instagram} 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                    aria-label={`Follow ${member.name} on Instagram`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#instagram-gradient)" d="M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.53 1.56 4.66 4.66.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.14 3.12-1.56 4.53-4.66 4.66-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.12-.14-4.53-1.56-4.66-4.66-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.14-3.12 1.56-4.53 4.66-4.66 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.23 0-3.65.01-4.94.07-4.17.19-6.31 2.33-6.5 6.5-.06 1.29-.07 1.71-.07 4.94s.01 3.65.07 4.94c.19 4.17 2.33 6.31 6.5 6.5 1.29.06 1.71.07 4.94.07s3.65-.01 4.94-.07c4.17-.19 6.31-2.33 6.5-6.5.06-1.29.07-1.71.07-4.94s-.01-3.65-.07-4.94c-.19-4.17-2.33-6.31-6.5-6.5-1.29-.06-1.71-.07-4.94-.07zm0 5.81a4.94 4.94 0 100 9.88 4.94 4.94 0 000-9.88zm0 8.16a3.23 3.23 0 110-6.46 3.23 3.23 0 010 6.46zm6.44-8.16a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-white mb-4">Join Our Growing Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            We're always looking for talented individuals passionate about technology innovation.
          </p>
          <a 
            href="/careers" 
            className="inline-block relative overflow-hidden group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <span className="relative z-10">View Open Positions</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;