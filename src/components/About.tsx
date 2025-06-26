
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-slate-100">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
                Statement of Purpose
              </h3>
              
              <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  As a Computer Science and Design student, I am driven by the endless possibilities 
                  that technology offers to solve real-world problems. My journey in this field began 
                  with curiosity about how digital solutions can make life easier and more efficient.
                </p>
                
                <p>
                  I am passionate about <span className="text-purple-600 dark:text-purple-400 font-semibold">Full Stack Development</span> and 
                  <span className="text-purple-600 dark:text-purple-400 font-semibold"> Machine Learning</span>, where I can combine 
                  creative problem-solving with technical expertise. My experience ranges from building 
                  responsive web applications to developing intelligent systems that can detect misinformation 
                  and track personal habits.
                </p>
                
                <p>
                  What excites me most about technology is its potential to bridge gaps and create 
                  meaningful connections. Whether it's developing user-friendly interfaces or implementing 
                  complex algorithms, I strive to build solutions that are not just functional, but 
                  intuitive and impactful.
                </p>
                
                <p>
                  I am committed to continuous learning and staying updated with emerging technologies. 
                  My goal is to contribute to innovative projects that make a positive difference in 
                  people's lives while growing as a well-rounded software developer.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-purple-50 dark:bg-slate-700 rounded-lg border border-purple-100 dark:border-slate-600">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Interests</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Machine Learning, Web Development, Problem Solving</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg border border-blue-100 dark:border-slate-600">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 dark:bg-slate-700 rounded-lg border border-cyan-100 dark:border-slate-600">
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">1</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Internship Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
