import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Database, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "C++", "SQL"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-5 w-5" />,
      skills: ["Frontend", "Tailwind CSS", "MERN Stack", "Flask"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "MySQL", "GitHub", "Figma","Canva","Notion", "MS Office"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      skills: ["Time Management", "Task Prioritization", "Problem Solving", "Adaptability", "Team Collaboration"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const getSkillColor = (skill: string, index: number) => {
    const colors = [
      "bg-slate-700 text-slate-200 hover:bg-slate-600 dark:bg-slate-600 dark:text-slate-100 dark:hover:bg-slate-500",
      "bg-slate-600 text-slate-100 hover:bg-slate-500 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600",
      "bg-slate-800 text-slate-200 hover:bg-slate-700 dark:bg-slate-500 dark:text-slate-100 dark:hover:bg-slate-400",
      "bg-slate-700 text-slate-100 hover:bg-slate-600 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-500",
      "bg-slate-600 text-slate-200 hover:bg-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600",
      "bg-slate-800 text-slate-100 hover:bg-slate-700 dark:bg-slate-500 dark:text-slate-200 dark:hover:bg-slate-400",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/40 via-slate-200/30 to-slate-300/40 dark:from-slate-800/40 dark:via-slate-700/30 dark:to-slate-600/40"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-300/20 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-slate-100">Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-on-scroll border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${category.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto bg-gradient-to-r ${category.gradient} p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${getSkillColor(skill, skillIndex)} hover:scale-110 transition-all duration-300 cursor-default shadow-sm hover:shadow-md border-0`}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
