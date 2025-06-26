
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const Internships = () => {
  const internshipData = [
    {
      company: "BLUESTOCK",
      role: "Software Development Intern",
      duration: "NOV 2024 - DEC 2024",
      type: "Remote",
      responsibilities: [
        "Worked as Frontend Developer integrating responsive dashboards using HTML and CSS",
        "Collaborated with a team of 5 to fix UI bugs and enhance client-facing interfaces",
        "Supported backend team with Django-based APIs for seamless functionality"
      ],
      technologies: ["HTML", "CSS", "Django", "Git", "Agile"],
      achievements: [
        "Successfully delivered responsive dashboard interfaces",
        "Improved user experience through UI/UX enhancements",
        "Gained hands-on experience in full-stack development"
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Internships</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Professional experience and learning journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {internshipData.map((internship, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-on-scroll">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors duration-300">
                          {internship.company}
                        </CardTitle>
                        <Badge variant="secondary">{internship.type}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {internship.role}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {internship.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {internship.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Internships;
