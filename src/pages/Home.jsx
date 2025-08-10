import { bio } from '../config/projects';
import { skillsData, skillCategories } from '../config/skills';
import { Link } from 'react-router-dom'; 
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-900/30 dark:to-purple-900/30">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="relative inline-block">
                {/* Option 1: Use Profile Image */}
                <img 
                  src="/images/najar.jpg" 
                  alt={bio.name}
                  className="w-48 h-48 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
                />
                
                {/* Option 2: Use Initial (Current) */}
                {/* <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl flex items-center justify-center">
                  <span className="text-white text-5xl font-bold">
                    {bio.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div> */}
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{bio.name}</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-8">
              {bio.title}
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {bio.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I work with a variety of technologies to create amazing digital experiences
            </p>
          </div>

          {/* Skills Grid with Icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {/* Skill Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-white text-2xl">
                    {skill.icon}
                  </span>
                </div>
                
                {/* Skill Name */}
                <h3 className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill Category */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {skill.category}
                </p>
              </div>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="flex flex-wrap justify-center gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center min-w-[220px]">
                <div className={`w-16 h-16 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 