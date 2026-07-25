// Main Portfolio Application Coordinator
import { personalInfo, education, skills, projects, experience, certifications, achievements, journeyRoadmap, testimonials, socialLinks, techStack } from './data.js';
import { initParticles } from './particles.js';
import { updateVisualizations, renderSkillsRadar } from './charts.js';
import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Background Particles
  initParticles('particlesCanvas');

  // Initialize Charts & Heatmap
  setTimeout(() => {
    updateVisualizations();
  }, 100);

  // Initialize Elements Rendering
  renderPersonalInfo();
  renderEducation();
  renderSkillsSection();
  renderProjectsGrid();
  renderExperienceTimeline();
  renderCertificationsGrid();
  renderAchievementsStats();
  renderRoadmap();
  renderTechStack();
  // renderTestimonialsSlider(); // Disabled testimonials section
  renderSocialLinks();

  // Core Features
  setupThemeToggle();
  // setupCursorGlow(); // Disabled to remove cursor shadow
  setupTypingEffect();
  setupScrollProgress();
  setupProjectModal();
  setupResumeActions();
  setupContactForm();
  setupMobileMenu();
  setupSkillsFilters();
  setupHeroSpotlight();
  setupActiveSectionIndicator();
  setupScrollReveal();
});

// 1. Personal Information Injection
function renderPersonalInfo() {
  document.querySelectorAll('.profile-name').forEach(el => el.textContent = personalInfo.name);
  const tagLineEl = document.getElementById('heroTagline');
  if (tagLineEl) tagLineEl.textContent = personalInfo.tagline;
  
  const introEl = document.getElementById('aboutIntro');
  if (introEl) introEl.textContent = personalInfo.intro;
  
  // Footer credit
  const footerCredit = document.getElementById('footerCredit');
  if (footerCredit) footerCredit.innerHTML = `Designed & Developed with ❤️ by <span class="gradient-text font-bold">${personalInfo.name}</span>`;
}

// 2. Typing Effect Animation
function setupTypingEffect() {
  const target = document.getElementById('typingSkills');
  if (!target) return;

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const titles = personalInfo.titles;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function type() {
    const currentWord = titles[titleIndex];
    
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delay = 500; // Pause before typing next word
    }

    setTimeout(type, delay);
  }

  type();
}

// 3. Theme Toggle Setup
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  // Check saved preference, otherwise default to dark
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    updateThemeToggleIcon(true);
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    updateThemeToggleIcon(false);
  }

  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    if (isLight) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    }
    updateThemeToggleIcon(isLight);
  });
}

function updateThemeToggleIcon(isLight) {
  const toggleIcon = document.getElementById('themeToggleIcon');
  if (!toggleIcon) return;
  
  if (isLight) {
    // Moon Icon
    toggleIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    `;
  } else {
    // Sun Icon
    toggleIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
      </svg>
    `;
  }
}

// 4. Custom Cursor Glow (Disabled)

// 5. Scroll Progress Indicator & Sticky Header & Scroll To Top
function setupScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  const stickyNavbar = document.getElementById('stickyNavbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }

    // Sticky navbar backdrop toggle
    if (stickyNavbar) {
      if (window.scrollY > 50) {
        stickyNavbar.classList.add('nav-blur', 'shadow-md');
        stickyNavbar.classList.remove('bg-transparent');
      } else {
        stickyNavbar.classList.remove('nav-blur', 'shadow-md');
        stickyNavbar.classList.add('bg-transparent');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        backToTopBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      } else {
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        backToTopBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// 6. About Me - Education Section
function renderEducation() {
  const eduContainer = document.getElementById('educationContainer');
  if (!eduContainer) return;

  eduContainer.innerHTML = education.map((edu, idx) => `
    <div class="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800/40 dark:border-slate-800/50 pb-8 last:pb-0 reveal-hidden">
      <!-- Icon bullet -->
      <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accentBlue ring-4 ring-lightBg dark:ring-darkBg"></div>
      <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accentBlue/10 text-accentBlue mb-2 inline-block">${edu.period}</span>
      <h4 class="text-lg font-bold text-slate-900 dark:text-slate-100">${edu.degree}</h4>
      <p class="text-sm text-accentCyan font-medium mb-2">${edu.institution} | GPA: ${edu.gpa}</p>
      <p class="text-sm text-slate-600 dark:text-slate-400">${edu.details}</p>
    </div>
  `).join('');
}

// 7. Skills Grid Rendering
function renderSkillsSection() {
  const categoryKeys = {
    'programming': 'skillsProgramming',
    'dataScience': 'skillsDataScience',
    'libraries': 'skillsLibraries',
    'visualization': 'skillsVisualization',
    'tools': 'skillsTools',
    'softSkills': 'skillsSoft'
  };

  Object.entries(categoryKeys).forEach(([key, containerId]) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = skills[key] || [];
    container.innerHTML = list.map(item => `
      <div class="mb-4 skill-item-container">
        <div class="flex justify-between mb-1">
          <span class="text-sm font-semibold text-slate-800 dark:text-slate-200 skill-name">${item.name}</span>
          <span class="text-sm font-medium text-slate-600 dark:text-slate-400">${item.level}%</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
          <div class="bg-gradient-to-r from-accentBlue to-accentCyan h-2 rounded-full skill-progress-bar transition-all duration-1000 ease-out" style="width: 0%" data-level="${item.level}"></div>
        </div>
      </div>
    `).join('');
  });
}

// 7b. Skills Filter & Search Handlers
let activeSkillFilter = 'All';
let skillSearchQuery = '';

function setupSkillsFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const searchInput = document.getElementById('skillSearchInput');

  if (filterBtns) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-accentCyan', 'text-white', 'shadow-glow-cyan');
          b.classList.add('bg-slate-800/40', 'border', 'border-slate-700/30', 'text-slate-300');
        });

        btn.classList.remove('bg-slate-800/40', 'border', 'border-slate-700/30', 'text-slate-300');
        btn.classList.add('bg-accentCyan', 'text-white', 'shadow-glow-cyan');

        activeSkillFilter = btn.getAttribute('data-filter');
        filterSkills();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      skillSearchQuery = e.target.value;
      filterSkills();
    });
  }
}

