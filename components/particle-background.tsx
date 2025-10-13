'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface ParticleBackgroundProps {
  parentRef: React.RefObject<HTMLElement | null>;
  particleCount?: number;
  particleSpeed?: number;
  connectionDistance?: number;
  useThemeColors?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  parentRef,
  particleCount = 80,
  particleSpeed = 0.5,
  connectionDistance = 120,
  useThemeColors = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const animationFrameRef = useRef<number | null>(null);

  // Detecta dark mode
  const isDarkMode = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  }, []);

  // Configuração de cores baseada no tema
  const getConfig = useCallback(() => {
    const darkMode = isDarkMode();
    
    if (useThemeColors) {
      return darkMode ? {
        particleColor: 'rgba(215, 32, 40, 0.7)', // --primary dark
        lineColor: 'rgba(215, 32, 40, 0.2)',
        mouseLineColor: 'rgba(255, 59, 68, 0.4)', // --primary-light dark
      } : {
        particleColor: 'rgba(164, 22, 26, 0.6)', // --primary light
        lineColor: 'rgba(164, 22, 26, 0.15)',
        mouseLineColor: 'rgba(215, 32, 40, 0.35)', // --primary-light
      };
    }

    return {
      particleColor: 'rgba(221, 90, 37, 0.7)',
      lineColor: 'rgba(221, 90, 37, 0.2)',
      mouseLineColor: 'rgba(221, 90, 37, 0.4)',
    };
  }, [isDarkMode, useThemeColors]);

  // Classe Particle otimizada
  const createParticle = useCallback((width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * particleSpeed,
      vy: (Math.random() - 0.5) * particleSpeed,
      radius: Math.random() * 1.5 + 1,
    };
  }, [particleSpeed]);

  // Atualiza posição da partícula
  const updateParticle = useCallback((particle: Particle, width: number, height: number) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Wrap around edges
    if (particle.x < 0) particle.x = width;
    if (particle.x > width) particle.x = 0;
    if (particle.y < 0) particle.y = height;
    if (particle.y > height) particle.y = 0;
  }, []);

  // Desenha partícula
  const drawParticle = useCallback((
    ctx: CanvasRenderingContext2D, 
    particle: Particle, 
    color: string
  ) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }, []);

  // Desenha conexões entre partículas
  const drawConnections = useCallback((
    ctx: CanvasRenderingContext2D,
    particles: Particle[],
    mouse: { x: number | null; y: number | null },
    config: ReturnType<typeof getConfig>
  ) => {
    const mouseConnectionDistance = connectionDistance * 1.25;

    // Conexões entre partículas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = config.lineColor;
          ctx.lineWidth = 1 - distance / connectionDistance;
          ctx.stroke();
        }
      }

      // Conexão com o mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseConnectionDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = config.mouseLineColor;
          ctx.lineWidth = (1 - distance / mouseConnectionDistance) * 2;
          ctx.stroke();
        }
      }
    }
  }, [connectionDistance]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parentElement = parentRef.current;

    if (!canvas || !parentElement) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Inicialização
    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = parentElement.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);

      // Criar partículas
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle(rect.width, rect.height));
      }
    };

    // Loop de animação otimizado
    const animate = () => {
      const rect = parentElement.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const config = getConfig();

      // Atualiza e desenha partículas
      particlesRef.current.forEach((particle) => {
        updateParticle(particle, rect.width, rect.height);
        drawParticle(ctx, particle, config.particleColor);
      });

      // Desenha conexões
      drawConnections(ctx, particlesRef.current, mouseRef.current, config);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Event handlers
    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    // Observa mudanças no tema
    const themeObserver = new MutationObserver(() => {
      // Força re-render quando o tema muda
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animate();
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Setup
    window.addEventListener('resize', handleResize);
    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseleave', handleMouseLeave);
      themeObserver.disconnect();
    };
  }, [
    parentRef,
    particleCount,
    particleSpeed,
    connectionDistance,
    createParticle,
    updateParticle,
    drawParticle,
    drawConnections,
    getConfig,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
