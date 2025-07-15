import { useCursor } from '@/hooks/useCursor';

export default function CustomCursor() {
  const { cursorRef, trailRef, glowRef } = useCursor();

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={trailRef} className="custom-cursor-trail" />
      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
}