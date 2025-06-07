import React from 'react';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const highlights = [
    {
      icon: Award,
      title: "86+ AWS Environments",
      description: "Successfully managed and deployed with full automation"
    },
    {
      icon: Users,
      title: "Cross-functional Teams",
      description: "Led DevOps initiatives across multiple enterprise projects"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Continuously improving automation and infrastructure reliability"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Proven track record of delivering scalable, secure solutions"
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              About Me
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Passionate about cloud infrastructure automation and building scalable, reliable systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>My Journey</h3>
              <div className={`prose prose-lg ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <p className="mb-4">
                  My DevOps journey began with a strong foundation in full-stack development during my 
                  internship at Pepcoding Education, where I contributed to backend optimization and 
                  performance tuning of learning management applications.
                </p>
                <p className="mb-4">
                  Transitioning into DevOps at Impressico Business Solutions, I've had the opportunity 
                  to work on enterprise-level projects including Panasonic Digital SignEdge, Sunlitlive, 
                  and NGL applications, where I've honed my skills in cloud automation, containerization, 
                  and monitoring.
                </p>
                <p>
                  My approach focuses on creating robust, scalable infrastructure that enables teams to 
                  deploy with confidence. I believe in the power of automation to eliminate manual errors 
                  and improve overall system reliability.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-50 hover:bg-slate-100'
                }`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isDark ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <highlight.icon className={isDark ? 'text-white' : 'text-blue-600'} size={24} />
                  </div>
                  <h4 className={`font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>{highlight.title}</h4>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}