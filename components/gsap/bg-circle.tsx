'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundCircles() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const circle1Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const circle1X = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const circle2Y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const circle2X = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  const circle3Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const circle3X = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const circle4Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const circle4Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Círculo 1 - Azul */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        style={{
          top: '10%',
          left: '10%',
          x: circle1X,
          y: circle1Y,
        }}
      />
      
      {/* Círculo 2 - Rosa */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-pink-500/20 blur-3xl"
        style={{
          top: '40%',
          right: '15%',
          x: circle2X,
          y: circle2Y,
        }}
      />
      
      {/* Círculo 3 - Roxo */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl"
        style={{
          bottom: '20%',
          left: '20%',
          x: circle3X,
          y: circle3Y,
        }}
      />
      
      {/* Círculo 4 - Laranja */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"
        style={{
          top: '60%',
          right: '30%',
          y: circle4Y,
          scale: circle4Scale,
        }}
      />
    </div>
  );
}
