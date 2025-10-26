"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CursorTrail() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkleId = 0;
    let lastSparkleTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();

      // Throttle to every 80ms for performance
      if (now - lastSparkleTime < 30) {
        return;
      }

      lastSparkleTime = now;

      const newSparkle: Sparkle = {
        id: sparkleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 18 + 18,
      };

      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-trail-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="cursor-sparkle"
          style={{
            position: "absolute",
            left: `${sparkle.x - sparkle.size / 3}px`,
            top: `${sparkle.y - sparkle.size / 3}px`,
            pointerEvents: "none",
          }}
        >
          <img
            src="/images/stars.svg"
            alt=""
            width={sparkle.size}
            height={sparkle.size}
            style={{
              display: "block",
              imageRendering: "pixelated",
            }}
          />
        </div>
      ))}
    </div>
  );
}
