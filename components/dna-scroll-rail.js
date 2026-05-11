import { useEffect, useMemo, useState } from "react";

const pairCount = 18;
const strandSamples = 56;

const buildStrandPath = (progress, offset = 0) => {
  return Array.from({ length: strandSamples }, (_, index) => {
    const y = 18 + index * 11;
    const phase = index * 0.34 + progress * Math.PI * 2 + offset;
    const x = 60 + Math.sin(phase) * 26;

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
      const y = 34 + index * 32;
      const phase = index * 0.78 + progress * Math.PI * 2;
      const wave = Math.sin(phase);
      const depth = Math.cos(phase);
      const x1 = 60 + wave * 26;
      const x2 = 60 - wave * 26;
      const opacity = 0.28 + Math.abs(depth) * 0.48;

      return { depth, opacity, x1, x2, y };
    });
  }, [progress]);

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed right-3 top-24 z-0 hidden h-[calc(100vh-7rem)] w-32 opacity-95 xl:block"
    >
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal-300/20 to-transparent" />
      <svg
        className="h-full w-full animate-dna-breathe"
        viewBox="0 0 120 640"
        preserveAspectRatio="none"
      >
        <path
          d={strandA}
          fill="none"
          stroke="rgba(94, 234, 212, 0.7)"
          strokeWidth="2"
        />
        <path
          d={strandB}
          fill="none"
          stroke="rgba(129, 140, 248, 0.58)"
          strokeWidth="2"
        />

        {basePairs.map((pair, index) => (
          <g key={index}>
            <line
              x1={pair.x1}
              y1={pair.y}
              x2={pair.x2}
              y2={pair.y}
              stroke="rgba(245, 158, 11, 0.36)"
              strokeWidth="1.25"
              opacity={pair.opacity}
            />
            <circle
              cx={pair.x1}
              cy={pair.y}
              r={pair.depth > 0 ? 4.2 : 3}
              fill="rgba(94, 234, 212, 0.92)"
              opacity={pair.opacity}
            />
            <circle
              cx={pair.x2}
              cy={pair.y}
              r={pair.depth > 0 ? 3 : 4.2}
              fill="rgba(251, 191, 36, 0.82)"
              opacity={pair.opacity}
            />
          </g>
        ))}
      </svg>
    </aside>
  );
};
