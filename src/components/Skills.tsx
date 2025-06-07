import React from 'react';
import { Cloud, Code, Database, Monitor, Settings, Shield } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: isDark ? "bg-blue-600" : "bg-blue-500",
      skills: [
        { name: "AWS", level: 90, details: "EC2, Auto Scaling, VPC, IAM, ALB, RDS, Lambda, S3, CloudWatch, CloudFormation" },
        { name: "Azure", level: 85, details: "App Services, MySQL, Static Web Apps, Blob Storage, Application Insights, VPN" }
      ]
    },
    {
      title: "CI/CD & IaC",
      icon: Settings,
      color: isDark ? "bg-green-600" : "bg-green-500",
      skills: [
        { name: "GitHub Actions", level: 95, details: "OIDC, Workflow automation, Secrets management" },
        { name: "Jenkins", level: 85, details: "Pipeline creation, Build automation, Integration" },
        { name: "Terraform", level: 90, details: "Infrastructure as Code, State management, Modules" },
        { name: "CloudFormation", level: 85, details: "Stack management, Template creation, Automation" }
      ]
    },
    {
      title: "Containerization",
      icon: Database,
      color: isDark ? "bg-purple-600" : "bg-purple-500",
      skills: [
        { name: "Docker", level: 95, details: "Containerization, Multi-stage builds, Docker Compose" },
        { name: "Kubernetes", level: 90, details: "EKS, Deployments, Services, Helm charts, Kind" },
        { name: "Helm", level: 80, details: "Chart creation, Package management, Templating" }
      ]
    },
    {
      title: "Monitoring & Logging",
      icon: Monitor,
      color: isDark ? "bg-orange-600" : "bg-orange-500",
      skills: [
        { name: "Prometheus", level: 85, details: "Metrics collection, Alerting, PromQL" },
        { name: "Grafana", level: 90, details: "Dashboard creation, Visualization, Alerting" },
        { name: "CloudWatch", level: 85, details: "AWS monitoring, Log analysis, Metrics" },
        { name: "Azure Monitor", level: 80, details: "Application insights, Metrics, Alerting" }
      ]
    },
    {
      title: "Scripting & Development",
      icon: Code,
      color: isDark ? "bg-red-600" : "bg-red-500",
      skills: [
        { name: "Bash", level: 90, details: "Shell scripting, Automation, System administration" },
        { name: "Python", level: 85, details: "Automation scripts, APIs, Data processing" },
        { name: "JavaScript", level: 75, details: "Web development, Node.js, APIs" },
        { name: "Java", level: 70, details: "Application development, Spring Boot basics" }
      ]
    },
    {
      title: "Security & Networking",
      icon: Shield,
      color: isDark ? "bg-indigo-600" : "bg-indigo-500",
      skills: [
        { name: "VPC", level: 85, details: "Network security, Subnets, Security groups" },
        { name: "IAM", level: 90, details: "Role management, Policies, Access control" },
        { name: "SSL/TLS", level: 80, details: "Certificate management, HTTPS, Security" },
        { name: "VPN", level: 75, details: "Site-to-site, Point-to-site, Network security" }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Technical Skills
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Comprehensive expertise across cloud platforms, automation tools, and modern DevOps practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-slate-700 hover:bg-slate-600 shadow-2xl hover:shadow-blue-500/10' 
                  : 'bg-slate-50 hover:bg-slate-100 hover:shadow-lg'
              }`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-semibold ${
                          isDark ? 'text-white' : 'text-slate-800'
                        }`}>{skill.name}</span>
                        <span className={`text-sm ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full rounded-full h-2 mb-2 ${
                        isDark ? 'bg-slate-600' : 'bg-slate-200'
                      }`}>
                        <div
                          className={`${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>{skill.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}