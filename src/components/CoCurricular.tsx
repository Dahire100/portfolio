
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Award, Users, BookOpen, Calendar } from 'lucide-react';

const CoCurricular = () => {
  const activities = [
    {
      title: "CSD Support GitHub Repo Maintainer",
      icon: <Github className="h-6 w-6" />,
      description: "Offers: Question Papers, Notes, Practical Codes",
      details: "Helps 1st to 4th year students with direct academic resources",
      link: "https://github.com/Dahire100/CS-Notes",
      gradient: "from-purple-500 to-blue-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Student Ambassador – LetsUpgrade",
      icon: <Award className="h-6 w-6" />,
      description: "Representing LetsUpgrade platform as Student Ambassador",
      details: "Promoting learning opportunities and connecting students with resources",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    }
  ];

  const certifications = [
    {
      title: "Cloud Bootcamp – GeeksforGeeks",
      date: "Oct 2023",
      skills: "Cloud fundamentals, deployment models",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Blockchain Bootcamp – IDS Inc.",
      date: "Dec 2024",
      skills: "Blockchain basics, decentralized apps",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Python (Basic) – HackerRank",
      date: "Apr 2024",
      skills: "Python logic, DSA basics",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "AWS Academy Cloud Foundations – Credly",
      date: "Apr 2025",
      skills: "AWS services, cloud infrastructure",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Digital Marketing – IIDe",
      date: "July 2023",
      skills: "SEO basics, digital strategy",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="cocurricular" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
              Co-Curricular & Certificates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
              Leadership roles and professional certifications
            </p>
          </div>

          {/* Co-Curricular Activities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">
              Co-Curricular Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {activities.map((activity, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-on-scroll border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden"
                >
                  <div className={`h-1 bg-gradient-to-r ${activity.gradient}`}></div>
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto bg-gradient-to-r ${activity.gradient} p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                      {activity.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className={`p-4 ${activity.bgColor} rounded-lg border border-slate-200 dark:border-slate-600`}>
                      <p className="text-slate-700 dark:text-slate-200 font-medium mb-2">
                        {activity.description}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {activity.details}
                      </p>
                    </div>
                    
                    {activity.link && (
                      <div className="flex justify-center">
                        <a
                          href={activity.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Github className="h-4 w-4" />
                          View Repository
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-500 animate-on-scroll border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden"
                >
                  <div className={`h-1 bg-gradient-to-r ${cert.gradient}`}></div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      <span className="font-medium">Skills:</span> {cert.skills}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoCurricular;
