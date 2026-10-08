import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai";
import { ProjectCard } from "../components/project-card";
import { projects } from "../components/project-data";

const skills = ["Python", "C++", "R", "Shell", "LaTeX"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander Turco | Computational Genomics</title>
        <meta name="description" content="Alexander Turco — PhD researcher exploring repetitive DNA, genome instability, and computational genomics at the University of Toronto." />
      </Head>
      <div className="page-container">
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Computational genomics & machine learning</p>
            <h1>Alexander<br />Turco<span className="accent">.</span></h1>
            <p className="hero-description">Exploring the complexity<br className="hidden sm:block" /> hidden in our genomes.</p>
            <p className="hero-intro">PhD researcher at the University of Toronto, studying repetitive DNA, genome instability, and haplotype-resolved assemblies.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <AiOutlineArrowRight aria-hidden="true" /></a>
              <a href="https://nerdvana.blog/" target="_blank" rel="noreferrer" className="text-link">Read my blog <AiOutlineArrowRight aria-hidden="true" /></a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/alexander-turco-400369163/" aria-label="LinkedIn"><AiFillLinkedin aria-hidden="true" /></a>
              <a href="https://github.com/alexturcoo" aria-label="GitHub"><AiFillGithub aria-hidden="true" /></a>
              <span>Biology meets code.</span>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait">
              <Image src="/headshot2.JPG" alt="Alexander Turco" fill sizes="(max-width: 760px) 85vw, 380px" priority className="portrait-image" />
            </div>
            <p className="portrait-caption">Medical Biophysics <span>University of Toronto</span></p>
          </div>
        </section>

        <section id="about" className="about-section section-space">
          <div><p className="eyebrow">A little background</p><h2>Curious by nature.<br />Computational by approach.</h2></div>
          <div className="about-copy">
            <p>I’m a PhD student in Medical Biophysics at the University of Toronto. Since my first year of undergrad, I’ve been fascinated by the parts of the genome that often get filtered out of genomics studies.</p>
            <p>My research explores low-complexity regions, tandem repeats, non-B DNA motifs, and transposable elements — finding better ways to understand these overlooked regions and what they reveal about the blueprint of life.</p>
            <p>Outside the lab, you’ll find me playing video games or soccer, snowboarding, solving Rubik’s cubes, and travelling. I built this site with React and Tailwind CSS to share what I’ve been working on. Feel free to connect!</p>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div><p className="eyebrow">My toolkit</p><h2>From biology to code.</h2><p className="section-description">The languages and tools I use to turn biological questions into computational research.</p></div>
          <ul className="skill-list" aria-label="Programming skills">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </section>

        <section id="projects" className="section-space projects-section">
          <header className="section-header"><div><p className="eyebrow">Selected work</p><h2>Projects & research</h2></div><p className="section-description">Projects spanning computational biology, biomedical AI, and interpretable machine learning.</p></header>
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </section>
      </div>
    </>
  );
}
