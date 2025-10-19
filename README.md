# Harshvardhan Sekar - Portfolio Website

A modern, responsive portfolio website built with Next.js and deployed on Vercel.

## 🚀 Live Demo

Visit the live website: [https://harshvardhan-sekar-portfolio.vercel.app](https://harshvardhan-sekar-portfolio.vercel.app)

## ✨ Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Projects**: Filterable project showcase
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized for performance
- **Vercel Deployed**: Global CDN and automatic deployments

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: CSS3 with custom animations
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins, Inter)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/harshvardhan-sekar/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-website/
├── components/          # React components
├── data/               # Data files (projects, etc.)
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # CSS files
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
└── vercel.json         # Vercel configuration
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically!

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

## 📝 Customization

### Adding Projects

Edit `data/projects.js` to add or modify projects:

```javascript
{
  id: 11,
  title: "Your Project",
  description: "Project description",
  category: "ml", // ml, cv, nlp, credit, viz, de
  technologies: ["Python", "React"],
  github: "https://github.com/username/repo",
  demo: "https://demo-url.com",
  image: "fas fa-code",
  status: "completed",
  date: "2024"
}
```

### Updating Personal Information

Edit the respective component files in the `components/` directory.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

- **Email**: sekar6@illinois.edu
- **LinkedIn**: [harshvardhan-sekar](https://www.linkedin.com/in/harshvardhan-sekar/)
- **GitHub**: [harshvardhan-sekar](https://github.com/harshvardhan-sekar)

---

Made with ❤️ by Harshvardhan Sekar