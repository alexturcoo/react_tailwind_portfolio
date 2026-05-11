import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 xl:pr-28">
        <section
          id="home"
          className="relative grid min-h-[calc(100vh-120px)] items-center gap-10 overflow-hidden border-b border-teal-950/80 pb-12 md:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:pb-16"
        >
          <div className="absolute inset-x-0 top-10 -z-10 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent animate-signal-line" />
          <div className="absolute bottom-10 left-0 -z-10 hidden h-px w-2/3 bg-gradient-to-r from-teal-300/50 via-indigo-300/35 to-transparent md:block" />
          <div>
            <p className="mb-4 w-fit border border-teal-800/70 bg-teal-950/25 px-3 py-2 text-xs uppercase tracking-[0.18em] text-teal-200 shadow-[0_0_24px_rgba(20,184,166,0.08)] sm:text-sm">
              Computational Genomics & Machine Learning
            </p>
            <h1 className="text-4xl tracking-tight text-white sm:text-5xl">
              Alexander Turco
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-gray-300">
              Graduate researcher focused on repetitive DNA architecture,
              genome instability, and large-scale sequencing analysis across
              haplotype-resolved assemblies.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.href} {...link} />
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs animate-float-slow">
            <div className="absolute -inset-4 border border-teal-400/25 bg-gradient-to-br from-teal-300/10 via-transparent to-amber-300/10" />
            <div className="absolute -right-5 top-5 h-24 w-px bg-gradient-to-b from-amber-300/70 to-transparent" />
            <div className="absolute -bottom-5 left-6 h-px w-28 bg-gradient-to-r from-indigo-300/70 to-transparent" />
            <div className="relative aspect-square overflow-hidden border border-teal-900/80 bg-[#07100e] shadow-[0_24px_70px_rgba(20,184,166,0.13)]">
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
          className="grid gap-6 border-b border-teal-950/80 py-16 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12 lg:py-20"
        >
          <h2 className="text-2xl text-white">About me</h2>
          <div className="relative overflow-hidden border border-teal-950/70 bg-[#0b1513]/80 p-5 shadow-[0_24px_70px_rgba(6,18,16,0.32)] backdrop-blur sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal-300/70 via-amber-300/35 to-transparent" />
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
          className="grid gap-8 border-b border-teal-950/80 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:gap-12 lg:py-20"
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

        <section id="projects" className="py-16 lg:py-20">
          <header className="grid gap-6 border-b border-teal-950/80 pb-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
            <h2 className="text-2xl text-white">Projects</h2>
            <p className="max-w-3xl leading-relaxed text-gray-300/90">
              All biological projects I have worked on have a computational
              aspect to them. Feel free to take a look at the cool projects I
              have been fortunate enough to be involved with.
            </p>
          </header>

          <div className="grid gap-5 pt-10 md:grid-cols-2">
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