function filterSkills() {
  const cards = document.querySelectorAll('.skill-category-card');
  const radarCard = document.getElementById('radarChartCard');

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    
    // Check if category matches filter
    const matchesFilter = activeSkillFilter === 'All' || category === activeSkillFilter;
    
    // Filter progress bars inside the category
    const skillItems = card.querySelectorAll('.skill-item-container');
    let hasMatchingSkill = false;
    
    skillItems.forEach(item => {
      const name = item.querySelector('.skill-name').textContent.toLowerCase();
      const matchesSearch = name.includes(skillSearchQuery.toLowerCase());
      
      if (matchesSearch) {
        item.classList.remove('hidden');
        hasMatchingSkill = true;
      } else {
        item.classList.add('hidden');
      }
    });

    if (skillSearchQuery === '') {
      skillItems.forEach(item => item.classList.remove('hidden'));
      hasMatchingSkill = true;
    }

    if (matchesFilter && hasMatchingSkill) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  // Handle Radar Chart visibility
  if (radarCard) {
    if (activeSkillFilter === 'All' && skillSearchQuery === '') {
      radarCard.classList.remove('hidden');
    } else {
      radarCard.classList.add('hidden');
    }
  }
}

// 8. Projects Grid with Filter and Search Logic
let activeFilter = 'All';
let searchQuery = '';

function renderProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  // Filter and search computation
  const filtered = projects.filter(p => {
    const matchCategory = activeFilter === 'All' || p.category === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500">
        No projects match your current filters or search terms.
      </div>
    `;
    return;
  }

  // Beautiful visual thumbnail designs representing tech categories
  function getProjectThumbnailSVG(category) {
    if (category === 'Machine Learning') {
      return `
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover opacity-85">
          <rect width="400" height="200" fill="#000000"/>
          <circle cx="200" cy="100" r="40" stroke="#06B6D4" stroke-width="2" stroke-dasharray="4 4" class="animate-spin" style="transform-origin: 200px 100px; animation-duration: 20s;"/>
          <line x1="80" y1="100" x2="160" y2="100" stroke="#3B82F6" stroke-width="2"/>
          <line x1="240" y1="100" x2="320" y2="100" stroke="#8B5CF6" stroke-width="2"/>
          <circle cx="80" cy="100" r="12" fill="#3B82F6" class="animate-pulse"/>
          <circle cx="200" cy="100" r="16" fill="#06B6D4"/>
          <circle cx="320" cy="100" r="12" fill="#8B5CF6" class="animate-pulse"/>
          <path d="M120 70 L200 40 L280 70" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="2 2"/>
          <path d="M120 130 L200 160 L280 130" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="2 2"/>
          <text x="20" y="30" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">NEURAL NET COMPILER</text>
        </svg>
      `;
    }
    if (category === 'Data Analytics') {
      return `
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover opacity-85">
          <rect width="400" height="200" fill="#000000"/>
          <!-- Histogram bars -->
          <rect x="60" y="80" width="30" height="80" fill="rgba(59, 130, 246, 0.45)" rx="4"/>
          <rect x="110" y="50" width="30" height="110" fill="rgba(59, 130, 246, 0.75)" rx="4"/>
          <rect x="160" y="100" width="30" height="60" fill="rgba(6, 182, 212, 0.45)" rx="4"/>
          <rect x="210" y="30" width="30" height="130" fill="rgba(6, 182, 212, 0.85)" rx="4"/>
          <rect x="260" y="70" width="30" height="90" fill="rgba(139, 92, 246, 0.5)" rx="4"/>
          <rect x="310" y="40" width="30" height="120" fill="rgba(139, 92, 246, 0.85)" rx="4"/>
          <path d="M50 160 H350" stroke="#94a3b8" stroke-width="2"/>
          <path d="M75 80 L125 50 L175 100 L225 30 L275 70 L325 40" stroke="#f8fafc" stroke-width="2.5"/>
          <text x="20" y="30" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">COHORT MATRIX ANALYTICS</text>
        </svg>
      `;
    }
    if (category === 'AI & GenAI') {
      return `
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover opacity-85">
          <rect width="400" height="200" fill="#000000"/>
          <text x="40" y="70" fill="#06B6D4" font-family="monospace" font-size="18" font-weight="bold">>>> AGENT RUNNING</text>
          <text x="40" y="105" fill="#f8fafc" font-family="monospace" font-size="14">SYSTEM prompt: loaded</text>
          <text x="40" y="130" fill="#8B5CF6" font-family="monospace" font-size="14">VECTOR indexing: 99.8%</text>
          <rect x="32" y="45" width="336" height="110" stroke="rgba(6,182,212,0.3)" stroke-width="2" rx="8"/>
          <!-- Scanning line -->
          <line x1="32" y1="85" x2="368" y2="85" stroke="rgba(59,130,246,0.5)" stroke-width="2" class="animate-pulse"/>
        </svg>
      `;
    }
    // Web App or Fallback
    return `
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover opacity-85">
        <rect width="400" height="200" fill="#000000"/>
        <!-- Styled browser UI -->
        <rect x="30" y="30" width="340" height="140" fill="#151C33" rx="8" stroke="rgba(255,255,255,0.05)"/>
        <circle cx="50" cy="45" r="5" fill="#EF4444"/>
        <circle cx="65" cy="45" r="5" fill="#F59E0B"/>
        <circle cx="80" cy="45" r="5" fill="#10B981"/>
        <rect x="105" y="40" width="200" height="10" fill="#000000" rx="5"/>
        <rect x="45" y="70" width="100" height="20" fill="rgba(59, 130, 246, 0.25)" rx="4"/>
        <rect x="45" y="100" width="220" height="10" fill="rgba(255, 255, 255, 0.1)" rx="3"/>
        <rect x="45" y="115" width="180" height="10" fill="rgba(255, 255, 255, 0.05)" rx="3"/>
        <rect x="45" y="130" width="120" height="10" fill="rgba(255, 255, 255, 0.05)" rx="3"/>
        <rect x="285" y="70" width="70" height="70" fill="rgba(6, 182, 212, 0.15)" rx="6"/>
      </svg>
    `;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="glass-card overflow-hidden cursor-pointer group flex flex-col justify-between h-full reveal-hidden" data-id="${p.id}">
      <div>
        <!-- Tech SVG visual representation -->
        <div class="h-44 overflow-hidden relative border-b border-card-border">
          ${getProjectThumbnailSVG(p.category)}
          <span class="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded bg-slate-900/80 text-accentCyan border border-accentCyan/30 tracking-wider uppercase">${p.category}</span>
        </div>
        
        <div class="p-6">
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${p.techStack.slice(0, 4).map(tech => `
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/30">${tech}</span>
            `).join('')}
            ${p.techStack.length > 4 ? `<span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/30">+${p.techStack.length - 4}</span>` : ''}
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-accentCyan transition-colors duration-300">${p.title}</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">${p.description}</p>
        </div>
      </div>
      
      <div class="p-6 pt-0 border-t border-slate-100/50 dark:border-slate-800/30 flex justify-between items-center mt-auto">
        <span class="text-xs font-semibold text-accentBlue group-hover:underline flex items-center gap-1">
          Explore Insights
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <div class="flex gap-2">
          <span class="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors duration-200" title="Source Code">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/></svg>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  // Handle Details Modal trigger on Click
  grid.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent modal if clicking directly on a link icon or buttons (handled separately if added)
      if (e.target.closest('a') || e.target.closest('button')) return;
      const pid = parseInt(card.getAttribute('data-id'));
      openProjectModal(pid);
    });
  });

  // Re-run scroll animations for new elements
  setupScrollReveal();
}

// Setup Project Filters and Search inputs
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('projectSearchInput');

if (filterButtons) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('bg-accentBlue', 'text-white'));
      filterButtons.forEach(b => b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300'));
      
      btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      btn.classList.add('bg-accentBlue', 'text-white');

      activeFilter = btn.getAttribute('data-filter');
      renderProjectsGrid();
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProjectsGrid();
  });
}

// 9. Project Modal Details Box
function setupProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');
  
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('overflow-hidden');
    });

    // Close on overlay backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }
}

function openProjectModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  if (!modal) return;

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalCategory').textContent = project.category;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalChallenge').textContent = project.challenge;
  document.getElementById('modalSolution').textContent = project.solution;
  document.getElementById('modalMetrics').textContent = project.metrics;

  const techContainer = document.getElementById('modalTechStack');
  techContainer.innerHTML = project.techStack.map(tech => `
    <span class="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-accentCyan border border-accentCyan/20">${tech}</span>
  `).join('');

  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = project.keyFeatures.map(feat => `
    <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
      <span class="text-accentCyan mt-1">✔</span>
      <span>${feat}</span>
    </li>
  `).join('');

  const liveBtn = document.getElementById('modalLiveLink');
  const codeBtn = document.getElementById('modalCodeLink');

  if (liveBtn) liveBtn.href = project.liveUrl;
  if (codeBtn) codeBtn.href = project.githubUrl;

  modal.classList.remove('opacity-0', 'pointer-events-none');
  document.body.classList.add('overflow-hidden');
}

