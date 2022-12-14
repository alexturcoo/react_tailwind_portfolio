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




export default function Projects(){
    return(
        <div  className=" bg-gray-800 min-h-screen">
        <section className="p-10">
          <div>
            <h3 className="text-3xl py-1 text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-white">
              Many biological projects I have worked on have a computational
              aspect to them. Feel free to take a look at the cool projects I
              have been fortunate enough to be involved with.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={poster}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={cells}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={thesisb}
              />
            </div>
          </div>
        </section>
        </div>
    )
}

