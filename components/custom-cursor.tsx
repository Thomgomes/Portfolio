'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile]);

  // Não renderizar em mobile
  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              x: { type: 'spring', stiffness: 500, damping: 28 },
              y: { type: 'spring', stiffness: 500, damping: 28 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
          />
          
          <motion.div
            className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              scale: isHovering ? 1.5 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              x: { type: 'spring', stiffness: 150, damping: 15 },
              y: { type: 'spring', stiffness: 150, damping: 15 },
              scale: { duration: 0.2 },
              opacity: { duration: 0.2 }
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
