# Raman Subedi - Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## About

This is my portfolio showcasing my work in AI, machine learning, and DevOps. I built it to present my projects and experience to potential employers and graduate programs.

Live at: [ramansubedi.online](https://ramansubedi.online)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Lucide React for icons

## Setup

You'll need Node.js installed. Then:

```bash
git clone https://github.com/Raman21676/Subedi_Protfolio.git
cd Subedi_Protfolio
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx          # SEO and metadata
  page.tsx            # Main landing page
  globals.css         # Global styles

components/
  Navigation.tsx      # Top navigation
  Hero.tsx           # Landing section
  About.tsx          # Education and experience
  Projects.tsx       # Project showcase
  ResumeDownload.tsx # Resume download CTA
  Contact.tsx        # Contact form
  Footer.tsx         # Footer

public/
  profile.png        # Profile photo
  Raman_Subedi_Resume .pdf
```

## Customizing

If you want to use this as a template:

- Update project info in `components/Projects.tsx`
- Change personal details in `components/About.tsx`
- Update social links in `components/Contact.tsx`
- Modify colors in `tailwind.config.ts`

## Deployment

I recommend Vercel for deployment since it's built for Next.js:

```bash
npm i -g vercel
vercel
```

Netlify also works:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

## Contact

- Email: ramansubedi0309@gmail.com
- LinkedIn: [linkedin.com/in/raman-subedi-55b13b27b](https://www.linkedin.com/in/raman-subedi-55b13b27b/)
- GitHub: [github.com/Raman21676](https://github.com/Raman21676)

## License

© 2024 Raman Subedi. All rights reserved.
