"use client";

import React, { useEffect, useRef } from "react";

/**
 * ProjectsHeroAtmosphere:
 * Interactive 3D Isometric Architectural Blueprint & City Grid:
 * - Dynamic isometric city grid of wireframe building monoliths
 * - Monolith heights oscillate and morph in subtle architectural rhythms
 * - Glowing laser elevation scan line sweeps vertically across the buildings
 * - Interactive cursor parallax tilts the grid perspective on mouse move
 * - CAD isometric construction lines, elevation ticks, and floating blueprint coordinate nodes
 */
export const ProjectsHeroAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width * 0.75;
    let mouseY = height * 0.5;
    let targetMouseX = width * 0.75;
    let targetMouseY = height * 0.5;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // City grid configuration (isometric 7x7 grid of architectural monoliths)
    const GRID_COLS = 7;
    const GRID_ROWS = 7;
    const ISO_W = 44; // Half-width of isometric cell
    const ISO_H = 22; // Half-height of isometric cell

    // Base heights and target heights for each building in the grid
    const buildings: Array<{
      gx: number;
      gy: number;
      baseHeight: number;
      targetHeight: number;
      currentHeight: number;
      speed: number;
      phase: number;
      floors: number;
      isHighlighted: boolean;
    }> = [];

    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        // Distance from center to create a skyline profile (taller toward center)
        const distFromCenter = Math.hypot(c - 3, r - 3);
        const maxH = Math.max(20, Math.floor((4.5 - distFromCenter * 0.7) * 45));
        const baseH = Math.max(15, maxH + (Math.random() * 30 - 15));

        buildings.push({
          gx: c,
          gy: r,
          baseHeight: baseH,
          targetHeight: baseH,
          currentHeight: baseH * 0.2, // Starts low and animates up
          speed: 0.015 + Math.random() * 0.02,
          phase: Math.random() * Math.PI * 2,
          floors: Math.max(3, Math.floor(baseH / 14)),
          isHighlighted: (c === 3 && r === 3) || (c === 2 && r === 4) || (c === 4 && r === 2),
        });
      }
    }

    // Sort back-to-front (depth sorting for isometric rendering)
    buildings.sort((a, b) => a.gx + a.gy - (b.gx + b.gy));

    let scanY = 0;
    let scanDirection = 1;
    let time = 0;

    const render = () => {
      time += 0.018;

      // Smooth mouse interpolation for subtle parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      // Position center of grid on right-side of hero section on desktop, centered on mobile
      const originX = isMobile
        ? width * 0.5 + (mouseX - width * 0.5) * 0.02
        : width * 0.76 + (mouseX - width * 0.5) * 0.03;
      const originY = isMobile
        ? height * 0.62 + (mouseY - height * 0.5) * 0.02
        : height * 0.52 + (mouseY - height * 0.5) * 0.03;

      // Laser elevation scan level (ranges 0 to 220px)
      scanY += scanDirection * 0.9;
      if (scanY > 210) scanDirection = -1;
      if (scanY < 0) scanDirection = 1;

      // Helper to project grid coords (gx, gy) to 2D screen coords
      const toIso = (gx: number, gy: number, z: number = 0) => {
        const offsetC = gx - (GRID_COLS - 1) / 2;
        const offsetR = gy - (GRID_ROWS - 1) / 2;
        const sx = originX + (offsetC - offsetR) * ISO_W;
        const sy = originY + (offsetC + offsetR) * ISO_H - z;
        return { x: sx, y: sy };
      };

      // 1. Draw Ground Matrix Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;

      for (let c = -1; c <= GRID_COLS; c++) {
        const p1 = toIso(c, -1, 0);
        const p2 = toIso(c, GRID_ROWS, 0);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
      for (let r = -1; r <= GRID_ROWS; r++) {
        const p1 = toIso(-1, r, 0);
        const p2 = toIso(GRID_COLS, r, 0);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // 2. Draw 3D Architectural Monoliths
      const cellPad = 6; // Padding between monoliths

      buildings.forEach((b) => {
        // Morph heights in a breathing rhythm
        const wave = Math.sin(time + b.phase) * 12;
        b.targetHeight = Math.max(15, b.baseHeight + wave);
        b.currentHeight += (b.targetHeight - b.currentHeight) * 0.06;

        const h = b.currentHeight;

        // Ground 4 corners
        const pA = toIso(b.gx, b.gy, 0); // North
        const pB = toIso(b.gx + 0.85, b.gy, 0); // East
        const pC = toIso(b.gx + 0.85, b.gy + 0.85, 0); // South
        const pD = toIso(b.gx, b.gy + 0.85, 0); // West

        // Roof 4 corners (elevated by h)
        const rA = { x: pA.x, y: pA.y - h };
        const rB = { x: pB.x, y: pB.y - h };
        const rC = { x: pC.x, y: pC.y - h };
        const rD = { x: pD.x, y: pD.y - h };

        // Left Face (West -> South)
        ctx.beginPath();
        ctx.moveTo(pD.x, pD.y);
        ctx.lineTo(pC.x, pC.y);
        ctx.lineTo(rC.x, rC.y);
        ctx.lineTo(rD.x, rD.y);
        ctx.closePath();
        ctx.fillStyle = b.isHighlighted
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(20, 20, 20, 0.55)";
        ctx.fill();
        ctx.strokeStyle = b.isHighlighted
          ? "rgba(255, 255, 255, 0.28)"
          : "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = b.isHighlighted ? 1.2 : 0.8;
        ctx.stroke();

        // Right Face (South -> East)
        ctx.beginPath();
        ctx.moveTo(pC.x, pC.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.lineTo(rB.x, rB.y);
        ctx.lineTo(rC.x, rC.y);
        ctx.closePath();
        ctx.fillStyle = b.isHighlighted
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(30, 30, 30, 0.65)";
        ctx.fill();
        ctx.strokeStyle = b.isHighlighted
          ? "rgba(255, 255, 255, 0.32)"
          : "rgba(255, 255, 255, 0.10)";
        ctx.lineWidth = b.isHighlighted ? 1.2 : 0.8;
        ctx.stroke();

        // Roof Top Face
        ctx.beginPath();
        ctx.moveTo(rA.x, rA.y);
        ctx.lineTo(rB.x, rB.y);
        ctx.lineTo(rC.x, rC.y);
        ctx.lineTo(rD.x, rD.y);
        ctx.closePath();
        ctx.fillStyle = b.isHighlighted
          ? "rgba(255, 255, 255, 0.16)"
          : "rgba(45, 45, 45, 0.75)";
        ctx.fill();
        ctx.strokeStyle = b.isHighlighted
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(255, 255, 255, 0.18)";
        ctx.lineWidth = b.isHighlighted ? 1.4 : 0.9;
        ctx.stroke();

        // Floor division slab lines (architectural floor plates)
        const floorCount = Math.floor(h / 12);
        if (floorCount > 1) {
          ctx.strokeStyle = b.isHighlighted
            ? "rgba(255, 255, 255, 0.14)"
            : "rgba(255, 255, 255, 0.04)";
          ctx.lineWidth = 0.6;
          for (let f = 1; f < floorCount; f++) {
            const fh = (h / floorCount) * f;
            // Left face slab
            ctx.beginPath();
            ctx.moveTo(pD.x, pD.y - fh);
            ctx.lineTo(pC.x, pC.y - fh);
            ctx.stroke();
            // Right face slab
            ctx.beginPath();
            ctx.moveTo(pC.x, pC.y - fh);
            ctx.lineTo(pB.x, pB.y - fh);
            ctx.stroke();
          }
        }

        // Active laser scan intersection on building if scanY passes through its height
        if (scanY > 0 && scanY < h) {
          const sy = pC.y - scanY;
          const syD = pD.y - scanY;
          const syB = pB.y - scanY;

          ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(pD.x, syD);
          ctx.lineTo(pC.x, sy);
          ctx.lineTo(pB.x, syB);
          ctx.stroke();

          // Small laser pinpoint glow
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.beginPath();
          ctx.arc(pC.x, sy, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Highlight marker on top of key landmarks
        if (b.isHighlighted) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.beginPath();
          ctx.arc(rC.x, rC.y, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Monospace coordinate label above primary tower
          if (b.gx === 3 && b.gy === 3) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
            ctx.font = "9px monospace";
            ctx.fillText(`+${Math.round(h * 2.4)}M ELEV`, rC.x + 8, rC.y - 10);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
            ctx.beginPath();
            ctx.moveTo(rC.x, rC.y);
            ctx.lineTo(rC.x + 6, rC.y - 8);
            ctx.lineTo(rC.x + 48, rC.y - 8);
            ctx.stroke();
          }
        }
      });

      // 3. Global Laser Elevation Horizontal Scan Plane
      const planeCenter = toIso(3, 3, scanY);
      const grad = ctx.createRadialGradient(
        planeCenter.x,
        planeCenter.y,
        10,
        planeCenter.x,
        planeCenter.y,
        isMobile ? 180 : 320
      );
      grad.addColorStop(0, "rgba(255, 255, 255, 0.12)");
      grad.addColorStop(0.5, "rgba(255, 255, 255, 0.03)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(planeCenter.x, planeCenter.y, isMobile ? 190 : 340, isMobile ? 95 : 170, 0, 0, Math.PI * 2);
      ctx.fill();

      // Elevation scan text on the perimeter
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.font = "9px monospace";
      ctx.fillText(
        `SCANNING LEVEL // Z: ${Math.round(scanY * 1.5)}M`,
        originX + (isMobile ? -90 : 160),
        originY - (isMobile ? 160 : 200)
      );

      // CAD Axis Compass marker
      const axisOrigin = { x: originX - (isMobile ? 100 : 220), y: originY + (isMobile ? 110 : 150) };
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 1;
      // X-Axis (Isometric)
      ctx.beginPath();
      ctx.moveTo(axisOrigin.x, axisOrigin.y);
      ctx.lineTo(axisOrigin.x + 30, axisOrigin.y + 15);
      ctx.stroke();
      ctx.fillText("X: NORTH", axisOrigin.x + 34, axisOrigin.y + 18);
      // Y-Axis
      ctx.beginPath();
      ctx.moveTo(axisOrigin.x, axisOrigin.y);
      ctx.lineTo(axisOrigin.x - 30, axisOrigin.y + 15);
      ctx.stroke();
      ctx.fillText("Y: EAST", axisOrigin.x - 72, axisOrigin.y + 18);
      // Z-Axis
      ctx.beginPath();
      ctx.moveTo(axisOrigin.x, axisOrigin.y);
      ctx.lineTo(axisOrigin.x, axisOrigin.y - 35);
      ctx.stroke();
      ctx.fillText("Z: ELEV", axisOrigin.x - 16, axisOrigin.y - 40);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none select-none z-10 w-full h-full"
    />
  );
};
