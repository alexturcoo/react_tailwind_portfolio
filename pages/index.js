import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
    className="flex h-11 w-11 items-center justify-center border border-gray-800 bg-gray-950/80 text-3xl text-gray-400 transition-colors hover:border-teal-400/60 hover:text-teal-300"
  >
    <Icon />
  </a>
);

const SkillCard = ({ name, icon, imageClassName = "" }) => (
  <div className="group flex min-h-[148px] flex-col items-center justify-center border border-gray-800 bg-gray-950/60 p-5 text-center transition-colors hover:border-teal-400/50">
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

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <section className="grid items-center gap-10 border-b border-gray-800/80 pb-12 md:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:pb-16">
          <div>
            <p className="mb-4 text-sm text-teal-300">
              Computational Genomics & Machine Learning
            </p>
            <h1 className="text-4xl tracking-tight text-white sm:text-5xl">
              Alexander Turco
            </h1>
            <p className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
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

          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 border border-teal-500/20" />
            <div className="relative aspect-square overflow-hidden border border-gray-700/80 bg-gray-950">
              <Image
                src="/headshot2.JPG"
                alt="Alexander Turco"
                layout="fill"
                objectFit="cover"
                className="grayscale"
                priority
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-b border-gray-800/80 py-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12 lg:py-16">
          <h2 className="text-2xl text-white">About me</h2>
          <div className="border border-gray-800 bg-gray-950/70 p-5 shadow-[0_0_0_1px_rgba(20,184,166,0.06)] sm:p-8">
            <p className="leading-relaxed text-gray-400">
              Thanks for checking out my website! I wrote this website using
              react and tailwindcss as a means of bettering my Javascript
              skills while also finding a cool way to share some of the
              projects I have been involved in (because resumes are boring). I
              am currently a graduate student at the University of Toronto
              pursuing a Masters degree (MSc) in Medical Biophysics. Since my
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

        <section className="grid gap-8 py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:gap-12 lg:py-16">
          <div>
            <h2 className="text-2xl text-white">Skills</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              As fascinated as I am about{" "}
              <span className="text-teal-300"> biology</span>, throughout my
              undergrad I began to develop an obsession with{" "}
              <span className="text-teal-300">programming</span>. As I started
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
      </main>
    </div>
  );
}
