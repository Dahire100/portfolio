
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PrepVista - Smart Interview Evaluation & Feedback System",
      description: "AI-Powered Mock Interview Platform: Developed a smart web app that conducts interactive mock interviews with real-time analysis of posture, speech tone, and interruptions. Personalized Feedback System: Provided instant, AI-driven feedback to improve users' communication, confidence, and presentation skills.",
      techStack: ["AI/ML", "MERN Stack", "Real-time Analysis", "Speech Processing"],
      codeLink: "#",
      liveLink: "#",
      duration: "Jan 2025 - Nov 2025",
      category: "AI/ML"
    },
    {
      title: "CareerRoad AI | Code",
      description: "Built a full-stack web app that generates personalized career roadmaps, matches job roles, and provides resume feedback. Integrated a dynamic dashboard with an AI chatbot for real-time career support.",
      techStack: ["Next.js", "Tailwind CSS", "Firebase", "ShadCN UI", "TypeScript", "OpenAI"],
      codeLink: "#",
      liveLink: "#",
      duration: "May 2025 - Jun 2025",
      category: "Full Stack"
    },
    {
      title: "Get Set Code",
      description: "Designed and developed a comprehensive platform offering structured learning roadmaps in programming, data science, and tech fields. Created beginner-to-advanced guides to help users efficiently acquire skills and complete courses.",
      techStack: ["HTML", "CSS", "JavaScript", "Figma", "Canva"],
      codeLink: "https://github.com/Dahire100/Get-Set-Code",
      liveLink: "https://get-set-code.netlify.app/",
      duration: "Jan 2024 - May 2024",
      category: "Web Development"
    },
    {
      title: "Fake News Detection System",
      description: "Developed an intelligent system to detect fake news using NLP, machine learning, and deep learning techniques. Utilized advanced text analysis to classify news as real or fake, addressing misinformation challenges.",
      techStack: ["Python", "NLP", "Machine Learning", "Deep Learning", "TensorFlow", "scikit-learn"],
      codeLink: "https://github.com/Dahire100/Fake_News_Detection",
      liveLink: "#",
      duration: "Nov 2024 - Dec 2024",
      category: "AI/ML"
    },
    {
      title: "Routine Tracker",
      description: "Created a clean, minimalist habit tracker for managing daily routines and tracking progress. Implemented responsive design to ensure seamless use across devices with intuitive user interface.",
      techStack: ["React.js", "Vite", "Tailwind CSS"],
      codeLink: "https://github.com/Dahire100/routine-tracker",
      liveLink: "https://happy-routine-tracker.lovable.app/",
      duration: "Feb 2025",
      category: "React"
    },
    {
      title: "Remindify Healthy",
      description: "Built a responsive health and medication reminder app with task visualization, scheduled notifications, and accessibility-focused UI. Features include comprehensive health tracking and user-friendly design.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "PostCSS", "Vite", "Bun", "npm"],
      codeLink: "https://github.com/Dahire100/remindify-healthy",
      liveLink: "https://github.com/Dahire100/remindify-healthy",
      duration: "Apr 2025",
      category: "Health Tech"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "bg-gradient-to-r from-purple-500 to-pink-500",
      "Full Stack": "bg-gradient-to-r from-blue-500 to-cyan-500",
      "Web Development": "bg-gradient-to-r from-green-500 to-teal-500",
      "React": "bg-gradient-to-r from-blue-400 to-blue-600",
      "Health Tech": "bg-gradient-to-r from-red-400 to-pink-500"
    };
    return colors[category] || "bg-gradient-to-r from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Innovative solutions and creative projects showcasing my technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-on-scroll border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 dark:bg-slate-800/80 dark:hover:bg-slate-800/90 overflow-hidden">
                <div className={`h-2 ${getCategoryColor(project.category)}`}></div>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl md:text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      {project.duration}
                    </Badge>
                  </div>
                  <Badge className={`w-fit mb-3 text-white ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs hover:scale-110 transition-transform duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" size="sm" asChild className="flex-1 hover:border-purple-400 hover:text-purple-600 transition-colors duration-300">
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
