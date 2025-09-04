'use client';

import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Configuration ---
    const config = {
      particleColor: 'rgba(221, 90, 37, 0.7)',
      lineColor: 'rgba(221, 90, 37, 0.2)',
      particleCount: 80, // Reduzi um pouco para melhor performance
      particleSpeed: 0.5,
      particleRadius: 2,
      connectionDistance: 120,
      mouseConnectionDistance: 150,
      dotBackgroundColor: 'rgba(221, 90, 37, 0.05)',
      dotSize: 1,
      dotSpacing: 40,
    };

    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * config.particleSpeed;
        this.vy = (Math.random() - 0.5) * config.particleSpeed;
        this.radius = Math.random() * config.particleRadius + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = config.particleColor;
        ctx!.fill();
      }
    }

    function init() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function drawDottedBackground() {
        // Opcional: Remova ou comente esta função se não quiser o fundo pontilhado
        ctx!.fillStyle = config.dotBackgroundColor;
        for (let x = 0; x < canvas!.width; x += config.dotSpacing) {
            for (let y = 0; y < canvas!.height; y += config.dotSpacing) {
                ctx!.beginPath();
                ctx!.arc(x, y, config.dotSize, 0, Math.PI * 2);
                ctx!.fill();
            }
        }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionDistance) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = config.lineColor;
            ctx!.lineWidth = 1 - distance / config.connectionDistance;
            ctx!.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.mouseConnectionDistance) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.strokeStyle = 'rgba(221, 90, 37, 0.4)';
            ctx!.lineWidth = (1 - distance / config.mouseConnectionDistance) * 2;
            ctx!.stroke();
          }
        }
      }
    }

    let animationFrameId: number;
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Se não quiser o fundo pontilhado, comente a linha abaixo
      drawDottedBackground(); 

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    }
    
    // --- Event Listeners ---
    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };
    const handleMouseOut = () => {
        mouse.x = null;
        mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // O array vazio garante que o useEffect rode apenas uma vez

  return <canvas ref={canvasRef} className='absolute top-0 left-0 z-[-1] bg-background' />;
//   background: '#0d0d0d'
};

export default ParticleBackground;