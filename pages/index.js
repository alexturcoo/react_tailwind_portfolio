import Head from "next/head";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { DnaScrollRail } from "../components/dna-scroll-rail";
import { ProjectCard } from "../components/project-card";
import { projects } from "../components/project-data";
import cpp from "../public/cpp.png";
import latex from "../public/latex.png";
import python from "../public/python.png";
import rstudio from "../public/rstudio.png";
import shell from "../public/shell.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/alexander-turco-400369163/",
    label: "LinkedIn",
    icon: AiFillLinkedin,
  },
  {
    href: "https://github.com/alexturcoo",
    label: "GitHub",
    icon: AiFillGithub,
  },
];

const skills = [
  { name: "Python3", icon: python },
  { name: "C++", icon: cpp },
  { name: "RStudio", icon: rstudio },
  { name: "Shell", icon: shell, imageClassName: "invert" },
  { name: "LaTeX", icon: latex },
];

const BLOG_URL = "https://nerdvana.blog/";

const focusTags = [
  "repetitive DNA",
  "genome instability",
  "non-B motifs",
  "haplotype assemblies",
];

const signalRows = ["ATCG", "TATA", "GCGC"];

const SocialLink = ({ href, label, icon: Icon }) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center border border-teal-900/70 bg-[#0b1513]/85 text-3xl text-gray-300 shadow-[0_0_24px_rgba(20,184,166,0.08)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:text-amber-200 hover:shadow-[0_12px_32px_rgba(245,158,11,0.14)]"
  >
    <Icon />
  </a>
);

const SkillCard = ({ name, icon, imageClassName = "" }) => (
  <div className="group relative flex min-h-[148px] flex-col items-center justify-center overflow-hidden border border-teal-950/70 bg-[#0b1513]/75 p-5 text-center shadow-[0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-teal-300/60 hover:bg-[#0f1d19]/90 hover:shadow-[0_18px_45px_rgba(20,184,166,0.12)]">
    <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex h-16 w-16 items-center justify-center">
      <Image
        src={icon}
        alt={name}
        width={64}
        height={64}
        className={imageClassName}
      />
    </div>
    <h3 className="mt-5 text-sm font-medium text-gray-200 sm:text-base">
      {name}
    </h3>
  </div>
);