// 10. Experience Timeline Rendering
function renderExperienceTimeline() {
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;

  timeline.innerHTML = `
    <!-- Vertical timeline line -->
    <div class="roadmap-line"></div>
  ` + experience.map((exp, idx) => {
    const isLeft = idx % 2 === 0;
    return `
      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12 last:mb-0 reveal-hidden">
        <!-- Dot bullet -->
        <div class="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-lightBg dark:border-darkBg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs group-hover:border-accentBlue transition-colors duration-300 z-10 shadow-glow-blue">
          <span class="text-accentCyan">⏱</span>
        </div>
        
        <!-- Timeline panel -->
        <div class="w-[calc(100%-48px)] md:w-[45%] ml-auto md:ml-0 glass-card p-6 border-slate-200 dark:border-slate-800/40 hover:-translate-y-1">
          <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
            <span class="text-xs font-bold text-accentPurple px-2.5 py-0.5 rounded-full bg-accentPurple/10 border border-accentPurple/20">${exp.type}</span>
            <span class="text-xs text-slate-500 font-semibold">${exp.period}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">${exp.role}</h3>
          <h4 class="text-sm font-semibold text-accentBlue mb-3">${exp.company}</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400">${exp.details}</p>
        </div>
      </div>
    `;
  }).join('');
}

// 11. Certifications rendering
function renderCertificationsGrid() {
  const grid = document.getElementById('certificationsGrid');
  if (!grid) return;

  grid.innerHTML = certifications.map(cert => `
    <div class="glass-card cert-card p-6 relative flex flex-col justify-between overflow-hidden hover:-translate-y-1 reveal-hidden">
      <div>
        <div class="w-10 h-10 rounded-lg bg-gradient-to-tr from-accentBlue/20 to-accentCyan/20 flex items-center justify-center text-xl text-accentCyan mb-4 border border-accentCyan/20">
          📜
        </div>
        <h4 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">${cert.title}</h4>
        <p class="text-xs text-accentBlue font-medium mb-3">${cert.issuer} • ${cert.date}</p>
        <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">${cert.skillsLearned}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100/50 dark:border-slate-800/30 flex justify-between items-center">
        <span class="text-[10px] font-mono text-slate-500">ID: ${cert.credentialId}</span>
        <a href="${cert.verifyUrl}" class="text-xs font-semibold text-accentCyan hover:underline flex items-center gap-0.5">
          Verify
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  `).join('');
}

// 12. Achievements Stats Rendering
function renderAchievementsStats() {
  const container = document.getElementById('achievementsGrid');
  if (!container) return;

  container.innerHTML = achievements.map(ach => `
    <div class="glass-card p-6 text-center hover:-translate-y-1 reveal-hidden">
      <div class="text-3xl mb-2">${ach.icon}</div>
      <div class="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-1 font-mono hover:scale-105 transition-transform" data-count="${ach.metric.replace(/\D/g, '')}">
        ${ach.metric}
      </div>
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">${ach.label}</div>
    </div>
  `).join('');

  // Start animated counters
  startCountersAnimation();
}

function startCountersAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const isPlus = counter.textContent.includes('+');
    let count = 0;
    const duration = 2000; // 2 seconds
    const intervalTime = Math.max(10, Math.floor(duration / target));

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          count += Math.ceil(target / 40); // Incremental steps
          if (count >= target) {
            counter.textContent = target + (isPlus ? '+' : '');
            clearInterval(timer);
          } else {
            counter.textContent = count + (isPlus ? '+' : '');
          }
        }, intervalTime);
        observer.unobserve(counter);
      }
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// 13. Data Science Journey Roadmap
function renderRoadmap() {
  const container = document.getElementById('roadmapContainer');
  if (!container) return;

  container.innerHTML = journeyRoadmap.map((item, idx) => {
    let dotStyle = 'bg-slate-800 border-slate-700 text-slate-500';
    let cardBorder = 'border-slate-200 dark:border-slate-800/40';
    if (item.status === 'completed') {
      dotStyle = 'bg-accentBlue border-accentBlue text-white shadow-glow-blue';
      cardBorder = 'border-accentBlue/30';
    } else if (item.status === 'in-progress') {
      dotStyle = 'bg-accentCyan border-accentCyan text-white shadow-glow-cyan animate-pulse';
      cardBorder = 'border-accentCyan/40';
    }

    return `
      <div class="flex items-start gap-4 mb-6 last:mb-0 relative group reveal-hidden">
        <!-- Bullet Connection Line -->
        ${idx < journeyRoadmap.length - 1 ? `<div class="absolute left-3.5 top-8 bottom-[-24px] w-0.5 bg-slate-700 dark:bg-slate-800"></div>` : ''}
        
        <!-- Bullet step -->
        <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold z-10 transition-colors shrink-0 ${dotStyle}">
          ${idx + 1}
        </div>
        
        <!-- Description -->
        <div class="glass-card p-4 flex-grow border ${cardBorder}">
          <h4 class="text-md font-bold text-slate-900 dark:text-slate-100 group-hover:text-accentCyan transition-colors">${item.step}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">${item.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}


// 15. Testimonials Slider/Carousel (Removed)

// 16. Resume Action Preview / Modals / Download
function setupResumeActions() {
  const viewResumeBtn = document.getElementById('viewResumeBtn');
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  const resumeContainer = document.getElementById('resumePreviewContainer');

  if (viewResumeBtn && resumeContainer) {
    viewResumeBtn.addEventListener('click', () => {
      // Toggle resume panel view in page
      resumeContainer.classList.toggle('hidden');
      if (!resumeContainer.classList.contains('hidden')) {
        // Scroll into view
        resumeContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        renderResumeMock();
      }
    });
  }

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(personalInfo.resumeUrl, '_blank');
    });
  }
}

function renderResumeMock() {
  const display = document.getElementById('resumePreviewDisplay');
  if (!display) return;

  display.innerHTML = `
    <div class="text-left max-w-3xl mx-auto bg-white text-slate-800 p-8 md:p-12 shadow-2xl rounded-lg border border-slate-200">
      <div class="border-b-2 border-accentBlue pb-4 mb-6">
        <h2 class="text-3xl font-bold text-slate-900">${personalInfo.name}</h2>
        <p class="text-sm font-semibold text-accentBlue mt-1">${personalInfo.titles.join('  |  ')}</p>
        <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mt-2">
          <span>📧 ${personalInfo.email}</span>
          <span>📍 ${personalInfo.location}</span>
          <span>🔗 github.com/${personalInfo.githubUsername}</span>
        </div>
      </div>
      
      <div class="mb-6">
        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">Professional Summary</h3>
        <p class="text-sm leading-relaxed">${personalInfo.tagline} ${personalInfo.intro}</p>
      </div>

      <div class="mb-6">
        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">Education</h3>
        ${education.map(edu => `
          <div class="mb-3">
            <div class="flex justify-between font-bold text-sm text-slate-900">
              <span>${edu.degree}</span>
              <span>${edu.period}</span>
            </div>
            <div class="text-xs text-accentBlue font-semibold">${edu.institution} | GPA: ${edu.gpa}</div>
            <p class="text-xs text-slate-500 mt-0.5">${edu.details}</p>
          </div>
        `).join('')}
      </div>

      <div class="mb-6">
        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">Experience</h3>
        ${experience.map(exp => `
          <div class="mb-3">
            <div class="flex justify-between font-bold text-sm text-slate-900">
              <span>${exp.role}</span>
              <span>${exp.period}</span>
            </div>
            <div class="text-xs text-accentBlue font-semibold">${exp.company} (${exp.type})</div>
            <p class="text-xs text-slate-500 mt-0.5">${exp.details}</p>
          </div>
        `).join('')}
      </div>

      <div>
        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">Technical Skills</h3>
        <div class="text-xs leading-relaxed space-y-1">
          <p><strong>Languages:</strong> ${skills.programming.map(s => s.name).join(', ')}</p>
          <p><strong>Machine Learning & Stats:</strong> ${skills.dataScience.map(s => s.name).join(', ')}</p>
          <p><strong>Libraries:</strong> ${skills.libraries.map(s => s.name).join(', ')}</p>
          <p><strong>Data Visualization & Tools:</strong> ${skills.tools.map(s => s.name).concat(skills.visualization.map(s => s.name)).join(', ')}</p>
        </div>
      </div>
    </div>
  `;
}

// 17. Contact Form Handler (Serverless Integration)
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const alertContainer = document.getElementById('formAlert');
  if (!form || !alertContainer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Capture inputs
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    if (!name || !email || !message) {
      triggerFormAlert('Please fill in all required fields.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.textContent = 'Sending Message...';
    submitBtn.disabled = true;

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, subject, message })
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.error || 'Server error'); });
        }
        return response.json();
      })
      .then(data => {
        triggerFormAlert(`Thank you ${name}! Your message has been sent successfully.`, 'success');
        form.reset();
      })
      .catch(error => {
        console.error('Mail Submit Error:', error);
        triggerFormAlert(`Failed to send message: ${error.message}`, 'error');
      })
      .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      });
  });
}

function triggerFormAlert(msg, type) {
  const alertContainer = document.getElementById('formAlert');
  if (!alertContainer) return;

  alertContainer.innerHTML = msg;
  alertContainer.classList.remove('hidden', 'bg-red-500/10', 'border-red-500', 'text-red-400', 'bg-green-500/10', 'border-green-500', 'text-green-400');
  
  if (type === 'error') {
    alertContainer.classList.add('bg-red-500/10', 'border-red-500', 'text-red-500');
  } else {
    alertContainer.classList.add('bg-green-500/10', 'border-green-500', 'text-green-500');
  }
  
  alertContainer.classList.remove('opacity-0');
  
  setTimeout(() => {
    alertContainer.classList.add('opacity-0');
    setTimeout(() => alertContainer.classList.add('hidden'), 500);
  }, 4000);
}

// 18. Social Links Render
function getSocialSVG(platform) {
  switch (platform) {
    case 'LinkedIn':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-accentBlue transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
    case 'GitHub':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
    case 'Kaggle':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-accentCyan transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v18M17 3L8 12l9 9"/></svg>`;
    case 'LeetCode':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-yellow-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6L2 12l6 6M12 4l-4 16"/></svg>`;
    case 'HackerRank':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-green-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 8v8M15 8v8M9 12h6"/></svg>`;
    case 'X (Twitter)':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>`;
    case 'Email':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-accentBlue transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
    case 'Instagram':
      return `<svg class="w-8 h-8 text-slate-400 group-hover:text-accentPurple transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
    default:
      return `<svg class="w-8 h-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

function renderSocialLinks() {
  const container = document.getElementById('socialGrid');
  const footerIcons = document.getElementById('footerSocialIcons');
  if (!container) return;

  // Render social profile boxes
  container.innerHTML = socialLinks.map(link => {
    return `
      <a href="${link.url}" target="_blank" class="glass-card social-card-premium p-6 flex flex-col items-center justify-center gap-3 text-center border-slate-200 dark:border-slate-800/40 relative group overflow-hidden">
        <div class="relative z-10 flex flex-col items-center justify-center gap-3">
          ${getSocialSVG(link.platform)}
          <span class="text-lg font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 social-platform-name">${link.platform}</span>
          <span class="text-[10px] font-mono text-slate-500 transition-colors">@\${personalInfo.githubUsername}</span>
        </div>
      </a>
    `;
  }).join('');

  // Footer icons
  if (footerIcons) {
    footerIcons.innerHTML = socialLinks.slice(0, 5).map(link => `
      <a href="${link.url}" class="text-slate-500 hover:text-accentCyan transition-colors duration-200" title="${link.platform}">
        <span class="text-sm font-bold">${link.platform.substring(0, 2)}</span>
      </a>
    `).join('');
  }
}

// 19. Responsive Hamburger Menu for Mobile Nav
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    });

    // Close menu when clicking nav link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
      });
    });
  }
}

// 19b. Premium Hero Spotlight & Active Section Indicator Handlers
function setupHeroSpotlight() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const overlay = hero.querySelector('.spotlight-overlay');
  if (!overlay) return;
  
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    overlay.style.setProperty('--x', `${x}px`);
    overlay.style.setProperty('--y', `${y}px`);
    overlay.style.opacity = '1';
  });
  
  hero.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
  });
}

function setupActiveSectionIndicator() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.premium-nav-link');
  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120; // Offset for navbar height

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}` || (currentSectionId === 'hero' && href === '#hero')) {
        link.classList.add('active');
      }
    });
  });
}

