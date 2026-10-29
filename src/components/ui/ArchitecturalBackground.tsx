"use client";

import React, { useEffect, useRef } from "react";

/**
 * ArchitecturalBackground:
 * Renders an interactive luxury particle constellation with glowing nodes,
 * connecting lines, and mouse-reactive ripples on a deep black canvas.
 */
export const ArchitecturalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle ripple / repel
    const mouse = {
      x: width * 0.7,
      y: height * 0.5,
      targetX: width * 0.7,
      targetY: height * 0.5,
      radius: 200,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Node particle definition
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      pulseSpeed: number;
      pulseOffset: number;
    }

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      // Moderate node density for high elegance and flawless 60fps performance
      const count = Math.floor((width * height) / 22000) + 38;

      for (let i = 0; i < count; i++) {
        // Distribute slightly more towards right half to leave clean negative space for typography on the left
        const xBias = Math.random() > 0.4 ? 0.35 * width + Math.random() * 0.65 * width : Math.random() * width;
        const x = xBias;
        const y = Math.random() * height;

        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.4 + 0.25,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Clear with true black
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Subtle architectural glowing horizon beam
      const horizonGlow = ctx.createRadialGradient(
        width * 0.75,
        height * 0.55,
        50,
        width * 0.75,
        height * 0.55,
        width * 0.6
      );
      horizonGlow.addColorStop(0, "rgba(255, 255, 255, 0.04)");
      horizonGlow.addColorStop(0.5, "rgba(255, 255, 255, 0.012)");
      horizonGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, 0, width, height);

      // Connect nodes with hairline architectural geometry
      const maxDistance = 145;

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Update movement
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Soft bounce boundaries
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Mouse interactivity (subtle push away)
        const dx = mouse.x - nodeA.x;
        const dy = mouse.y - nodeA.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 8;
          nodeA.x -= (dx / dist) * force;
          nodeA.y -= (dy / dist) * force;
        }

        // Draw connecting architectural lines
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const ldx = nodeA.x - nodeB.x;
          const ldy = nodeA.y - nodeB.y;
          const lineDist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (lineDist < maxDistance) {
            const lineAlpha = (1 - lineDist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulsatingAlpha = node.alpha + Math.sin(time + node.pulseOffset) * 0.15;

        // Outer glow
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4.5
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${Math.max(0, pulsatingAlpha * 0.65)})`);
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Solid inner core
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, pulsatingAlpha + 0.2)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block select-none pointer-events-auto"
      />
      {/* Editorial Left-Side Vignette to guarantee pristine text contrast */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
      
      {/* Top and Bottom Architectural Edge Fades */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};
