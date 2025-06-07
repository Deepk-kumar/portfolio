import React from 'react';
import { Github, Linkedin, Mail, Phone, Cloud, Server, Download } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/DEEPAK25.pdf';
    link.download = 'Deepak_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className={`w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 ${
                  isDark ? 'border-slate-700' : 'border-white'
                }`}>
                  <img
                    src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Deepak Kumar - DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Cloud className="text-white" size={32} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                isDark 
                  ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                <Server size={16} />
                DevOps Engineer
              </div>
              
              <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                Deepak Kumar
              </h1>
              
              <h2 className={`text-2xl lg:text-3xl font-semibold mb-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Cloud Infrastructure & Automation Specialist
              </h2>

              <div className={`prose prose-lg mb-8 max-w-none ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <p className="mb-4">
                  Results-driven DevOps Engineer with 3+ years of experience in automating cloud infrastructure, 
                  streamlining CI/CD pipelines, and deploying secure, scalable solutions on AWS and Azure. 
                  Successfully managed and deployed over 86 AWS environments with full automation.
                </p>
                <p>
                  My passion lies in simplifying complex deployments and making infrastructure reliable, observable, 
                  and easy to scale. I specialize in Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, and 
                  monitoring stacks like Prometheus + Grafana, ensuring complete end-to-end automation and 
                  continuous improvement across DevOps pipelines.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View My Projects
                </button>
                <button
                  onClick={downloadResume}
                  className={`flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 border-2 ${
                    isDark 
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900' 
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://linkedin.com/in/dêêp-kùmàr-89010a185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-slate-700 text-slate-300 hover:text-blue-400 hover:shadow-blue-500/25' 
                      : 'bg-white text-slate-600 hover:text-blue-600 hover:shadow-xl'
                  }`}
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:Deepak841999@gmail.com"
                  className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-slate-700 text-slate-300 hover:text-blue-400 hover:shadow-blue-500/25' 
                      : 'bg-white text-slate-600 hover:text-blue-600 hover:shadow-xl'
                  }`}
                >
                  <Mail size={24} />
                </a>
                <a
                  href="tel:+919355142903"
                  className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-slate-700 text-slate-300 hover:text-blue-400 hover:shadow-blue-500/25' 
                      : 'bg-white text-slate-600 hover:text-blue-600 hover:shadow-xl'
                  }`}
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}