// Interactive Particle Network Background for Hero Section

export function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Particle Settings
  let particlesArray = [];
  const maxDistance = 120; // Max distance for lines connecting particles
  const mouse = {
    x: null,
    y: null,
    radius: 150
  };

  // Adjust particle density based on screen size
  function getParticleCount() {
    const width = window.innerWidth;
    if (width < 640) return 40;  // Mobile
    if (width < 1024) return 80; // Tablet
    return 130;                  // Desktop
  }

  // Handle Resize
  function setCanvasSize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    init();
  }

  // Mouse Interactivity
  window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Constructor
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    // Draw individual particle
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    // Update particle position and bounce/wrap around edges
    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      // Move particle
      this.x += this.directionX;
      this.y += this.directionY;

      // Mouse interactive collision attraction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          
          this.x += forceDirectionX * force * 1.2;
          this.y += forceDirectionY * force * 1.2;
        }
      }

      this.draw();
    }
  }

  // Populate Particle Array
  function init() {
    particlesArray = [];
    const numberOfParticles = getParticleCount();
    
    // Choose theme colors dynamically based on document classes
    const isLight = document.documentElement.classList.contains('light');
    const color = isLight ? 'rgba(37, 99, 235, 0.7)' : 'rgba(255, 255, 255, 0.7)';

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      const directionX = (Math.random() * 0.3) - 0.15;
      const directionY = (Math.random() * 0.3) - 0.15;

      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }

  // Draw lines between close particles
  function connect() {
    const isLight = document.documentElement.classList.contains('light');
    const baseColor = isLight ? '37, 99, 235' : '255, 255, 255';
    
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - (distance / maxDistance)) * 0.3;
          ctx.strokeStyle = `rgba(${baseColor}, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    
    connect();
    animationFrameId = requestAnimationFrame(animate);
  }

  // Setup
  window.addEventListener('resize', setCanvasSize);
  setCanvasSize();
  animate();

  // Watch for theme change to update particle colors
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        init();
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true });

  // Return clean-up handler
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', setCanvasSize);
    observer.disconnect();
  };
}
