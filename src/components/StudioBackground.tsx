import React, { useEffect, useRef } from 'react';

interface StudioBackgroundProps {
  smokeIntensity?: 'subtle' | 'cinematic' | 'minimal';
}

export const StudioBackground: React.FC<StudioBackgroundProps> = ({
  smokeIntensity = 'cinematic',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle setup for authentic photographic studio smoke
    const particleCount = smokeIntensity === 'cinematic' ? 32 : smokeIntensity === 'subtle' ? 18 : 10;

    interface SmokeParticle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      growing: boolean;
      tint: string;
      rotation: number;
      vRot: number;
    }

    const particles: SmokeParticle[] = [];
    const tints = [
      'rgba(235, 240, 252, ', // crisp cool studio silver
      'rgba(210, 218, 235, ', // gentle photographic mist
      'rgba(175, 185, 205, ', // soft charcoal haze
      'rgba(250, 252, 255, ', // pure white soft fog
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 180 + 130,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.38 - 0.08, // gently rising
        alpha: Math.random() * 0.04 + 0.015,
        maxAlpha: Math.random() * 0.12 + 0.05,
        growing: Math.random() > 0.5,
        tint: tints[Math.floor(Math.random() * tints.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.002,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Studio background radial softbox highlight in the upper center
      const spotGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.28,
        40,
        width * 0.5,
        height * 0.28,
        Math.max(width, height) * 0.7
      );
      spotGrad.addColorStop(0, 'rgba(30, 32, 42, 0.45)');
      spotGrad.addColorStop(0.45, 'rgba(15, 16, 22, 0.22)');
      spotGrad.addColorStop(1, 'rgba(4, 4, 6, 0)');
      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw each smoke puff with soft radial blend
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        // Breathe opacity
        if (p.growing) {
          p.alpha += 0.0006;
          if (p.alpha >= p.maxAlpha) p.growing = false;
        } else {
          p.alpha -= 0.0006;
          if (p.alpha <= 0.01) p.growing = true;
        }

        // Boundary loop
        if (p.y < -p.radius) {
          p.y = height + p.radius;
          p.x = Math.random() * width;
        }
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;

        // Draw radial smoke puff
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `${p.tint}${p.alpha})`);
        grad.addColorStop(0.4, `${p.tint}${p.alpha * 0.65})`);
        grad.addColorStop(0.8, `${p.tint}${p.alpha * 0.2})`);
        grad.addColorStop(1, `${p.tint}0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [smokeIntensity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#040406]">
      {/* Studio Black Base Layer */}
      <div className="absolute inset-0 bg-[#040406]" />

      {/* Atmospheric Studio Smoke Texture with Screen Blend */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-screen transition-opacity duration-1000"
        style={{
          backgroundImage: 'url(/smoke_bg.jpg)',
          opacity: smokeIntensity === 'cinematic' ? 0.30 : smokeIntensity === 'subtle' ? 0.18 : 0.07,
          filter: 'contrast(125%) brightness(80%)',
        }}
      />

      {/* Organic Animated Mist Layers */}
      <div className="absolute -inset-12 opacity-25 mix-blend-screen animate-smoke-1 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700/20 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="absolute -inset-12 opacity-20 mix-blend-screen animate-smoke-2 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-500/15 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Dynamic Canvas for floating smoke wisps */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Deep Studio Photographic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(4,4,6,0.75)_80%,#040406_100%)] pointer-events-none" />
    </div>
  );
};
