# Asmitha Banu A — Personal Digital Portfolio

A bespoke, high-performance personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for **Asmitha Banu A** (Electronics and Communication Engineering graduate transitioning into Software Engineering) to showcase her real projects, AICTE/industry experience, conference research, and verifiable skills.

---

## 🌟 Visual Identity & Design Direction

- **Warm Editorial Palette**: A sophisticated, non-blue visual system featuring:
  - **Deep Charcoal Canvas**: `#0c0d0f` and `#13151a` for an elegant, low-strain backdrop.
  - **Warm Ivory / Off-White Typography**: `#fdfcfb` and `#ede8dc` for optimal readability and high contrast.
  - **Refined Champagne Gold & Terracotta Accents**: `#c5a059` and `#c97750` used sparingly for active states, key CTAs, and delicate hairline borders.
- **Editorial Portrait Layout**: Prominently presents Asmitha's verified photograph (`public/assets/profile.jpg`) inside an asymmetric, double-beveled architectural frame with gold corner accents.
- **Storytelling Journey ("From Circuits to Code")**: Interactive stepped narrative illustrating the progression from circuit logic, microcontrollers, and IoT prototypes to Java/SQL software engineering and convolutional neural network video enhancement.
- **Featured Project Spotlight**: Dedicated showcase of the **Video Compression Performance Analysis Using FCEP-VA Algorithm** with real quantitative benchmark concepts (PSNR gain, SSIM preservation, bitrate, compression ratio).
- **Direct Working Resume Download**: Instant, uncorrupted download of `public/assets/resume.pdf` (`Asmitha_Banu_Resume.pdf`) from the Hero, Navigation, Recruiter Snapshot, and Footer.
- **20-Second Recruiter Snapshot**: Fast-scan candidate brief modal tailored for technical recruiters and hiring managers.
- **Functional Contact Form**: Direct delivery to `asmithabanu1804@gmail.com` via Web3Forms/Formspree with anti-bot honeypot and instant mailto client fallback.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v20+ recommended)
- npm or pnpm

### 1. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 2. Build for Production
```bash
npm run build
```
The production bundle builds into `/dist` with zero type errors and zero warnings.

---

## 📄 Verified Files Included

- **Profile Photograph**: `public/assets/profile.jpg` (Asmitha's actual professional portrait).
- **Resume Document**: `public/assets/resume.pdf` (Asmitha's genuine, readable PDF resume).

---

## 📬 Contact Form Configuration (Web3Forms)

The contact form is pre-configured to dispatch to **asmithabanu1804@gmail.com**:

1. Visit [web3forms.com](https://web3forms.com/).
2. Enter your email: `asmithabanu1804@gmail.com`.
3. Copy your free access key received in your inbox.
4. Create a `.env` file in the project root:
   ```env
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
5. When visitors submit the form on your portfolio, their messages will arrive directly in your Gmail inbox!

> **Note**: Even without configuring `.env`, the form automatically falls back to preparing a formatted direct email to `asmithabanu1804@gmail.com`, ensuring no message is ever lost.

---

## ✏️ Customizing Links & Skills

All data is decoupled in:
```text
src/data/portfolioData.ts
```

- **Social Profiles**: Update `socials.linkedin`, `socials.github`, and `socials.leetcode` with your live URLs.
- **Currently Learning**: Update the `currentlyLearning` array with new technologies as you progress.

---

## 🌐 Deploying to Vercel or Netlify

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repo.
3. In **Environment Variables**, add:
   - `VITE_WEB3FORMS_KEY`: your Web3Forms key.
4. Click **Deploy**.

---

© 2026 Asmitha Banu A. All rights reserved.
