// Charts and Visualization manager using Chart.js and HTML Grid

import Chart from 'chart.js/auto';

let radarChartInstance = null;
let doughnutChartInstance = null;

// Get dynamic chart options based on theme
function getChartColors() {
  const isLight = document.documentElement.classList.contains('light');
  return {
    gridColor: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
    angleColor: isLight ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)',
    textColor: isLight ? '#475569' : '#94a3b8',
    primaryColor: isLight ? 'rgba(37, 99, 235, 0.7)' : 'rgba(6, 182, 212, 0.7)',
    primaryBorder: isLight ? '#2563eb' : '#06b6d4',
    secondaryColor: isLight ? 'rgba(124, 58, 237, 0.5)' : 'rgba(139, 92, 246, 0.5)',
    secondaryBorder: isLight ? '#7c3aed' : '#8b5cf6',
  };
}

// 1. Skill Radar Chart
export function renderSkillsRadar() {
  const canvas = document.getElementById('skillsRadarChart');
  if (!canvas) return;

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  const colors = getChartColors();

  radarChartInstance = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: [
        'Machine Learning',
        'Deep Learning',
        'Data Analysis (EDA)',
        'Database (SQL)',
        'Data Visualization',
        'Software Engineering',
        'MLOps & Clouds'
      ],
      datasets: [
        {
          label: 'Current Proficiency',
          data: [92, 85, 95, 90, 88, 80, 70],
          backgroundColor: colors.primaryColor,
          borderColor: colors.primaryBorder,
          pointBackgroundColor: colors.primaryBorder,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: colors.primaryBorder,
          borderWidth: 2,
          fill: true
        },
        {
          label: 'Target Goal (1 Yr)',
          data: [98, 95, 98, 95, 95, 90, 85],
          backgroundColor: colors.secondaryColor,
          borderColor: colors.secondaryBorder,
          pointBackgroundColor: colors.secondaryBorder,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: colors.secondaryBorder,
          borderWidth: 2,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: colors.textColor,
            font: { family: 'Space Grotesk', size: 12 }
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => ` ${context.dataset.label}: ${context.raw}%`
          }
        }
      },
      scales: {
        r: {
          grid: { color: colors.gridColor },
          angleLines: { color: colors.angleColor },
          pointLabels: {
            color: colors.textColor,
            font: { family: 'Space Grotesk', size: 11, weight: '600' }
          },
          ticks: {
            display: false,
            stepSize: 20
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });
}

// 2. Languages Distribution Doughnut Chart
export function renderLanguagesChart() {
  const canvas = document.getElementById('languagesDoughnutChart');
  if (!canvas) return;

  if (doughnutChartInstance) {
    doughnutChartInstance.destroy();
  }

  const colors = getChartColors();
  const isLight = document.documentElement.classList.contains('light');

  doughnutChartInstance = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Python', 'SQL', 'C++', 'JavaScript', 'HTML/CSS/Others'],
      datasets: [
        {
          data: [65, 15, 10, 5, 5],
          backgroundColor: [
            isLight ? '#2563eb' : '#3b82f6', // Blue
            isLight ? '#0891b2' : '#06b6d4', // Cyan
            isLight ? '#7c3aed' : '#8b5cf6', // Purple
            '#eab308',                       // Yellow (JS)
            '#64748b'                        // Slate (Others)
          ],
          borderColor: isLight ? '#ffffff' : '#151c33',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: colors.textColor,
            font: { family: 'Space Grotesk', size: 12 }
          }
        }
      },
      cutout: '65%'
    }
  });
}

// 3. GitHub Heatmap Grid Generator
export function generateGithubHeatmap(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const columns = 24; // Number of weeks shown
  const rows = 7;     // Days of week
  const totalDays = columns * rows;
  
  // Create grids
  for (let i = 0; i < totalDays; i++) {
    const dayBlock = document.createElement('div');
    
    // Generate simulated commits level: 0 to 4
    let level = 0;
    const rand = Math.random();
    if (rand > 0.85) level = 4;
    else if (rand > 0.7) level = 3;
    else if (rand > 0.5) level = 2;
    else if (rand > 0.2) level = 1;

    // Calculate dates roughly
    const date = new Date();
    date.setDate(date.getDate() - (totalDays - i));
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const commitsCount = level === 0 ? 'No' : level * 2 + Math.floor(Math.random() * 2);

    dayBlock.className = `w-3 h-3 rounded-[2px] transition-all duration-300 relative group cursor-pointer`;
    
    // Set colors based on contribution level
    const isLight = document.documentElement.classList.contains('light');
    if (isLight) {
      if (level === 0) dayBlock.style.backgroundColor = '#e2e8f0';
      else if (level === 1) dayBlock.style.backgroundColor = '#dbeafe';
      else if (level === 2) dayBlock.style.backgroundColor = '#93c5fd';
      else if (level === 3) dayBlock.style.backgroundColor = '#3b82f6';
      else dayBlock.style.backgroundColor = '#1d4ed8';
    } else {
      if (level === 0) dayBlock.style.backgroundColor = '#151c33';
      else if (level === 1) dayBlock.style.backgroundColor = 'rgba(6, 182, 212, 0.2)';
      else if (level === 2) dayBlock.style.backgroundColor = 'rgba(6, 182, 212, 0.45)';
      else if (level === 3) dayBlock.style.backgroundColor = 'rgba(6, 182, 212, 0.75)';
      else {
        dayBlock.style.backgroundColor = '#06b6d4';
        dayBlock.classList.add('shadow-glow-cyan');
      }
    }

    // Embed Tooltip in HTML directly
    dayBlock.innerHTML = `
      <span class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        ${commitsCount} contributions on ${formattedDate}
      </span>
    `;

    container.appendChild(dayBlock);
  }
}

// Global update trigger for theme changes
export function updateVisualizations() {
  renderSkillsRadar();
}

// Watch theme changes to refresh chart variables
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      updateVisualizations();
    }
  });
});
observer.observe(document.documentElement, { attributes: true });
