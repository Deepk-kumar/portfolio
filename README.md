# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📧 Contact form integration
- 🌟 Interactive animations and hover effects

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Update the `base` path in `vite.config.ts` to match your repository name
6. Push changes to the main branch to trigger deployment

### Manual Deployment

To build and deploy manually:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Technical skills
│   ├── Projects.tsx    # Featured projects
│   ├── Education.tsx   # Education & certifications
│   └── Contact.tsx     # Contact form
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Name, title, bio, and social links
- `src/components/About.tsx` - Personal story and highlights
- `src/components/Experience.tsx` - Work experience and achievements
- `src/components/Skills.tsx` - Technical skills and proficiency levels
- `src/components/Projects.tsx` - Featured projects and accomplishments
- `src/components/Education.tsx` - Education and certifications
- `src/components/Contact.tsx` - Contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in individual component files

### Images

Replace the placeholder image in `src/components/Hero.tsx` with your professional photo.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Deepak Kumar - [Deepak841999@gmail.com](mailto:Deepak841999@gmail.com)

Project Link: [https://github.com/yourusername/your-repo-name](https://github.com/yourusername/your-repo-name)