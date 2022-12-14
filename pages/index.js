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
import shell from "../public/shell.png"
import latex from "../public/latex.png"



export default function Home() {
  return (
    <div className=" bg-gray-800 p-96">
      <main className=" px-10  md:px-20 lg:px-40">
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Alexander Turco
            </h2>
            <h3 className="text-2xl py-2 text-white md:text-3xl">
              Aspiring Scientist.
            </h3>
            <p className="text-md py-5 leading-8 text-white dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              An undergraduate student with a passion for
              biology and programming!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/alexander-turco-400369163/">
              <AiFillLinkedin />
              </a>
              <a href="https://github.com/opticrom">
              <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={DNA} layout="fill" objectFit="contain" />
            </div>
          </div>

          <section>
            <div className=" p-2 shadow-lg rounded-xl bg-gray-600">
            <h3 className="text-3xl py-3 text-teal-600 ">About me</h3>
            <p className="text-md py-2 leading-8 text-white">
              Hello World, my name is Alexander Turco, thanks for checking out my
              website! I wrote this website using react and tailwindcss as a means of
              bettering my Javascript skills while also finding a cool way to share 
              some of the projects I have been involved in (because resumes are boring). I am
              currently an undergraduate student at McMaster University pursuing a degree in
              biology. Prior to university, the thought of programming had never even slipped my mind
              as I believed my interests in biology would keep me far away from any code. I started
              to realize how wrong I was and in fact, I came across an area of study called bioinformatics
              which utilizes computational methods to analyze biological data. I now have the best of both worlds
              and am able to combine my love of biology with my love of programming.  
            </p>
            </div>
          </section>

        <section>
          <div>
            <h3 className="text-3xl py-3 text-teal-600 ">Skills</h3>
            <p className="text-md py-2 leading-8 text-white">
              As fascinated as I am about <span className="text-teal-500"> biology</span>, throughout my undergrad I began
              to develop an obsession with <span className="text-teal-500">programming</span>. As I started to teach myself more, I
              quickly recognized the potential programming has in so many different areas. Below
              are some languages I have experience in. 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={python} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Python3
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={cpp} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                C++
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={rstudio} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">RStudio</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={shell} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Shell</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <Image src={latex} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">LaTeX</h3>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
