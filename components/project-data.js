import cells from "../public/cells.png";
import pmcrc from "../public/pmcrc.png";
import poster from "../public/poster.png";
import thesisb from "../public/thesisb.png";

export const projects = [
  {
    title: "Investigating Harmful Algal Blooms in Ontario",
    date: "Aug 2021",
    href: "/poster.png",
    image: poster,
    imageFit: "contain",
    description:
      "As a research assistant at McMaster University, I spent the summer exploring harmful algal bloom sites across Ontario. Under the supervision of Dr. Brian Golding and Dr. Herb Schellhorn, I conducted a metagenomic analysis of bloom and non-bloom sites using samples provided by the Ministry of Environment and Climate change. I examined the bacterial composition of samples, trimmed, merged, and assembled genomes of organisms known to contribute to the toxicity of blooms, and identified the potential for multiple strains of the same species to be present at a single bloom site. I created a poster to summarize some of the findings from this research. This poster was displayed at the MacWater (McMaster water group) challenges in water monitoring conference held on October 14 in Hamilton. Professors, graduate students, and those who work in industry could view and inquire about the poster and the work being done.",
  },
  {
    title: "Cells at War: An immersive biological game",
    date: "Dec 2022",
    href: "http://www.cellsatwar.com/demo/",
    image: cells,
    imageFit: "cover",
    description:
      "I worked with a group of biology undergraduate students in collaboration with a supervising professor towards the development of an innovative and immersive biological video game. The end goal of the project was to pilot and implement the game in some first year science classrooms at McMaster University. I had the opportunity to present a working build of the game to first year biology students and conduct a survey to collect data regarding how the students felt about the game. This was a cooperative project together with students and faculty from the Game Design program at George Brown College, as well as the Biology department at McMaster University. This project has been extended due to more funding and development is continuing, now with a larger team of collaborators across the globe. We hope to eventually create a hub of science-based games that students can play in place of reading a textbook or examining static images.",
  },
  {
    title: "Undergraduate Thesis: Evolution of LCRs",
    date: "Apr 2023",
    href: "/finalthesis_apr19_alexturco_fixedcomments.pdf",
    image: thesisb,
    imageFit: "contain",
    description:
      "As a fourth year undergraduate thesis student, I worked in a bioinformatics lab under the supervision of Dr. Brian Golding. For my undergraduate thesis, I explored how to estimate evolutionary parameters such as mutation rates and indel rates using an analysis/approach called an approximate bayesian computation (ABC). This analysis is rooted in bayesian statistics and it essentially translates into an algorithm. Using C++, I developed my own version of this algorithm to estimate a small number of parameters that can describe how Low Complexity Regions evolve. Check it out on github by pressing the image above.",
  },
  {
    title:
      "Investigating Sex Differences In Genetic Interactions across Human Cancers",
    date: "Aug 2023",
    href: "/3mt_pmcrc_updated.mp4",
    image: pmcrc,
    imageFit: "contain",
    description:
      "As a research assistant in the Computational Cancer Genomics lab at Princess Margaret Centre, I worked under the supervision of Dr. Sushant Kumar. My research project focused on exploring sex differences in synthetic lethal interactions in 12 types of human cancers. I analyzed RNA sequence data from healthy and tumor tissue samples, in order to find genes differentially expressed in tumor tissue. Using these genes found to be differentially expressed, I attempted to find synthetic lethal pairs that differed between males and females. The video above provides a short overview of my research.",
  },
];
