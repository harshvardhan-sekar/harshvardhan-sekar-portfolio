# Harshvardhan Sekar — Portfolio 2026

Personal portfolio website showcasing my work in Credit Risk, Data Science, Machine Learning, and NLP.

## Live Site

[harshvardhan-sekar-portfolio.vercel.app](https://harshvardhan-sekar-portfolio.vercel.app)

## Tech Stack

- **Framework:** Next.js 14 / React 18
- **Styling:** Custom CSS with CSS Variables, Glassmorphism
- **Font:** Inter (Google Fonts)
- **Icons:** Font Awesome 6
- **Contact:** EmailJS
- **Deployment:** Vercel

## Features

- Dark theme (#050608) with blue (#3b82f6) accent and glass-effect UI
- 3D flip card avatar (click to reveal)
- Single-column experience timeline with company logos
- Multi-category project filtering
- Fully clickable project and certification tiles
- Working contact form via EmailJS
- Light/dark theme toggle
- Responsive design

## Getting Started

```bash
git clone https://github.com/harshvardhan-sekar/portfolio-2026.git
cd portfolio-2026
npm install
cp .env.local.example .env.local
# Fill in your EmailJS credentials in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Project Structure

```
portfolio-2026/
├── components/          # React components
│   ├── Navigation.js    # Fixed nav with theme toggle
│   ├── Hero.js          # Role rotation, flip avatar, social links
│   ├── About.js         # Bio and stat cards
│   ├── Experience.js    # Single-column timeline
│   ├── Projects.js      # Filterable project grid
│   ├── Skills.js        # Skill chips and certifications
│   ├── Contact.js       # EmailJS contact form
│   └── Footer.js        # Social links and copyright
├── data/
│   └── projects.js      # Project data
├── pages/               # Next.js pages
├── public/images/       # Static assets
├── styles/
│   └── globals.css      # Complete dark theme CSS
└── .env.local.example   # Environment variable template
```

## Deployment

Push to GitHub and connect the repo to Vercel. Add the environment variables above in your Vercel project settings.

## Author

**Harshvardhan Sekar** — MS Information Management, UIUC (May 2026)

- [LinkedIn](https://www.linkedin.com/in/harshvardhan-sekar/)
- [GitHub](https://github.com/harshvardhan-sekar)
- [Email](mailto:sekar6@illinois.edu)
