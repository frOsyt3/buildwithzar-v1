import { bio } from '../config/projects';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know me better - my journey, passion, and what drives me in the world of web development.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            {/* Avatar Section */}
            <div className="text-center mb-8">
              {/* Option 1: Use Image */}
              <img 
                src="/images/najar.jpg" 
                alt="Nazar Nur Fauzan" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
              />
              
              {/* Option 2: Use Initial (Current) */}
              {/* <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">
                  {bio.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div> */}
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {bio.name}
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {bio.title}
              </p>
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{bio.experience} Experience</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{bio.education}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{bio.location}</span>
              </div>
            </div>
          </div>

          {/* My Story */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Story
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                {bio.description}
              </p>
              <p>
                {bio.about?.story}
              </p>
              <p>
                {bio.about?.passion}
              </p>
              <p>
                {bio.about?.goals}
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bio.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience Timeline
          </h2>
          
          <div className="space-y-8">
            {bio.experience_timeline.map((experience, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {experience.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {experience.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 