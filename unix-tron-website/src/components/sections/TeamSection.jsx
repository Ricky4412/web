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
    <section className="py-2 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The experienced professionals driving our vision forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Team Member Image */}
              <div className="h-64 w-full overflow-hidden bg-white">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                        ${member.name.split(' ').map(name => name[0]).join('')}
                      </div>`;
                  }}
                />
              </div>
              
              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                {/* Social Media Links with original colors */}
                <div className="flex space-x-4 place-content-center">
                  {/* LinkedIn - Blue */}
                  <a 
                    href={member.linkedin} 
                    className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                  {/* X (Twitter) - Black */}
                  <a 
                    href={member.twitter} 
                    className="text-black hover:text-gray-700 transition-colors duration-300"
                    aria-label={`${member.name} X (Twitter)`}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                  
                  {/* GitHub - Dark Gray */}
                  <a 
                    href={member.github} 
                    className="text-[#333] hover:text-[#555] transition-colors duration-300"
                    aria-label={`${member.name} GitHub`}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-3.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0012 .3"/>
                    </svg>
                  </a>
                  
                  {/* Instagram - Gradient */}
                  <a 
                    href={member.instagram} 
                    className="hover:opacity-80 transition-opacity duration-300"
                    aria-label={`${member.name} Instagram`}
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24">
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
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals passionate about technology innovation.
          </p>
          <a 
            href="/careers" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;