
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "K K Wagh Institute of Engineering Education & Research, Nashik",
      degree: "Bachelor of Technology",
      branch: "Computer Science & Design",
      duration: "2022 - 2026",
      // cgpa: "8.2",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      institution: "Loknete Vyankatrao Hiray Arts, Science & Commerce College, Panchavati, Nashik-03",
      degree: "Higher Secondary Certificate (HSC)",
      branch: "Science",
      duration: "March 2021 - March 2022",
      // cgpa: "63%",
      icon: <School className="h-6 w-6" />,
    },
    {
      institution: "Pethe High School, Nashik",
      degree: "Secondary School Certificate (SSC)",
      branch: "",
      duration: "March 2019 - March 2020",
      // cgpa: "87.60%",
      icon: <School className="h-6 w-6" />,
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              My academic journey in Computer Science and Design
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border animate-on-scroll">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {edu.institution}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="text-sm">
                          {edu.degree}
                        </Badge>
                        {edu.branch && (
                          <Badge variant="outline" className="text-sm">
                            {edu.branch}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">{edu.duration}</div>
                      <div className="text-lg font-semibold text-primary">{edu.cgpa}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