const SequenceBand = () => (
  <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden overflow-hidden border-y border-cyan-300/10 bg-cyan-300/[0.03] md:block">
    <div className="animate-sequence-drift flex w-[180%] gap-8 py-3 text-xs text-cyan-100/45">
      {Array.from({ length: 24 }, (_, index) => (
        <span key={index}>{signalRows[index % signalRows.length]}</span>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Alexander Turco</title>
        <meta
          name="description"
          content="Alexander Turco personal portfolio"
        />
      </Head>

      <DnaScrollRail />

      <main className="relative z-10 overflow-hidden">
        <section
          id="home"
          className="relative mx-auto grid min-h-[calc(100vh-92px)] max-w-[1660px] items-center gap-10 overflow-hidden border-b border-cyan-950/80 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.72fr)] lg:gap-16 lg:px-10 lg:pr-48 xl:pr-56"
        >
          <div className="absolute inset-x-0 top-10 -z-10 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent animate-signal-line" />
          <div className="absolute left-0 top-24 -z-10 hidden h-[62%] w-px bg-gradient-to-b from-cyan-300/50 via-indigo-300/35 to-transparent md:block" />
          <SequenceBand />

          <div className="relative">
            <div className="absolute -left-10 -top-8 hidden h-28 w-28 border border-cyan-300/10 bg-cyan-300/[0.03] md:block" />
            <p className="mb-4 w-fit border border-cyan-700/70 bg-cyan-950/30 px-3 py-2 text-xs uppercase text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] sm:text-sm">
              Computational Genomics & Machine Learning
            </p>
            <h1 className="max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl">
              Alexander Turco
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg sm:leading-9">
              Graduate researcher focused on repetitive DNA architecture,
              genome instability, and large-scale sequencing analysis across
              haplotype-resolved assemblies.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 border border-cyan-300/60 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50 shadow-[0_18px_45px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200"
              >
                View projects
                <AiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border border-amber-300/55 bg-amber-300/10 px-4 py-3 text-sm text-amber-50 shadow-[0_18px_45px_rgba(245,158,11,0.1)] transition duration-300 hover:-translate-y-1 hover:border-amber-200"
              >
                Check out my blog
                <AiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <SocialLink key={link.href} {...link} />
                ))}
              </div>
            </div>

            <div className="mt-8 flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-300 sm:text-sm">
              <span className="text-cyan-100">Research focus</span>
              {focusTags.map((tag) => (
                <span key={tag} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-cyan-300/35" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="absolute -left-7 top-10 hidden h-36 w-36 border border-amber-300/20 bg-amber-300/[0.04] animate-soft-flicker sm:block" />
            <div className="absolute -right-5 -top-5 h-28 w-px bg-gradient-to-b from-amber-300/80 to-transparent" />
            <div className="absolute -bottom-5 left-6 h-px w-40 bg-gradient-to-r from-indigo-300/70 to-transparent" />
            <div className="relative aspect-[4/5] overflow-hidden border border-cyan-800/80 bg-[#06111f] shadow-[0_28px_90px_rgba(34,211,238,0.16)] animate-float-slow sm:aspect-[5/6]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#06111f]/35 via-transparent to-cyan-300/10" />
              <Image
                src="/headshot2.JPG"
                alt="Alexander Turco"
                layout="fill"
                objectFit="cover"
                className="grayscale-[35%] saturate-[1.15] transition duration-500 hover:grayscale-0"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid max-w-[1660px] gap-8 border-b border-cyan-950/80 px-4 py-16 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:py-20 lg:pr-48 xl:pr-56"
        >
          <h2 className="text-2xl text-white">About me</h2>
          <div className="relative overflow-hidden border border-cyan-950/70 bg-[#081725]/85 p-5 shadow-[0_24px_80px_rgba(3,12,28,0.38)] backdrop-blur sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300/70 via-amber-300/45 to-transparent" />
            <div className="absolute right-0 top-0 hidden h-full w-32 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.08))] md:block" />
            <p className="leading-relaxed text-gray-300/90">
              Thanks for checking out my website! I wrote this website using
              react and tailwindcss as a means of bettering my Javascript
              skills while also finding a cool way to share some of the
              projects I have been involved in (because resumes are boring). I
              am currently a graduate student at the University of Toronto
              pursuing a PhD in Medical Biophysics. Since my
              first year of undergrad, I have been obsessed with studying the
              part of the genome that most often gets filtered out of genomics
              studies. My research has focused on low-complexity regions,
              tandem repeats, non-B DNA motifs, and transposable elements, and
              how we can better find and utilize these dark regions of the
              genome to better understand the blueprint of all life. If im not
              programming, you can also find me playing video games (currently
              Zelda Tears of the Kingdom), playing soccer, snowboarding,
              solving rubiks cubes, or travelling wherever I can go. Please
              feel free to connect with me about anything!
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto grid max-w-[1660px] gap-8 border-b border-cyan-950/80 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-12 lg:px-10 lg:py-20 lg:pr-48 xl:pr-56"
        >
          <div>
            <h2 className="text-2xl text-white">Skills</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300/90 sm:text-base sm:leading-8">
              As fascinated as I am about{" "}
              <span className="text-teal-200"> biology</span>, throughout my
              undergrad I began to develop an obsession with{" "}
              <span className="text-amber-200">programming</span>. As I started
              to teach myself more, I quickly recognized the potential
              programming has in so many different areas. Below are some
              languages I have experience in.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-[1660px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20 lg:pr-48 xl:pr-56"
        >
          <header className="grid gap-6 border-b border-cyan-950/80 pb-10 md:grid-cols-[240px_minmax(0,1fr)] md:gap-12">
            <div>
              <p className="mb-4 w-fit border border-amber-300/35 bg-amber-300/10 px-3 py-2 text-xs uppercase text-amber-100">
                selected work
              </p>
              <h2 className="text-3xl text-white sm:text-4xl">Projects</h2>
            </div>
            <p className="max-w-3xl leading-relaxed text-gray-300/90">
              All biological projects I have worked on have a computational
              aspect to them. Feel free to take a look at the cool projects I
              have been fortunate enough to be involved with.
            </p>
          </header>

          <div className="grid gap-6 pt-10 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
