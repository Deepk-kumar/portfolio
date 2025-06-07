import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-2xl border-b border-slate-700' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
            Deepak Kumar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  isDark 
                    ? 'text-slate-300 hover:text-blue-400' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isDark ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${isDark ? 'bg-slate-800/95' : 'bg-white/95'} rounded-lg backdrop-blur-sm`}>
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 font-medium transition-colors duration-200 ${
                    isDark 
                      ? 'text-slate-300 hover:text-blue-400' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}