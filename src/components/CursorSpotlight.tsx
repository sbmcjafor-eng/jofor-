import React, { useEffect, useState, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFinePointer, setIsFinePointer] = useState<boolean>(true);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if the device has a desktop mouse / trackpad
    if (typeof window !== 'undefined') {
      const fineMedia = window.matchMedia('(pointer: fine)');
      setIsFinePointer(fineMedia.matches);

      const handleMediaChange = (e: MediaQueryListEvent) => {
        setIsFinePointer(e.matches);
      };

      fineMedia.addEventListener('change', handleMediaChange);
      return () => fineMedia.removeEventListener('change', handleMediaChange);
    }
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isFinePointer, isVisible]);

  // Smooth lerp loop for fluid tracking without lag
  useEffect(() => {
    if (!isFinePointer) return;

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setMousePos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;

        if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
          return targetPos;
        }

        return {
          x: lerp(prev.x, targetPos.x, 0.32),
          y: lerp(prev.y, targetPos.y, 0.32),
        };
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isFinePointer, targetPos]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Ambient Circular Torch Spotlight (Rich, deeper illumination across surfaces) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.12), rgba(168, 85, 247, 0.05), transparent 75%)`,
        }}
      />

      {/* 2. Deeper, Minimalist Circular Glowing Ring (গোল আকারের আলো) 
          - Consistent size everywhere (no shrinking or enlarging)
          - Deep rich golden amber hue
          - Absolutely no dot/mark in the center as strictly requested */}
      <div
        className="pointer-events-none fixed rounded-full"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '46px',
          height: '46px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.40) 0%, rgba(217, 119, 6, 0.22) 50%, rgba(180, 83, 9, 0.06) 75%, transparent 100%)',
          border: '1.75px solid rgba(245, 158, 11, 0.85)',
          boxShadow: '0 0 28px 7px rgba(245, 158, 11, 0.55), inset 0 0 14px rgba(251, 191, 36, 0.35)',
        }}
      />
    </div>
  );
};
