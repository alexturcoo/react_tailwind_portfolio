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
  const imageOrder = index % 2 === 1 ? "xl:order-2" : "";
  const imageBorder = index % 2 === 1 ? "xl:border-l" : "xl:border-r";
  const copyOrder = index % 2 === 1 ? "xl:order-1" : "";
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`group relative flex flex-col overflow-hidden border border-cyan-950/70 bg-[#081725]/85 shadow-[0_1px_0_rgba(255,255,255,0.05),0_24px_80px_rgba(3,12,28,0.32)] backdrop-blur transition duration-300 hover:-translate-y-1 xl:flex-row ${accent.border} ${accent.glow}`}
    >
      <div
        className={`absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r ${accent.rule} to-transparent opacity-80`}
      />
      <a
        href={project.href}
        target={isExternal ? "_blank" : undefined}
        rel="noreferrer"
        className={`relative flex overflow-hidden border-b border-cyan-950/70 bg-[#06111f] xl:w-[46%] xl:shrink-0 xl:self-start xl:border-b-0 ${imageBorder} ${imageOrder}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[length:26px_26px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-300/12 via-transparent to-amber-300/10 opacity-80" />
        <div className="relative flex w-full items-center justify-center p-4 sm:p-6 xl:min-h-[440px]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#06111f]/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={project.image}
            alt={project.title}
            width={project.image.width}
            height={project.image.height}
            className="relative z-0 max-h-[420px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] xl:max-h-[560px]"
          />
        </div>
      </a>

      <div
        className={`relative flex flex-col p-5 sm:p-7 xl:flex-1 xl:p-9 2xl:p-10 ${copyOrder}`}
      >
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="border border-cyan-800/70 bg-cyan-950/30 px-3 py-1 text-xs text-cyan-100">
            {project.date}
          </span>
          <span className="text-xs text-gray-500">
            PROJECT {projectNumber}
          </span>
        </div>
        <h4 className="max-w-4xl text-2xl leading-tight text-white sm:text-3xl 2xl:text-4xl">
          {project.title}
        </h4>
        <p className="mt-5 border-l border-teal-700/50 pl-4 text-sm leading-7 text-gray-300/90 sm:text-[15px] sm:leading-8">
          {project.description}
        </p>
        <a
          href={project.href}
          target={isExternal ? "_blank" : undefined}
          rel="noreferrer"
          className="mt-6 w-fit border border-amber-300/50 bg-amber-300/10 px-3 py-2 text-xs uppercase text-amber-100 transition duration-300 hover:-translate-y-1 hover:border-amber-200/80 hover:bg-amber-200/15"
        >
          Open project
        </a>
      </div>
    </article>
  );
};
