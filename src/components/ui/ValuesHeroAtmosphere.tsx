"use client";

import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

/**
 * ValuesHeroAtmosphere:
 * Floating 3D Geometric Prisms & Gyroscopic Rings:
 * - 3 concentric gimbal gyroscope rings orbiting on independent 3D Euler axes
 * - Central illuminated crystalline dodecahedron / faceted prism representing the core values
 * - Glass-like translucent facets with subtle light reflections and vertex beacons
 * - Interactive cursor-driven perspective tilt and parallax
 * - CAD orbital degree markers and precision plumb lines
 */
export const ValuesHeroAtmosphere: React.FC = () => {
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
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // 1. Define Central Crystalline Octahedron / Prism Vertices
    const prismRadius = 75;
    const prismVertices: Point3D[] = [
      { x: 0, y: -prismRadius * 1.35, z: 0 }, // Top vertex
      { x: prismRadius, y: 0, z: 0 },         // East
      { x: 0, y: 0, z: prismRadius },         // South
      { x: -prismRadius, y: 0, z: 0 },        // West
      { x: 0, y: 0, z: -prismRadius },        // North
      { x: 0, y: prismRadius * 1.35, z: 0 },  // Bottom vertex
    ];

    // Faces of the octahedron (8 triangles)
    const prismFaces = [
      [0, 1, 2],
      [0, 2, 3],
      [0, 3, 4],
      [0, 4, 1],
      [5, 2, 1],
      [5, 3, 2],
      [5, 4, 3],
      [5, 1, 4],
    ];

    // 2. Define 3 Gyroscopic Gimbal Rings (Inner, Middle, Outer)
    const gimbalRings = [
      { radius: 110, tiltAxis: "x", speed: 0.012, segments: 48, dash: [0] },
      { radius: 165, tiltAxis: "y", speed: -0.009, segments: 64, dash: [6, 8] },
      { radius: 230, tiltAxis: "z", speed: 0.007, segments: 80, dash: [0] },
    ];

    // Floating ambient dust motes
    const motes = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.3 - 0.08,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    let rotX = 0.2;
    let rotY = 0;
    let rotZ = 0.1;
    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse easing for camera parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const cx = isMobile
        ? width * 0.5 + (mouseX - width * 0.5) * 0.02
        : width * 0.74 + (mouseX - width * 0.5) * 0.03;
      const cy = isMobile
        ? height * 0.58 + (mouseY - height * 0.5) * 0.02
        : height * 0.50 + (mouseY - height * 0.5) * 0.03;

      // Base rotations with mouse tilt
      rotY += 0.006;
      rotX = 0.25 + (mouseY / height - 0.5) * 0.5;
      const currentRotY = rotY + (mouseX / width - 0.5) * 0.6;
      rotZ = Math.sin(time * 0.4) * 0.15;

      // 3D Projection Matrix helper
      const project = (p: Point3D, customRx = rotX, customRy = currentRotY, customRz = rotZ) => {
        // Rotate around Y
        const cosY = Math.cos(customRy);
        const sinY = Math.sin(customRy);
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate around X
        const cosX = Math.cos(customRx);
        const sinX = Math.sin(customRx);
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Rotate around Z
        const cosZ = Math.cos(customRz);
        const sinZ = Math.sin(customRz);
        const x3 = x1 * cosZ - y2 * sinZ;
        const y3 = y2 * cosZ + x1 * sinZ;

        // Perspective
        const fov = 500;
        const scale = fov / (fov + z2 + 80);
        return {
          x: cx + x3 * scale,
          y: cy + y3 * scale,
          scale,
          z: z2,
        };
      };

      // 3. Render Gyroscopic Gimbal Rings
      gimbalRings.forEach((ring, idx) => {
        if (isMobile && ring.radius > 170) return;

        // Rotate ring on independent axis
        const ringTime = time * ring.speed * 60;
        const rx = ring.tiltAxis === "x" ? rotX + ringTime : rotX + idx * 0.4;
        const ry = ring.tiltAxis === "y" ? currentRotY + ringTime : currentRotY + idx * 0.5;
        const rz = ring.tiltAxis === "z" ? rotZ + ringTime : rotZ + idx * 0.3;

        ctx.beginPath();
        for (let i = 0; i <= ring.segments; i++) {
          const theta = (i / ring.segments) * Math.PI * 2;
          const pt3D: Point3D = {
            x: Math.cos(theta) * ring.radius,
            y: 0,
            z: Math.sin(theta) * ring.radius,
          };
          const proj = project(pt3D, rx, ry, rz);
          if (i === 0) ctx.moveTo(proj.x, proj.y);
          else ctx.lineTo(proj.x, proj.y);
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 + idx * 0.05})`;
        ctx.lineWidth = idx === 1 ? 1.4 : 0.9;
        if (ring.dash.length > 1) ctx.setLineDash(ring.dash);
        else ctx.setLineDash([]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbiting gimbal beacon bead
        const beadAngle = time * (0.8 + idx * 0.3);
        const bead3D: Point3D = {
          x: Math.cos(beadAngle) * ring.radius,
          y: 0,
          z: Math.sin(beadAngle) * ring.radius,
        };
        const beadProj = project(bead3D, rx, ry, rz);
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.beginPath();
        ctx.arc(beadProj.x, beadProj.y, 2.2 * beadProj.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Render Central Crystalline Prism
      const projectedVertices = prismVertices.map((v) => project(v));

      // Calculate face normals and depth sort faces
      const sortedFaces = prismFaces
        .map((face) => {
          const pA = projectedVertices[face[0]];
          const pB = projectedVertices[face[1]];
          const pC = projectedVertices[face[2]];
          const avgZ = (pA.z + pB.z + pC.z) / 3;

          // 2D Cross product for backface culling
          const normalZ = (pB.x - pA.x) * (pC.y - pA.y) - (pB.y - pA.y) * (pC.x - pA.x);
          return { face, avgZ, normalZ, pA, pB, pC };
        })
        .sort((a, b) => b.avgZ - a.avgZ);

      sortedFaces.forEach(({ normalZ, pA, pB, pC }) => {
        // Draw all faces with glass-like transparency (both front and back for crystal effect)
        const isFacingFront = normalZ > 0;

        ctx.beginPath();
        ctx.moveTo(pA.x, pA.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.lineTo(pC.x, pC.y);
        ctx.closePath();

        // Facet fill with crystalline illumination
        if (isFacingFront) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.10)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      // Vertex corner glowing beads
      projectedVertices.forEach((v) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(v.x, v.y, 2.4 * v.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5. Vertical Plumb Laser Line through Core
      const topApex = projectedVertices[0];
      const botApex = projectedVertices[5];
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(topApex.x, topApex.y - 60);
      ctx.lineTo(botApex.x, botApex.y + 60);
      ctx.stroke();
      ctx.setLineDash([]);

      // 6. Architectural Telemetry & Gyroscopic Coordinates
      if (width > 768) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.font = "9px monospace";
        const tagX = cx + (isMobile ? 0 : 120);
        const tagY = cy - (isMobile ? 120 : 160);

        ctx.fillText("GYROSCOPIC EQUILIBRIUM // 3-AXIS", tagX, tagY);
        ctx.fillText(`ROT: ${(rotY % (Math.PI * 2)).toFixed(2)} RAD · CORE: 05 VALUES`, tagX, tagY + 14);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(tagX - 10, tagY - 8);
        ctx.lineTo(tagX - 10, tagY + 20);
        ctx.lineTo(tagX - 4, tagY + 20);
        ctx.stroke();
      }

      // 7. Ambient Drifting Motes
      motes.forEach((mote) => {
        mote.x += mote.vx;
        mote.y += mote.vy;

        if (mote.y < 0) {
          mote.y = height;
          mote.x = Math.random() * width;
        }
        if (mote.x < 0) mote.x = width;
        if (mote.x > width) mote.x = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${mote.alpha})`;
        ctx.beginPath();
        ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
        ctx.fill();
      });

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
