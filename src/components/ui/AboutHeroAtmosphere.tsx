"use client";

import React, { useEffect, useRef } from "react";

interface ConstellationNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  pulseSpeed: number;
  phase: number;
  isAnchor: boolean;
  label?: string;
}

/**
 * AboutHeroAtmosphere:
 * Interactive Architectural Constellation & Starfield Web:
 * - Fluid mesh of glowing blueprint celestial coordinate nodes
 * - Laser proximity filaments connecting adjacent nodes within proximity threshold
 * - Magnetic interactive cursor pull that tethers nearby nodes with high-brightness laser filaments
 * - Subtle pulsing architectural beacon rings around key landmark anchor stars
 * - Monospace celestial coordinate readouts & dynamic connection density metrics
 */
export const AboutHeroAtmosphere: React.FC = () => {
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
    let isHovering = false;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetMouseX = width * 0.75;
      targetMouseY = height * 0.5;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initialize Constellation Nodes
    const isMobile = width < 768;
    const nodeCount = isMobile ? 38 : 65;
    const connectionDist = isMobile ? 110 : 150;
    const mouseConnectionDist = isMobile ? 160 : 220;

    const anchorLabels = [
      "SAJ // ALPHA",
      "CANAL MONOLITH",
      "MARINA SPIRE",
      "JUMEIRAH RESIDENCE",
      "SANCTUARY NODE",
      "EMIRATES MERIDIAN",
    ];

    const nodes: ConstellationNode[] = Array.from({ length: nodeCount }, (_, i) => {
      const isAnchor = i < anchorLabels.length;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: isAnchor ? 2.8 : Math.random() * 1.5 + 0.8,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        phase: Math.random() * Math.PI * 2,
        isAnchor,
        label: isAnchor ? anchorLabels[i] : undefined,
      };
    });

    let time = 0;

    const render = () => {
      time += 0.018;

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // 1. Update and drift nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Soft screen bounce boundaries
        if (node.x < 20) {
          node.x = 20;
          node.vx *= -1;
        } else if (node.x > width - 20) {
          node.x = width - 20;
          node.vx *= -1;
        }

        if (node.y < 20) {
          node.y = 20;
          node.vy *= -1;
        } else if (node.y > height - 20) {
          node.y = height - 20;
          node.vy *= -1;
        }

        // Magnetic attraction toward mouse
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseConnectionDist && dist > 10) {
          const force = (1 - dist / mouseConnectionDist) * 0.015;
          node.x += dx * force;
          node.y += dy * force;
        }
      });

      // 2. Draw Inter-Node Laser Connections
      let activeConnections = 0;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);

          if (dist < connectionDist) {
            activeConnections++;
            const strength = 1 - dist / connectionDist;
            const alpha = strength * 0.22;

            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = strength * 1.2;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Connect Nearby Nodes Directly to Interactive Cursor
      nodes.forEach((node) => {
        const distToMouse = Math.hypot(mouseX - node.x, mouseY - node.y);

        if (distToMouse < mouseConnectionDist) {
          const strength = 1 - distToMouse / mouseConnectionDist;
          const laserGrad = ctx.createLinearGradient(node.x, node.y, mouseX, mouseY);
          laserGrad.addColorStop(0, `rgba(255, 255, 255, ${strength * 0.35})`);
          laserGrad.addColorStop(1, `rgba(255, 255, 255, ${strength * 0.8})`);

          ctx.strokeStyle = laserGrad;
          ctx.lineWidth = strength * 1.6;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();

          // Small pulse dot running along the line
          const progress = (time * 1.5 + node.phase) % 1;
          const pulseX = node.x + (mouseX - node.x) * progress;
          const pulseY = node.y + (mouseY - node.y) * progress;
          ctx.fillStyle = `rgba(255, 255, 255, ${strength * 0.9})`;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 4. Draw Cursor Focal Reticle
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 1;

      // Small cursor ring
      const cursorPulse = Math.sin(time * 3) * 3 + 12;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, cursorPulse, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshair ticks
      ctx.beginPath();
      ctx.moveTo(mouseX - 6, mouseY);
      ctx.lineTo(mouseX + 6, mouseY);
      ctx.moveTo(mouseX, mouseY - 6);
      ctx.lineTo(mouseX, mouseY + 6);
      ctx.stroke();

      // 5. Draw Celestial Coordinate Nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.phase) * 0.3 + 0.7;
        const currentRadius = node.baseRadius * pulse;

        // Glowing outer halo for anchors
        if (node.isAnchor) {
          const haloGrad = ctx.createRadialGradient(
            node.x,
            node.y,
            1,
            node.x,
            node.y,
            node.baseRadius * 6
          );
          haloGrad.addColorStop(0, "rgba(255, 255, 255, 0.35)");
          haloGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.08)");
          haloGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.baseRadius * 6, 0, Math.PI * 2);
          ctx.fill();

          // Orbiting telemetry ring
          const ringRadius = 14 + Math.sin(time * 2 + node.phase) * 2;
          ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Anchor Text Label
          if (node.label && width > 640) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
            ctx.font = "8px monospace";
            ctx.fillText(node.label, node.x + ringRadius + 4, node.y + 3);
          }
        }

        // Star core
        ctx.fillStyle = node.isAnchor
          ? "rgba(255, 255, 255, 0.95)"
          : `rgba(255, 255, 255, ${0.4 + pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Corner Architectural Telemetry Overlay
      if (width > 768) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.font = "9px monospace";
        const metricX = width - 240;
        const metricY = height - 48;

        ctx.fillText(`CONSTELLATION NODES: ${nodes.length}`, metricX, metricY);
        ctx.fillText(`TETHER FILAMENTS: ${activeConnections} ACTIVE`, metricX, metricY + 14);

        // Thin CAD indicator line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(metricX - 12, metricY - 10);
        ctx.lineTo(metricX - 12, metricY + 20);
        ctx.lineTo(metricX + 160, metricY + 20);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none select-none z-10 w-full h-full"
    />
  );
};
