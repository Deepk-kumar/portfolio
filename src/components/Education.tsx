import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

export default function Education({ isDark }: EducationProps) {
  const education = {
    degree: "Bachelor of Technology in Information Technology",
    university: "Gautam Buddha University",
    location: "Greater Noida",
    duration: "2018 – 2022",
    gpa: "8.1 GPA",
    description: "Comprehensive education in Information Technology with focus on software development, computer networks, and system administration."
  };

  const certifications = [
    {
      title: "Full Stack Java Developer",
      provider: "Simplilearn",
      year: "2022",
      description: "Comprehensive training in Java development, Spring Boot, databases, and web technologies"
    },
    {
      title: "Java & Data Structures",
      provider: "Coding Ninjas",
      year: "2021",
      description: "Advanced Java programming concepts and data structure implementations"
    }
  ];

  return (
    <section id="education" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Education & Certifications
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Strong academic foundation complemented by industry-relevant certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className={`rounded-2xl p-8 ${
              isDark ? 'bg-slate-700' : 'bg-slate-50'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                  isDark ? 'bg-blue-600' : 'bg-blue-600'
                }`}>
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>Education</h3>
              </div>

              <div className={`rounded-xl p-6 shadow-sm ${
                isDark ? 'bg-slate-600' : 'bg-white'
              }`}>
                <h4 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>{education.degree}</h4>
                <h5 className={`text-lg font-semibold mb-4 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>{education.university}</h5>
                
                <div className="space-y-2 mb-4">
                  <div className={`flex items-center ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{education.duration}</span>
                  </div>
                  <div className={`flex items-center ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{education.location}</span>
                  </div>
                </div>

                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block mb-4">
                  <span className="font-semibold">{education.gpa}</span>
                </div>

                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{education.description}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className={`rounded-2xl p-8 ${
              isDark ? 'bg-slate-700' : 'bg-slate-50'
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className={`rounded-xl p-6 shadow-sm ${
                    isDark ? 'bg-slate-600' : 'bg-white'
                  }`}>
                    <h4 className={`text-lg font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>{cert.title}</h4>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-semibold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>{cert.provider}</span>
                      <span className={`text-sm ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>{cert.year}</span>
                    </div>
                    <p className={`text-sm ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                My education and certifications have provided me with a solid foundation in technology and development. 
                I continue to expand my knowledge through hands-on projects, online courses, and staying current with 
                the latest DevOps trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}