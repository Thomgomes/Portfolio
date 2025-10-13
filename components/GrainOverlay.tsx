'use client';
import { useEffect, useRef } from 'react';

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Generate grain noise
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);

      const len = buffer.length;
      for (let i = 0; i < len; i++) {
        // Random grayscale value with alpha
        const value = Math.random() * 255;
        const alpha = Math.random() * 50; // Control opacity
        buffer[i] = 
          (alpha << 24) |  // Alpha
          (value << 16) |  // Blue
          (value << 8) |   // Green
          value;           // Red
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Animate grain
    let animationId: number;
    const animate = () => {
      generateNoise();
      animationId = requestAnimationFrame(animate);
    };

    // Start with slower frame rate for performance
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const throttledAnimate = (currentTime: number) => {
      animationId = requestAnimationFrame(throttledAnimate);
      const deltaTime = currentTime - lastTime;

      if (deltaTime > interval) {
        lastTime = currentTime - (deltaTime % interval);
        generateNoise();
      }
    };

    throttledAnimate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"
      style={{
        imageRendering: 'pixelated',
      }}
    />
  );
}
