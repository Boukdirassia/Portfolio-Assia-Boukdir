# Professional Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing professional experience, skills, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Structured for search engine optimization
- **Accessible**: Built with accessibility best practices

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer details

### Projects
Add your projects in `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    image: "project-image-url",
    technologies: [...],
    github: "github-url",
    live: "live-demo-url"
  }
];
```

### Skills
Update your skills in `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: "Category Name",
    skills: [
      { name: "Skill Name", icon: <Icon />, level: 90, color: "text-color" }
    ]
  }
];
```

### Experience
Add your work experience in `src/components/Experience.jsx`:
```javascript
const experiences = [
  {
    type: 'work', // or 'education'
    title: "Job Title",
    company: "Company Name",
    location: "Location",
    period: "Start - End",
    description: [...],
    technologies: [...]
  }
];
```

## 🎨 Color Customization

The color scheme can be customized in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      }
    }
  }
}
```

## 📱 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal information and highlights
3. **Skills** - Technical skills with proficiency levels
4. **Projects** - Portfolio of work with filtering
5. **Experience** - Professional and educational background
6. **Contact** - Contact form and information
7. **Footer** - Additional links and information

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

- **Email**: assia@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

Made with ❤️ by Assia using React.js and Tailwind CSS
