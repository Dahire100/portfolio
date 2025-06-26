
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left side - Profile Photo and Name */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-1 animate-scale-in hover:scale-110 transition-transform duration-500 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                  <img 
                    src="/lovable-uploads/70ac9811-9ba0-48c9-be1f-ecffe448e0c4.png" 
                    alt="Devendra Ahire"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Devendra Ahire
            </h1>
          </div>

          {/* Right side - Content from uploaded image */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text transition-all duration-500">
              Aspiring Web Developer | Computer Science & Design Student
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Passionate about creating efficient, user-friendly tech solutions with expertise in Web Development and Machine Learning
            </p>

            {/* Resume Download Button - Prominent */}
            <div className="mb-8">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href="/lovable-uploads/523afacd-1d7e-4c15-9d45-910d03523220.png" download="Devendra_Ahire_Resume.png">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <Button variant="outline" size="lg" className="rounded-full p-3 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:border-purple-400 transition-all duration-300 hover:scale-110" asChild>
                <a href="mailto:devendraahire01@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full p-3 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-blue-400 transition-all duration-300 hover:scale-110" asChild>
                <a href="https://www.linkedin.com/in/devendra-ahire" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full p-3 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:border-gray-400 transition-all duration-300 hover:scale-110" asChild>
                <a href="https://github.com/Dahire100" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:border-purple-400 hover:scale-105 transition-all duration-300" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
