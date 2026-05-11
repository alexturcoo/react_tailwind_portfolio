import Image from "next/image";

const accents = [
  {
    border: "hover:border-teal-300/70",
    glow: "hover:shadow-[0_18px_55px_rgba(20,184,166,0.14)]",
    rule: "from-teal-300/85 via-cyan-300/50",
  },
  {
    border: "hover:border-amber-300/70",
    glow: "hover:shadow-[0_18px_55px_rgba(245,158,11,0.13)]",
    rule: "from-amber-300/85 via-orange-300/45",
  },
  {
    border: "hover:border-indigo-300/70",
    glow: "hover:shadow-[0_18px_55px_rgba(129,140,248,0.14)]",
    rule: "from-indigo-300/85 via-violet-300/45",
  },
  {
    border: "hover:border-rose-300/60",
    glow: "hover:shadow-[0_18px_55px_rgba(251,113,133,0.12)]",
    rule: "from-rose-300/80 via-teal-300/45",
  },
];

export const ProjectCard = ({ project, index = 0 }) => {
  const isExternal = project.href.startsWith("http");
  const accent = accents[index % accents.length];

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden border border-teal-950/70 bg-[#0b1513]/80 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur transition duration-300 ${accent.border} ${accent.glow}`}
    >
      <div
        className={`absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r ${accent.rule} to-transparent opacity-80`}
      />
      <a
        href={project.href}
        target={isExternal ? "_blank" : undefined}
        rel="noreferrer"
        className="block border-b border-teal-950/70 bg-[#07100e]"
      >
        <div className="relative aspect-[16/10]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#07100e]/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit={project.imageFit}
            className="transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h4 className="text-lg leading-tight text-white sm:text-xl">
          {project.title}
        </h4>
        <p className="mt-4 border-l border-teal-800/40 pl-4 text-sm leading-7 text-gray-300/90">
          {project.description}
        </p>
      </div>
    </article>
  );
};
