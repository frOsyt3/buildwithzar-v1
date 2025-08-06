# Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features dark mode, smooth animations, and a clean design.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Dark Mode** - Toggle between light and dark themes
- **Modern UI** - Clean and professional design
- **Smooth Animations** - CSS transitions and hover effects
- **Contact Form** - Functional contact form (ready for backend integration)
- **Project Showcase** - Display your projects with filtering
- **SEO Optimized** - Meta tags and proper HTML structure

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/           # Images, icons, logos
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/            # Main pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── routes/           # React Router configuration
│   │   └── AppRoutes.jsx
│   ├── config/           # Configuration data
│   │   └── projects.js
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind CSS imports
├── tailwind.config.js    # Tailwind configuration
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Customization

### Personal Information

Update your personal information in `src/config/projects.js`:

```javascript
export const bio = {
  name: "Your Name",
  title: "Full Stack Developer",
  description: "Your description here...",
  skills: ["JavaScript", "React", "Node.js", ...],
  experience: "3+ years",
  education: "Bachelor's in Computer Science",
  location: "Your Location"
};
```

### Projects

Add your projects in `src/config/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com",
    category: "Web Development"
  }
];
```

### Colors and Theme

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... customize your color palette
      },
    },
  },
}
```

### Social Links

Update social media links in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## 🎨 Color Palette

The website uses a modern blue-purple gradient color scheme:

- **Primary Blue**: `#3b82f6` (blue-500)
- **Secondary Purple**: `#8b5cf6` (purple-500)
- **Dark Mode**: Gray scale with blue accents
- **Light Mode**: White background with subtle shadows

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the amazing frontend library
- [Vite](https://vitejs.dev/) for the fast build tool
- [Heroicons](https://heroicons.com/) for the beautiful icons

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

Made with ❤️ using React and Tailwind CSS
