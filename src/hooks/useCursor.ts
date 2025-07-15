import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const glow = glowRef.current;

    if (!cursor || !trail || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let glowX = 0;
    let glowY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      
      glowX += (mouseX - glowX) * 0.05;
      glowY += (mouseY - glowY) * 0.05;
      
      trail.style.transform = `translate(${trailX - 4}px, ${trailY - 4}px)`;
      glow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px)`;
      
      requestAnimationFrame(animateTrail);
    };

    const handleMouseEnter = () => {
      cursor.style.transform += ' scale(1.5)';
      trail.style.transform += ' scale(1.5)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
      trail.style.transform = trail.style.transform.replace(' scale(1.5)', '');
    };

    document.addEventListener('mousemove', updateCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animateTrail();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return { cursorRef, trailRef, glowRef };
};