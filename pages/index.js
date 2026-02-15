import Link from "next/link"
import styles from '../styles/Welcome.module.css'
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import python from "../public/python.png"
import cpp from "../public/cpp.png"
import rstudio from "../public/rstudio.png"
import DNA from "../public/DNA.png"
import headshot from "../public/headshot2.JPG"
import shell from "../public/shell.png"
import latex from "../public/latex.png"



export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      <main className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl md:text-5xl text-white tracking-tight">
              Alexander Turco
            </h1>
            <p className="text-lg text-gray-400 mt-4">
              Computational Genomics & Machine Learning
            </p>
            <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl">
              Graduate researcher focused on repetitive DNA architecture, genome instability,
              and large-scale sequencing analysis across haplotype-resolved assemblies.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/alexander-turco-400369163/">
              <AiFillLinkedin />
              </a>
              <a href="https://github.com/opticrom">
              <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto w-64 h-64 relative overflow-hidden mt-12 mb-16 border border-gray-700">
              <Image src={headshot} layout="fill" objectFit="cover" className="grayscale" />
            </div>
            <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />

          <section>
            <div className="border border-gray-800 p-8">
            <h2 className="text-2xl text-white mb-6">
              About me
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Thanks for checking out my website! I wrote this website using react and tailwindcss as a means of
              bettering my Javascript skills while also finding a cool way to share 
              some of the projects I have been involved in (because resumes are boring). I am
              currently a graduate student at the University of Toronto pursuing a Masters degree (MSc) in
              Medical Biophysics. Since my first year of undergrad, I have been obsessed with studying the part
              of the genome that most often gets filtered out of genomics studies. My research has focused on low-complexity regions,
              tandem repeats, non-B DNA motifs, and transposable elements, and how we can better find and utilize these dark regions
              of the genome to better understand the blueprint of all life. If im not programming, you can also find me playing
              video games (currently Zelda Tears of the Kingdom), playing soccer, snowboarding, solving rubiks cubes, or travelling 
              wherever I can go. Please feel free to connect with me about anything! 
            </p>
            </div>
            <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
          </section>

        <section>
          <div>
            <h2 className="text-2xl text-white mb-6">
              Skills
            </h2>
            <p className=" font-mono text-md py-2 leading-8 text-white">
              As fascinated as I am about <span className="text-teal-500"> biology</span>, throughout my undergrad I began
              to develop an obsession with <span className="text-teal-500">programming</span>. As I started to teach myself more, I
              quickly recognized the potential programming has in so many different areas. Below
              are some languages I have experience in. 
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="border border-gray-800 p-6 text-center">
              <Image src={python} width={100} height={100} />
              <h3 className=" font-mono text-lg font-medium pt-8 pb-2  ">
                Python3
              </h3>
            </div>
            <div className="border border-gray-800 p-6 text-center">
              <Image src={cpp} width={100} height={100} />
              <h3 className=" font-mono text-lg font-medium pt-8 pb-2 ">
                C++
              </h3>
            </div>
            <div className="border border-gray-800 p-6 text-center">
              <Image src={rstudio} width={100} height={100} />
              <h3 className=" font-mono text-lg font-medium pt-8 pb-2 ">RStudio</h3>
            </div>
            <div className="border border-gray-800 p-6 text-center">
              <Image src={shell} width={100} height={100} />
              <h3 className=" font-mono text-lg font-medium pt-8 pb-2 ">Shell</h3>
            </div>
            <div className="border border-gray-800 p-6 text-center">
              <Image src={latex} width={100} height={100} />
              <h3 className=" font-mono text-lg font-medium pt-8 pb-2 ">LaTeX</h3>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
