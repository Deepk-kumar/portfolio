import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  const experiences = [
    {
      company: "Impressico Business Solutions",
      position: "DevOps Engineer",
      duration: "Oct 2022 – May 2025",
      location: "Remote",
      projects: ["Panasonic Digital SignEdge", "Sunlitlive", "NGL"],
      achievements: [
        "Managed and deployed over 86 AWS environments with Jenkins & GitHub Actions automation",
        "Automated CI/CD pipelines using OIDC-based GitHub Actions and CloudFormation",
        "Created Lambda functions for instance scheduling, improving operational efficiency",
        "Deployed Dockerized apps on EC2 and EKS clusters, ensuring scalability",
        "Configured Route 53, ALB, RDS, ensuring DNS routing, load balancing, and DB integration",
        "Deployed Azure App Services and Static Web Apps connected to MySQL over VPN",
        "Used Terraform, CloudFormation, ARM Templates for fully automated infrastructure",
        "Integrated CloudWatch, Grafana, and Prometheus for monitoring and alerting"
      ]
    },
    {
      company: "Pepcoding Education Pvt Ltd",
      position: "Full Stack Developer Intern",
      duration: "Jan 2022 – July 2022",
      location: "Remote",
      projects: ["Learning Management System"],
      achievements: [
        "Resolved backend issues, optimized performance through debugging and log analysis",
        "Contributed to the frontend/backend of a learning management application",
        "Improved application performance and user experience through code optimization",
        "Collaborated with development team on feature implementation and bug fixes"
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Professional Experience
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Building and scaling cloud infrastructure across enterprise applications
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                isDark 
                  ? 'bg-slate-800 shadow-2xl hover:shadow-blue-500/10' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>{exp.position}</h3>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>{exp.company}</h4>
                    
                    <div className={`flex items-center mb-2 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    
                    <div className={`flex items-center mb-4 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    {exp.projects.length > 0 && (
                      <div>
                        <h5 className={`font-semibold mb-2 ${
                          isDark ? 'text-white' : 'text-slate-800'
                        }`}>Key Projects:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project, idx) => (
                            <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                              isDark 
                                ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2">
                    <h5 className={`font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>Key Achievements:</h5>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start">
                          <ChevronRight className={`mt-1 mr-3 flex-shrink-0 ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`} size={16} />
                          <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}