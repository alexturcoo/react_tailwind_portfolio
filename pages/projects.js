import React from "react";
import styles from '../styles/About.module.css'
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
import shell from "../public/shell.png"
import latex from "../public/latex.png"
import macwater from "../public/macwater.PNG"
import poster from "../public/poster.png"
import cells from "../public/cells.png"
import thesisb from "../public/thesisb.png"
import Link from "next/link"

export default function Projects(){
    return(
        <div  className=" bg-gray-800">
        <section className="p-10">
          <div>
            <h3 className=" font-sans text-5xl py-1 text-teal-600 ">Projects</h3>
            <p className=" font-mono text-md py-2 leading-8 text-white ">
              Many biological projects I have worked on have a computational
              aspect to them. Feel free to take a look at the cool projects I
              have been fortunate enough to be involved with.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1">
              <Link href="/poster.png">
              <Image
                className="rounded-lg object-cover hover:scale-110 cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={poster}
              />
              </Link>
              <h4 className=" font-sans text-center text-xl p-3 text-white italic ">Investing Harmful Algal Blooms in Ontario</h4>
              <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
              <p className=" font-sans bg-gradient-to-r from-cyan-500 text- to-teal-500 text-black p-2 border-none rounded">
              As a research assistant at McMaster University, I spent the summer exploring harmful algal bloom sites 
              across Ontario. Under the supervision of Dr. Brian Golding and Dr. Herb Schellhorn, I conducted a 
              metagenomic analysis of bloom and non-bloom sites using samples provided by the Ministry of Environment 
              and Climate change. I examined the bacterial composition of samples, trimmed, merged, and assembled 
              genomes of organisms known to contribute to the toxicity of blooms, and identified the potential for 
              multiple strains of the same species to be present at a single bloom site. I created a poster to summarize 
              some of the findings from this research. This poster was displayed at the MacWater (McMaster water group) 
              challenges in water monitoring conference held on October 14 in Hamilton. Professors, graduate students, and 
              those who work in industry could view and inquire about the poster and the work being done.
              </p>
            </div>
            <div className="basis-1/4 flex-1">
              <Link href="http://www.cellsatwar.com/demo/">
              <Image
                className="rounded-lg object-cover scale-100 hover:scale-110 cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={cells}
              />
              </Link>
              <h4 className=" font-sans text-center text-xl p-3 text-white italic">Cells at War: An immersive biological game</h4>
              <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
              <p className=" font-sans bg-gradient-to-r from-cyan-500 text- to-teal-500 text-black p-2 border-none rounded">
              I worked with a group of biology undergraduate students in collaboration with a supervising professor 
              towards the development of an innovative and immersive biological video game. The end goal of the 
              project was to pilot and implement the game in some first year science classrooms at McMaster 
              University. I had the opportunity to present a working build of the game to first year biology students and
              conduct a survey to collect data regarding how the students felt about the game.
              This was a cooperative project together with students and faculty from the Game Design 
              program at George Brown College, as well as the Biology department at McMaster University. 
              This project has been extended due to more funding and development is continuing, now with a larger team of collaborators across the globe. 
              We hope to eventually create a hub of science-based games that students can play in place of reading a textbook
              or examining static images.
              </p>
            </div>
            <div className="basis-1/4 flex-1">
              <Link href="/finalthesis_apr19_alexturco_fixedcomments">
              <Image
                className="rounded-lg object-fill scale-100 hover:scale-110 cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={thesisb}
              />
              </Link>
              <h4 className=" font-sans text-center text-xl p-3 text-white italic">Undergraduate Thesis: Evolution of LCRs</h4>
              <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
              <p className=" font-sans bg-gradient-to-r from-cyan-500 text- to-teal-500 text-black p-2 border-none rounded-md">
                As a fourth year undergraduate thesis student, I am working in a bioinformatics lab under the supervision 
                of Dr. Brian Golding. For my undergraduate thesis, I am exploring how to estimate evolutionary parameters
                such as mutation rates and indel rates using an analysis/approach called an approximate bayesian computation (ABC).
                This analysis is rooted in bayesian statistics and it essentially translates into an algorithm. Using C++, I am
                developing my own version of this algorithm to estimate a small number of parameters that can accurately describe
                how Low Complexity Regions evolve. This project is still ongoing, check it out on github by pressing the image above.
              </p>
            </div>
          </div>
        </section>
        </div>
    )
}