// 20. GSAP Scroll Trigger & Custom reveal animations
function setupScrollReveal() {
  // 1. Fill skills progress bars when in viewport
  const progressBars = document.querySelectorAll('.skill-progress-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute('data-level');
        entry.target.style.width = `${level}%`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  progressBars.forEach(bar => observer.observe(bar));

  // 2. Generic Reveal animations using intersection observer if GSAP isn't bound or for simple performance
  const reveals = document.querySelectorAll('.reveal-hidden');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(rev => revealObserver.observe(rev));

  // GSAP-specific ScrollTrigger effects on page components
  gsap.fromTo('.hero-content', 
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 0.9,
      duration: 4.5,
      delay: 0.2,
      ease: 'power3.out'
    }
  );

  gsap.fromTo('.float-element', 
    { scale: 0.95, opacity: 0 },
    {
      scale: 1,
      opacity: 0.8,
      duration: 4.5,
      delay: 0.4,
      ease: 'power2.out'
    }
  );
}

// 21. Dynamic Tech Stack Section Renderer
function renderTechStack() {
  const container = document.getElementById('techStackGrid');
  if (!container) return;

  container.innerHTML = techStack.map((cat, catIdx) => {
    const itemsHtml = cat.items.map(item => {
      const glowColor = item.color || 'rgba(255,255,255,0.4)';
      const badgeClass = item.proficiency === 'Expert' ? 'bg-red-950/60 text-red-400 border-red-900/30' :
                         item.proficiency === 'Advanced' ? 'bg-blue-950/60 text-blue-400 border-blue-900/30' :
                         'bg-green-950/60 text-green-400 border-green-900/30';
      const progressBg = item.proficiency === 'Expert' ? 'bg-red-500' :
                         item.proficiency === 'Advanced' ? 'bg-blue-500' :
                         'bg-green-500';
      const progressWidth = item.proficiency === 'Expert' ? '100%' :
                            item.proficiency === 'Advanced' ? '75%' : '50%';

      return `
        <div class="relative group/tech flex flex-col items-center justify-center p-3.5 rounded-xl border border-white/[0.03] hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer" style="--tech-color: rgba(255, 255, 255, 0.65);">
          <!-- Glowing SVG container - Crisp white by default, glowing white on hover -->
          <div class="w-12 h-12 flex items-center justify-center text-white group-hover/tech:text-white transition-all duration-300 tech-icon-container" 
               style="filter: none;">
            ${getTechSVG(item.name)}
          </div>
          <span class="text-[11px] font-bold text-slate-300 group-hover/tech:text-white mt-2 text-center truncate w-full transition-colors">${item.name}</span>

          <!-- Interactive Tooltip popover -->
          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 rounded-lg bg-neutral-950 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-0 scale-95 pointer-events-none group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-300 z-50 text-center space-y-2">
            <p class="text-xs font-bold text-white">${item.name}</p>
            <p class="text-[10px] text-[#8C8C8C] leading-normal">${item.desc}</p>
            <div class="flex items-center justify-between gap-2 pt-1.5 border-t border-white/5">
              <span class="text-[9px] font-mono text-white/40">Proficiency</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${badgeClass}">${item.proficiency}</span>
            </div>
            <!-- Progress Bar -->
            <div class="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div class="h-full rounded-full ${progressBg}" style="width: ${progressWidth}"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="glass-card p-6 bg-neutral-900/40 border border-white/5 shadow-2xl rounded-2xl flex flex-col gap-6 relative group/card overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.02)] reveal-hidden" style="transition-delay: ${catIdx * 100}ms;">
        <!-- Glowing gradient overlay inside -->
        <div class="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.03] opacity-50 pointer-events-none"></div>

        <!-- Glass sweep reflection on hover -->
        <div class="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none"></div>

        <h3 class="text-xs font-bold text-white font-mono uppercase tracking-widest border-b border-white/5 pb-3 relative z-10">${cat.category}</h3>
        
        <div class="grid grid-cols-3 gap-3 relative z-10">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join('');
}

// 22. Inline SVG Dictionary for Technologies (Recruiter-focused vectors)
function getTechSVG(name) {
  const size = "w-7 h-7";
  switch (name) {
    case 'Python':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18c.9 0 1.66.72 1.66 1.62v1.62h-1.66c-.9 0-1.62.72-1.62 1.62v1.62H9.37V5.04c0-.9-.72-1.62-1.62-1.62H5.25V1.8c0-.9.72-1.62 1.62-1.62h7.38zM9.75 23.82c-.9 0-1.66-.72-1.66-1.62v-1.62h1.66c.9 0 1.62-.72 1.62-1.62v-1.62h3.26v1.62c0 .9.72 1.62 1.62 1.62h2.5v1.62c0 .9-.72 1.62-1.62 1.62H9.75zM12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"/></svg>`;
    case 'SQL':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>`;
    case 'C++':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-6M18 14h-6M12 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h7M15 12h6M21 12h-6"/></svg>`;
    case 'JavaScript':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm12.525 10.938c-.463-.231-.913-.425-1.35-.588l-.225-.087c-.888-.325-1.125-.563-1.125-.975 0-.475.4-.763 1.05-.763.588 0 .975.225 1.338.613l1.125-.8c-.525-.7-1.338-1.125-2.463-1.125-1.65 0-2.65.987-2.65 2.3 0 1.488.95 2.15 2.45 2.712l.338.125c1.025.375 1.338.7 1.338 1.15 0 .525-.487.875-1.225.875-.85 0-1.363-.338-1.887-.987l-1.075.763c.675.925 1.675 1.463 2.963 1.463 1.95 0 3.037-1.075 3.037-2.487 0-1.413-.938-2.025-2.313-2.525zM7.5 12v4.838c0 .8.275 1.1.913 1.1h.637v-1.1h-.45c-.2 0-.25-.075-.25-.338V12h-.85z"/></svg>`;
    case 'HTML5':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 5l1.5 14.5L12 22l8.5-2.5L22 5L12 2zM17 9.5H9.5l.5 4H17L16 17.5L12 19l-4-1.5l-.25-3H10l.13 1.5l1.87.5l1.87-.5l.25-3H7.5l-.75-7h10.5L17 9.5z"/></svg>`;
    case 'CSS3':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 5l1.5 14.5L12 22l8.5-2.5L22 5L12 2zM17.5 8H8.5l.2 2h8.5l-.6 6l-4.6 1.5l-4.6-1.5l-.3-3H9.2l.15 1.5l2.65.9l2.65-.9l.35-3.5H6.5l-.6-6h12l-.4 4z"/></svg>`;
    case 'Scikit-learn':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><line x1="6" y1="6" x2="12" y2="12"/><line x1="12" y1="12" x2="18" y2="18"/></svg>`;
    case 'TensorFlow':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v10l9 5l9-5V7L12 2zM12 22V12M3 7l9 5l9-5M12 12H3M12 12h9"/></svg>`;
    case 'PyTorch':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4c0-2.4-2-4.4-4.5-4.4S7.5 7 7.5 9.4c0 3.3 4.5 9.6 4.5 9.6s4.5-6.3 4.5-9.6z"/><circle cx="12" cy="9.4" r="1.5"/></svg>`;
    case 'Keras':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16M20 4L11 12l9 8M4 12h7"/></svg>`;
    case 'XGBoost':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="12" r="3"></circle><circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="12" y1="5" x2="6" y2="12"/><line x1="12" y1="5" x2="18" y2="12"/><line x1="6" y1="12" x2="6" y2="19"/><line x1="18" y1="12" x2="18" y2="19"/></svg>`;
    case 'LightGBM':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"/></svg>`;
    case 'CatBoost':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>`;
    case 'OpenCV':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><circle cx="7" cy="15" r="4"/><circle cx="17" cy="15" r="4"/></svg>`;
    case 'Hugging Face':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/></svg>`;
    case 'Pandas':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`;
    case 'NumPy':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7v10l10 5l10-5V7L12 2zM12 12V2M2 7l10 5l10-5M12 12v10"/></svg>`;
    case 'SciPy':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 12c4-8 4-8 9-8s5 8 9 8M3 12c4 8 4 8 9 8s5-8 9-8"/></svg>`;
    case 'Statsmodels':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="6" y2="4"/><circle cx="6" cy="4" r="1.5"/><circle cx="18" cy="20" r="1.5"/><line x1="3" y1="20" x2="21" y2="20"/><line x1="3" y1="4" x2="3" y2="20"/></svg>`;
    case 'Matplotlib':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>`;
    case 'Seaborn':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20c3-9 5-13 8-13s4 9 7 9 4-5 6-5M3 3v18h18"/></svg>`;
    case 'Plotly':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21H3V3M7 14l3-3l4 4l5-5"/></svg>`;
    case 'Power BI':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="14" width="4" height="6" rx="1"/><rect x="10" y="8" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>`;
    case 'Tableau':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 10M12 7l-5 5M12 17l5-5"/></svg>`;
    case 'Excel':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 4v16M4 14h16"/></svg>`;
    case 'MySQL':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0-9 9v1a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-1a9 9 0 0 0-9-9z"/><ellipse cx="12" cy="7" rx="3" ry="1.5"/></svg>`;
    case 'PostgreSQL':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18c-3.31 0-6-2.69-6-6a5.91 5.91 0 0 1 .58-2.5h10.84A5.91 5.91 0 0 1 18 14c0 3.31-2.69 6-6 6z"/></svg>`;
    case 'MongoDB':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 0-6 4.5-6 10s4.5 10 6 10 6-4.5 6-10-4.5-10-6-10z"/></svg>`;
    case 'SQLite':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4zM9 9h6v6H9z"/></svg>`;
    case 'VS Code':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22l-6-6l-6 6M6 2l12 10L6 22M18 2v20"/></svg>`;
    case 'Jupyter':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="9" ry="3"/><circle cx="12" cy="7" r="1.5"/><circle cx="12" cy="17" r="1.5"/></svg>`;
    case 'Google Colab':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17c3 0 5-2.2 5-5s-2-5-5-5s-5 2.2-5 5s2 5 5 5z"/><path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/></svg>`;
    case 'Git':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 15V9a4 4 0 0 0-4-4h-5M6 9v6"/></svg>`;
    case 'GitHub':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
    case 'Docker':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="3" height="3" rx="0.5"/><rect x="8" y="6" width="3" height="3" rx="0.5"/><rect x="12" y="6" width="3" height="3" rx="0.5"/><rect x="16" y="6" width="3" height="3" rx="0.5"/><rect x="8" y="10" width="3" height="3" rx="0.5"/><rect x="12" y="10" width="3" height="3" rx="0.5"/><path d="M2 15h20s-2 5-10 5s-10-5-10-5z"/></svg>`;
    case 'Anaconda':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20M2 12a10 10 0 0 1 20 0"/></svg>`;
    case 'AWS':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14s3 2 8 2s8-2 8-2M18 17s-2.5 3-6 3s-6-3-6-3"/></svg>`;
    case 'Azure':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20L12 4zM6 15l6-5l6 5"/></svg>`;
    case 'Google Cloud':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5v10l-9 5l-9-5V7l9-5zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/></svg>`;
    case 'Vercel':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 20h20L12 2z"/></svg>`;
    case 'Netlify':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 6v8l-8 6l-8-6V8l8-6zM8 12h8"/></svg>`;
    case 'Render':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16M4 20h16M8 8l8 8M16 8l-8 8"/></svg>`;
    case 'OpenAI API':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-5.5s1-4 2.5-5.5s3.5-2.5 5.5-2.5s4 1 5.5 2.5M19.5 7.5c1.5 1.5 2.5 3.5 2.5 5.5s-1 4-2.5 5.5s-3.5 2.5-5.5 2.5s-4-1-5.5-2.5"/><circle cx="12" cy="12" r="3"/></svg>`;
    case 'LangChain':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    case 'Ollama':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 0-9 9v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a9 9 0 0 0-9-9z"/><path d="M9 10a3 3 0 0 0 6 0"/></svg>`;
    case 'Streamlit':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2zM12 6l6 12H6l6-12z"/></svg>`;
    case 'Gradio':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 10v4M17 10v4"/></svg>`;
    case 'Windows':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z"/></svg>`;
    case 'Linux':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 0-9 9c0 4 3 8 7 9l2 2l2-2c4-1 7-5 7-9a9 9 0 0 0-9-9z"/><ellipse cx="12" cy="11" rx="4" ry="3"/></svg>`;
    case 'Ubuntu':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="6" r="1.5"/><circle cx="7" cy="14" r="1.5"/><circle cx="17" cy="14" r="1.5"/></svg>`;
    case 'Notion':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 8v8M9 8l6 8M15 8v8"/></svg>`;
    case 'Figma':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5a3 3 0 1 0 3 3V5a3 3 0 0 0-3-3zm0 6a3 3 0 1 0 3 3v-3H8zm6-6a3 3 0 1 0-3 3h3V5zm0 6a3 3 0 1 0-3 3h3v-3zm-3 6a3 3 0 1 0 3 3v-3h-3z"/></svg>`;
    case 'Canva':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0z"/><path d="M12 8v8M8 12h8"/></svg>`;
    case 'Postman':
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4l-4 4M8 12h8"/></svg>`;
    default:
      return `<svg width="28" height="28" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`;
  }
}
