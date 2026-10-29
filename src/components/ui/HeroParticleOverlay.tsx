"use client";

import React, { useEffect, useRef } from "react";

/**
 * ArchitecturalBlueprintOverlay:
 * Renders an ultra-luxury real-estate CAD Blueprint animation over the skyline:
 * - Slow sweeping horizontal laser scan beam with ambient glow
 * - Precise architectural dimension lines & metric measurement indicators
 * - Architectural crosshairs & corner viewport reticles
 * - Coordinate elevation markers (e.g. LAT: 25.1972° N, ELEV: +420M)
 * - Interactive crosshair target tracking mouse movement
 */
export const HeroParticleOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for interactive CAD crosshairs
    const mouse = {
      x: width * 0.72,
      y: height * 0.45,
      targetX: width * 0.72,
      targetY: height * 0.45,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);



    // Fixed architectural marker hotspots on landmark towers
    const markers = [
      { rx: 0.62, ry: 0.32, label: "BURJ HORIZON", elev: "+828M", code: "DXB-01" },
      { rx: 0.78, ry: 0.48, label: "LANDMARK ARCH", elev: "+340M", code: "DXB-02" },
      { rx: 0.91, ry: 0.58, label: "COASTAL SPIRE", elev: "+295M", code: "DXB-03" },
      { rx: 0.48, ry: 0.68, label: "CANAL ENCLAVE", elev: "+180M", code: "DXB-04" },
    ];

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      ctx.clearRect(0, 0, width, height);

      // 1. Precise CAD Grid Lines (Subtle Hairlines)
      const gridSize = 120;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Corner Bracket Reticles (Architectural Viewport framing)
      const bracketSize = 24;
      const bracketMargin = 32;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 1;

      // Top-Left
      ctx.beginPath();
      ctx.moveTo(bracketMargin, bracketMargin + bracketSize);
      ctx.lineTo(bracketMargin, bracketMargin);
      ctx.lineTo(bracketMargin + bracketSize, bracketMargin);
      ctx.stroke();

      // Top-Right
      ctx.beginPath();
      ctx.moveTo(width - bracketMargin - bracketSize, bracketMargin);
      ctx.lineTo(width - bracketMargin, bracketMargin);
      ctx.lineTo(width - bracketMargin, bracketMargin + bracketSize);
      ctx.stroke();

      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(bracketMargin, height - bracketMargin - bracketSize);
      ctx.lineTo(bracketMargin, height - bracketMargin);
      ctx.lineTo(bracketMargin + bracketSize, height - bracketMargin);
      ctx.stroke();

      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(width - bracketMargin - bracketSize, height - bracketMargin);
      ctx.lineTo(width - bracketMargin, height - bracketMargin);
      ctx.lineTo(width - bracketMargin, height - bracketMargin - bracketSize);
      ctx.stroke();



      // 4. Architectural Hotspot Markers over Skyline Landmarks
      markers.forEach((m, idx) => {
        const mx = m.rx * width;
        const my = m.ry * height;

        // Pulse wave radius
        const pulse = (time * 1.5 + idx * 1.2) % 3;
        const pulseRadius = 6 + pulse * 12;
        const pulseAlpha = Math.max(0, 0.45 * (1 - pulse / 3));

        // Outer ripple
        ctx.strokeStyle = `rgba(255, 255, 255, ${pulseAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(mx, my, pulseRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Target center dot
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Hotspot crosshair ticks
        const tick = 6;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(mx - tick, my);
        ctx.lineTo(mx + tick, my);
        ctx.moveTo(mx, my - tick);
        ctx.lineTo(mx, my + tick);
        ctx.stroke();

        // Architectural metric callout tag
        ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
        ctx.font = "9px 'Courier New', monospace";
        ctx.fillText(`[${m.code}] ${m.label}`, mx + 12, my - 4);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillText(`ELEV: ${m.elev}`, mx + 12, my + 8);
      });

      // 5. Interactive CAD Crosshair Follower on Mouse (with coordinate readouts)
      const chSize = 14;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 0.8;

      // Small center reticle
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshair lines
      ctx.beginPath();
      ctx.moveTo(mouse.x - chSize - 16, mouse.y);
      ctx.lineTo(mouse.x - 16, mouse.y);
      ctx.moveTo(mouse.x + 16, mouse.y);
      ctx.lineTo(mouse.x + chSize + 16, mouse.y);

      ctx.moveTo(mouse.x, mouse.y - chSize - 16);
      ctx.lineTo(mouse.x, mouse.y - 16);
      ctx.moveTo(mouse.x, mouse.y + 16);
      ctx.lineTo(mouse.x, mouse.y + chSize + 16);
      ctx.stroke();

      // Coordinate readout box
      ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      ctx.fillRect(mouse.x + 22, mouse.y - 18, 120, 28);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(mouse.x + 22, mouse.y - 18, 120, 28);

      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      ctx.font = "9px 'Courier New', monospace";
      ctx.fillText(`X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)}`, mouse.x + 28, mouse.y - 6);
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.fillText(`LAT 25.1972° N`, mouse.x + 28, mouse.y + 6);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 w-full h-full pointer-events-none select-none"
    />
  );
};
