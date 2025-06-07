import React from 'react';
import { ExternalLink, Calendar, Code, Users, Award } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const projects = [
    {
      title: "Kubernetes Kind Spring Boot App with Monitoring",
      type: "Internal Project",
      duration: "July 2023 – Apr 2025",
      description: "Designed a comprehensive 3-tier application architecture on Kind cluster with full GitOps automation and monitoring stack.",
      achievements: [
        "Implemented GitOps-style deployment with ArgoCD automation",
        "Configured complete monitoring stack with Prometheus, Grafana, and Kube Prometheus Stack",
        "Created scalable 3-tier architecture (Frontend, Backend, Database)",
        "Automated deployment pipeline with Helm charts and YAML configurations"
      ],
      technologies: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Prometheus", "Grafana", "YAML", "Bash", "Linux"],
      category: "Infrastructure"
    },
    {
      title: "Panasonic Digital SignEdge",
      type: "Enterprise Project",
      duration: "2022 – 2025",
      description: "Deployed enterprise signage system across AWS and on-premises environments with automated infrastructure provisioning.",
      achievements: [
        "Automated infrastructure provisioning using GitHub Actions & CloudFormation",
        "Deployed signage system on AWS EC2 instances and on-premises environments",
        "Implemented PowerShell automation scripts for Windows environments",
        "Created Lambda functions for automated instance management"
      ],
      technologies: ["AWS EC2", "Lambda","ASG","ALB","s3","RDS", "CloudFormation", "GitHub Actions", "PowerShell", "Windows","jenkins","onpremesis env"],
      category: "Cloud Infrastructure"
    },
    {
      title: "Sunlitlive Cloud Application",
      type: "Enterprise Project",
      duration: "2022 – 2025",
      description: "Managed Dockerized applications on AWS with comprehensive monitoring and load balancing solutions.",
      achievements: [
        "Deployed and managed Dockerized applications on EC2 and EKS clusters",
        "Integrated Route 53 for DNS management and ALB for load balancing",
        "Configured RDS for database integration and high availability",
        "Implemented CloudWatch and Grafana for comprehensive monitoring and alerting"
      ],
      technologies: ["Docker", "AWS EKS", "Route 53", "ALB", "RDS", "CloudWatch", "Grafana"],
      category: "Container Orchestration"
    },
    {
      title: "NGL (Natural Gas Liquids) App",
      type: "Azure Enterprise Project",
      duration: "2022 – 2025",
      description: "Deployed secure web application on Azure with VPN-protected database connectivity and automated deployments.",
      achievements: [
        "Deployed web application on Azure App Services with high availability",
        "Configured VPN-secured MySQL database connectivity",
        "Implemented Application Insights for performance monitoring",
        "Automated deployments using Terraform and ARM templates"
      ],
      technologies: ["Azure App Services", "MySQL", "VPN", "Application Insights", "Terraform", "ARM Templates"],
      category: "Azure Cloud"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Infrastructure": isDark ? "bg-blue-900/50 text-blue-300 border border-blue-700" : "bg-blue-100 text-blue-800",
      "Cloud Infrastructure": isDark ? "bg-green-900/50 text-green-300 border border-green-700" : "bg-green-100 text-green-800",
      "Container Orchestration": isDark ? "bg-purple-900/50 text-purple-300 border border-purple-700" : "bg-purple-100 text-purple-800",
      "Azure Cloud": isDark ? "bg-orange-900/50 text-orange-300 border border-orange-700" : "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || (isDark ? "bg-gray-900/50 text-gray-300 border border-gray-700" : "bg-gray-100 text-gray-800");
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Real-world DevOps solutions delivering scalable, secure, and automated infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                isDark 
                  ? 'bg-slate-800 shadow-2xl hover:shadow-blue-500/10' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-slate-800'
                      }`}>{project.title}</h3>
                      <p className={`font-semibold mb-2 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>{project.type}</p>
                    </div>
                  </div>

                  <div className={`flex items-center mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{project.duration}</span>
                  </div>

                  <p className={`mb-6 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>{project.description}</p>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 flex items-center ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      <Award size={16} className="mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className={`text-sm flex items-start ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            isDark ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-3 flex items-center ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      <Code size={16} className="mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                          isDark 
                            ? 'bg-slate-700 text-slate-300' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {tech}
                        </span>
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