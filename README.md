# 🌌 Rahul Bhadoriya — Data Science Portfolio

Welcome to the official repository of my Data Science Portfolio website. This portfolio is built as an ultra-premium, minimalist, interactive landing page showcasing professional technical competencies, academic credentials, featured AI/ML projects, work experience, and writing.

---

## 🚀 Live Demo & Development Server
The local development server runs on:
👉 **[http://localhost:3001/](http://localhost:3001/)**

---

## 🛠️ Tech Stack
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/) (v5.4.21)
- **UI & Layout Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Interactions & Motion**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Data Visualizations**: [Chart.js](https://www.chartjs.org/) (Radar & analytics mapping)
- **Back-End Integration**: [Vercel Serverless Functions](https://vercel.com/docs/functions) (Node.js API gateway)
- **Mailing Client**: [Resend API](https://resend.com/)

---

## 📖 Section-Wise Walkthrough

### 1. Sticky Navigation Bar
- **Design**: Transparent black glass navbar with a fine bottom micro-border (`backdrop-blur-md bg-black/40 border-b border-white/[0.06]`).
- **Interactions**: Underline slide transition on link hover.
- **Scroll Tracking**: Automatically highlights the current active page section using a scroll event tracker (`.premium-nav-link.active`).

### 2. Luxury Hero Section
- **Spotlight Effect**: An interactive cursor spotlight overlay follows mouse movements across the hero area.
- **Chrome Shine Typography**: The main header **Rahul Bhadoriya** has a custom css linear gradient keyframe animation that sweeps a reflection shine across the letters.
- **Typing Subtitle**: An automated typing cursor loops through:
  - *Data Analyst*
  - *Machine Learning Enthusiast*
  - *AI Explorer*
  - *Python Developer*
  - *Gen-AI Explorer*
- **Call to Actions**:
  - **View Projects**: Filled white button with hover shadow glow.
  - **Download Resume**: Frosted glass link redirecting directly to my Google Drive resume.
- **Interactive Right Column**: An animated circular profile ring featuring:
  - Floating motion and a rotating blur halo backdrop.
  - A vector neural network illustration with pulsing data nodes (`.pulse-node`).
  - An integrated glowing white GitHub logo connecting directly to my profile (`https://github.com/rahulbh8077`).
- **Scroll Down Mouse**: Animated minimal mouse indicator centered at the bottom.

### 3. About Me Section (01)
- **Biography**: Summarizes my pathway in data analysis and artificial intelligence.
- **Fun Facts Card**: Renders metrics for developer lifestyle parameters (e.g. coffee consumed, coding soundtracks).
- **Academic Credentials**: Vertical progress timeline tracking academic certifications (B.Tech in Information Technology from Dr. AITD Kanpur UP, etc.).

### 4. Skills Directory (02)
- **Arrangement**: Styled as a clean, interactive grid mirroring the Projects grid layout.
- **Categorized Filters**: Clickable tabs to filter skills by group: *All*, *Programming Languages*, *Data Science Core*, *Frameworks & Libraries*, *Visualization & Tools*, or *Soft Skills*.
- **Search Bar**: Real-time text filter to search and isolate specific skills.
- **Skill Mapping Metrics**: Interactive Chart.js Radar Chart mapping core analytical and engineering attributes.

### 5. Project Showcase (03)
- **Filter Controls**: Tab buttons to filter projects by categories (*All*, *Machine Learning*, *Data Analytics*, *Web Applications*, *AI & GenAI*).
- **Search bar**: Dynamic typing search to scan title and tech stack descriptions.
- **Insight Modals**: Clicking any project card opens a premium blur glass popup displaying the *Core Challenge*, *Engineered Solution*, *Key Technical Metrics*, and links to source code.

### 6. Experience Timeline (04)
- A connected vertical timeline showcasing professional work history, roles, duties, and project timelines.

### 7. Certifications & Achievements (05)
- **Coursework Badges**: Custom grid cards rendering verified issuer labels, certificate IDs, and key modules learned.
- **Impact Metrics**: Fast counter animations displaying solved LeetCode problems, repositories, and followers.

### 8. Journey Roadmap (06)
- Chronological milestone tracker plotting my learning roadmap from initial programming, statistical math, to generative AI engineering.

### 9. Article Publications (07)
- Summarized cards pointing to articles, blog posts, or tutorials written on Medium or DEV.to.

### 10. Contact Gateway (08)
- A fully functional contact form.
- **Backend Flow**: Submitting the form triggers a serverless API POST request to `/api/contact`. The Node.js serverless handler dispatches a formatted email using the **Resend service API** directly to `rahulbh8077@gmail.com`.

---

## 🛠️ Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rahulbh8077/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Launch development server**:
   ```bash
   npm run dev
   ```

5. **Compile production build**:
   ```bash
   npm run build
   ```

---

## 📝 Recent Update Log

### 1. Minimalist Redesign (Walkthrough)
- Overhauled the Hero Section to follow a matte black minimalist design.
- Replaced bright blue/purple gradients in the hero area with subtle white glow accents.
- Created the interactive circular neural node banner on the right side and linked it directly to GitHub.
- Fixed Light Mode (Day Mode) visibility across all section headers and cards by mapping text styles to responsive tailwind classes (e.g. `text-slate-900 dark:text-white`).

### 2. Implementation Tasks (Progress Tracking)
- [x] Integrate Resend backend mailing service (`api/contact.js`).
- [x] Configure `.env` key storage.
- [x] Correct sections numbering sequence (01 to 11).
- [x] Restructure Skills Directory to match the Projects Showcase layout.
- [x] Replace Hero mockups with clickable circular GitHub illustration.
- [x] Implement chrome mirroring text shine animation.
