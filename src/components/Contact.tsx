import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Deepak841999@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Deepak841999@gmail.com",
      href: "mailto:Deepak841999@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9355142903",
      href: "tel:+919355142903"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/dêêp-kùmàr-89010a185"
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      isDark ? 'bg-slate-900' : 'bg-slate-900'
    } text-white`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to discuss your next DevOps project or cloud infrastructure needs? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.includes('linkedin') ? '_blank' : undefined}
                    rel={info.href.includes('linkedin') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center p-4 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-800 hover:bg-slate-700' 
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-slate-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className={`rounded-xl p-6 ${
                isDark ? 'bg-slate-800' : 'bg-slate-800'
              }`}>
                <h4 className="font-bold text-white mb-4 flex items-center">
                  <Clock size={20} className="mr-2" />
                  Availability
                </h4>
                <p className="text-slate-300 mb-2">
                  <strong>Preferred Contact Hours:</strong> 9:00 AM - 6:00 PM IST
                </p>
                <p className="text-slate-300">
                  <strong>Response Time:</strong> Usually within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 ${
                        isDark 
                          ? 'bg-slate-800 border border-slate-700' 
                          : 'bg-slate-800 border border-slate-700'
                      }`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 ${
                        isDark 
                          ? 'bg-slate-800 border border-slate-700' 
                          : 'bg-slate-800 border border-slate-700'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 ${
                      isDark 
                        ? 'bg-slate-800 border border-slate-700' 
                        : 'bg-slate-800 border border-slate-700'
                    }`}
                    placeholder="Project Inquiry, Collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none transition-all duration-200 ${
                      isDark 
                        ? 'bg-slate-800 border border-slate-700' 
                        : 'bg-slate-800 border border-slate-700'
                    }`}
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}