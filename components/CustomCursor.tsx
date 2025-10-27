"use client";

import { useEffect, useRef, useState } from "react";

// Selector for all interactive elements that should trigger the pointer cursor
const INTERACTIVE_SELECTOR =
  'a[href], button:not(:disabled), [role="button"], input[type="button"]:not(:disabled), input[type="submit"]:not(:disabled), label, .player-btn, .playlist-item, .playlist-btn, .volume-icon, .volume-slider, .social-dot, .survey-button, .pixel-button';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices (mobile/tablets)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let x = -100;
    let y = -100;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      // Check if hovering over an interactive element
      const target = e.target as Element | null;
      setIsPointer(target?.closest?.(INTERACTIVE_SELECTOR) ? true : false);

      // Use requestAnimationFrame for smooth updates
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setPos({ x, y }));
    };

    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);

    // Add event listeners
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        pointerEvents: "none",
        zIndex: 10000,
      }}
      aria-hidden="true"
    >
      <img
        src="/images/cursor.svg"
        alt=""
        width={32}
        height={32}
        style={{
          position: "absolute",
          transform: `translate(${pos.x - 16}px, ${pos.y - 16}px) scale(${
            isDown ? 0.85 : 1
          })`,
          transformOrigin: "center",
          imageRendering: "pixelated",
          willChange: "transform",
          transition: "transform 80ms ease",
          filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
        }}
      />
    </div>
  );
}
