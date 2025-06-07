import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-3 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' 
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}