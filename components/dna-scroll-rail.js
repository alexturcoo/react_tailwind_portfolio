import { useEffect, useMemo, useState } from "react";

const pairCount = 26;
const strandSamples = 80;

const buildStrandPath = (progress, offset = 0) => {
  return Array.from({ length: strandSamples }, (_, index) => {
    const y = 14 + index * 9.6;
    const phase = index * 0.32 + progress * Math.PI * 3 + offset;
    const x = 90 + Math.sin(phase) * 42;

    return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ");
};

export const DnaScrollRail = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress =
          scrollable > 0 ? window.scrollY / scrollable : 0;

        setProgress(Math.min(Math.max(nextProgress, 0), 1));
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const strandA = useMemo(() => buildStrandPath(progress), [progress]);
  const strandB = useMemo(
    () => buildStrandPath(progress, Math.PI),
    [progress]
  );

  const basePairs = useMemo(() => {
    return Array.from({ length: pairCount }, (_, index) => {
      const y = 30 + index * 28;
      const phase = index * 0.72 + progress * Math.PI * 3;
      const wave = Math.sin(phase);
      const depth = Math.cos(phase);
      const x1 = 90 + wave * 42;
      const x2 = 90 - wave * 42;
      const opacity = 0.22 + Math.abs(depth) * 0.58;

      return { depth, opacity, x1, x2, y };
    });
  }, [progress]);

  const progressTop = `${Math.round(progress * 100)}%`;

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed right-0 top-20 z-0 hidden h-[calc(100vh-6rem)] w-44 opacity-95 lg:block 2xl:right-6"
    >
      <div className="absolute inset-y-0 left-1/2 w-36 -translate-x-1/2 border-x border-cyan-300/10 bg-gradient-to-b from-cyan-300/5 via-indigo-400/10 to-amber-300/5" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/35 to-transparent" />
      <div
        className="absolute left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border border-amber-200/30 bg-cyan-300/5 shadow-[0_0_45px_rgba(34,211,238,0.2)]"
        style={{ top: progressTop }}
      />
      <svg
        className="relative h-full w-full animate-dna-breathe"
        viewBox="0 0 180 780"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="strandA" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(125, 211, 252, 0.88)" />
            <stop offset="45%" stopColor="rgba(94, 234, 212, 0.95)" />
            <stop offset="100%" stopColor="rgba(251, 191, 36, 0.72)" />
          </linearGradient>
          <linearGradient id="strandB" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(129, 140, 248, 0.9)" />
            <stop offset="48%" stopColor="rgba(45, 212, 191, 0.7)" />
            <stop offset="100%" stopColor="rgba(244, 114, 182, 0.52)" />
          </linearGradient>
        </defs>
        <path
          d={strandA}
          fill="none"
          stroke="rgba(34, 211, 238, 0.12)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d={strandA}
          fill="none"
          stroke="url(#strandA)"
          strokeWidth="3.25"
          strokeLinecap="round"
        />
        <path
          d={strandB}
          fill="none"
          stroke="rgba(129, 140, 248, 0.1)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d={strandB}
          fill="none"
          stroke="url(#strandB)"
          strokeWidth="3.25"
          strokeLinecap="round"
        />

        {basePairs.map((pair, index) => (
          <g key={index}>
            <line
              x1={pair.x1}
              y1={pair.y}
              x2={pair.x2}
              y2={pair.y}
              stroke={
                pair.depth > 0
                  ? "rgba(251, 191, 36, 0.5)"
                  : "rgba(94, 234, 212, 0.36)"
              }
              strokeWidth={pair.depth > 0 ? "1.9" : "1.2"}
              opacity={pair.opacity}
            />
            <circle
              cx={pair.x1}
              cy={pair.y}
              r={pair.depth > 0 ? 5.4 : 3.6}
              fill={
                pair.depth > 0
                  ? "rgba(125, 211, 252, 0.95)"
                  : "rgba(45, 212, 191, 0.72)"
              }
              opacity={pair.opacity}
            />
            <circle
              cx={pair.x2}
              cy={pair.y}
              r={pair.depth > 0 ? 3.6 : 5.4}
              fill={
                pair.depth > 0
                  ? "rgba(251, 191, 36, 0.78)"
                  : "rgba(129, 140, 248, 0.88)"
              }
              opacity={pair.opacity}
            />
          </g>
        ))}
      </svg>
    </aside>
  );
};
