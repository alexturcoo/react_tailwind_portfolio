import atacseq from "../public/atacseq-tcga-performance.png";
import annotabed from "../public/annotabed-interface.jpg";
import deepnucnet from "../public/deepnucnet-segmentation.png";
import signalweave from "../public/signalweave-workflow.jpg";
import cells from "../public/cells.png";
import pmcrc from "../public/pmcrc.png";
import poster from "../public/poster.png";
import thesisb from "../public/thesisb.png";

export const projects = [
  {
    title: "ATAC-seq: Cancer type classification using TCGA",
    date: "Jan 2026",
    dateTime: "2026-01",
    category: "Cancer genomics · Machine learning",
    summary: "Classifying human cancer types from TCGA chromatin accessibility profiles, with interpretable models that highlight informative regulatory regions.",
    linkLabel: "Explore on GitHub",
    href: "https://github.com/alexturcoo/ATACseq_TCGA_prediction",
    image: atacseq,
    imageAlt: "Held-out test macro F1 and accuracy for linear SVM, logistic regression, and naive Bayes cancer classifiers",
    description:
      "An end-to-end analysis of whether ATAC-seq chromatin accessibility profiles can distinguish human cancer types using publicly available TCGA data. The pipeline preprocesses accessibility peaks, aggregates samples at the patient level, and constructs patient-by-peak feature matrices for classification. Held-out evaluation compares simple machine learning models, while feature importance identifies regulatory regions contributing to cancer-type discrimination. The focus is on interpretable analysis and biological insight rather than maximizing predictive accuracy.",
  },
  {
    title: "annota-bed: Genomic annotation made interactive",
    date: "Oct 2025",
    dateTime: "2025-10",
    category: "Bioinformatics · Interactive tools",
    summary: "A friendly GUI for annotating BED files across hg19, hg38, and T2T-CHM13, with interactive plots and downloadable results.",
    linkLabel: "Explore on GitHub",
    href: "https://github.com/alexturcoo/annota-bed",
    image: annotabed,
    imageAlt: "annota-bed interface with BED upload, three reference genome choices, annotation options, and summary results",
    description:
      "annota-bed — a play on annotated — makes contextual genomic analysis easier through a Next.js interface and Flask backend. Upload a BED file, choose GRCh37/hg19, GRCh38/hg38, or T2T-CHM13v2.0, and explore gene- and transcript-level annotations. The tool supports custom indexed GTF references and optional ENCODE cCRE intersections for hg38. Interactive plots, a searchable results table, and CSV exports help turn genomic intervals into useful biological context. Inspired by vladsavelyev/bed_annotation and extended into a full-stack tool.",
  },
  {
    title: "SignalWeave: Interpretable AML risk scoring",
    date: "Feb 2026",
    dateTime: "2026-02",
    category: "Machine learning · Hackathon",
    summary: "A weakly supervised, interpretable anti-money laundering risk scoring framework, built for a Scotiabank hackathon.",
    linkLabel: "Explore on GitHub",
    href: "https://github.com/alexturcoo/SignalWeave",
    image: signalweave,
    imageAlt: "SignalWeave workflow from regulatory-informed features through weak supervision, model training, and evaluation",
    description:
      "Developed for a Scotiabank anti-money laundering hackathon in February 2026, SignalWeave combines regulatory-informed feature engineering with Snorkel weak supervision to create probabilistic training labels from partially labeled or unlabeled data. Gradient-boosted models (XGBoost and CatBoost) produce customer risk scores, while SHAP explanations make the contributions of behavioral signals easier to interpret. The project includes a regulatory knowledge library, data preparation and feature selection notebooks, model training, and evaluation.",
  },
  {
    title: "DeepNucNet: Nuclei detection & segmentation",
    date: "Mar 2025",
    dateTime: "2025-03",
    category: "Deep learning · Biomedical imaging",
    summary: "Deep learning for nuclei detection and segmentation in microscopy images, developed for a graduate biomedical AI course.",
    linkLabel: "Explore on GitHub",
    href: "https://github.com/alexturcoo/DeepNucNet",
    image: deepnucnet,
    imageAlt: "DeepNucNet microscopy image alongside the ground-truth nuclei segmentation mask and model prediction with errors",
    description:
      "Completed in March 2025 for the graduate course Biomedical Applications of Artificial Intelligence, DeepNucNet explores nuclei detection and segmentation using the 2018 Data Science Bowl microscopy dataset. The project includes image and mask preprocessing, data augmentation, training and hyperparameter tuning across U-Net model variants, and evaluation using Dice, precision, recall, and Hausdorff metrics. The cover shows a test image, its ground-truth segmentation mask, and the model prediction with errors highlighted.",
  },
  {
    title: "Investigating Harmful Algal Blooms in Ontario",
    date: "Aug 2021",
    dateTime: "2021-08",
    category: "Metagenomics",
    summary: "Metagenomic analysis of Ontario bloom sites, exploring bacterial communities and the organisms that contribute to harmful algal blooms.",
    linkLabel: "View research poster",
    href: "/poster.png",
    image: poster,
    description:
      "As a research assistant at McMaster University, I spent the summer exploring harmful algal bloom sites across Ontario. Under the supervision of Dr. Brian Golding and Dr. Herb Schellhorn, I conducted a metagenomic analysis of bloom and non-bloom sites using samples provided by the Ministry of Environment and Climate change. I examined the bacterial composition of samples, trimmed, merged, and assembled genomes of organisms known to contribute to the toxicity of blooms, and identified the potential for multiple strains of the same species to be present at a single bloom site. I created a poster to summarize some of the findings from this research. This poster was displayed at the MacWater (McMaster water group) challenges in water monitoring conference held on October 14 in Hamilton. Professors, graduate students, and those who work in industry could view and inquire about the poster and the work being done.",
  },
  {
    title: "Cells at War: An immersive biological game",
    date: "Dec 2022",
    dateTime: "2022-12",
    category: "Science & education",
    summary: "An immersive biology game developed with students and faculty at McMaster University and George Brown College to bring science into the classroom.",
    linkLabel: "Play the demo",
    href: "http://www.cellsatwar.com/demo/",
    image: cells,
    description:
      "I worked with a group of biology undergraduate students in collaboration with a supervising professor towards the development of an innovative and immersive biological video game. The end goal of the project was to pilot and implement the game in some first year science classrooms at McMaster University. I had the opportunity to present a working build of the game to first year biology students and conduct a survey to collect data regarding how the students felt about the game. This was a cooperative project together with students and faculty from the Game Design program at George Brown College, as well as the Biology department at McMaster University. This project has been extended due to more funding and development is continuing, now with a larger team of collaborators across the globe. We hope to eventually create a hub of science-based games that students can play in place of reading a textbook or examining static images.",
  },
  {
    title: "Undergraduate Thesis: Evolution of LCRs",
    date: "Apr 2023",
    dateTime: "2023-04",
    category: "Computational biology",
    summary: "A C++ implementation of approximate Bayesian computation to estimate mutation and indel rates in evolving low-complexity regions.",
    linkLabel: "Read the thesis",
    href: "/finalthesis_apr19_alexturco_fixedcomments.pdf",
    image: thesisb,
    description:
      "As a fourth year undergraduate thesis student, I worked in a bioinformatics lab under the supervision of Dr. Brian Golding. For my undergraduate thesis, I explored how to estimate evolutionary parameters such as mutation rates and indel rates using an analysis/approach called an approximate bayesian computation (ABC). This analysis is rooted in bayesian statistics and it essentially translates into an algorithm. Using C++, I developed my own version of this algorithm to estimate a small number of parameters that can describe how Low Complexity Regions evolve. Read the thesis for the full analysis.",
  },
  {
    title:
      "Investigating Sex Differences In Genetic Interactions across Human Cancers",
    date: "Aug 2023",
    dateTime: "2023-08",
    category: "Cancer genomics",
    summary: "Exploring sex differences in synthetic lethal interactions across 12 human cancer types using RNA sequencing data.",
    linkLabel: "Watch the overview",
    href: "/3mt_pmcrc_updated.mp4",
    image: pmcrc,
    description:
      "As a research assistant in the Computational Cancer Genomics lab at Princess Margaret Centre, I worked under the supervision of Dr. Sushant Kumar. My research project focused on exploring sex differences in synthetic lethal interactions in 12 types of human cancers. I analyzed RNA sequence data from healthy and tumor tissue samples, in order to find genes differentially expressed in tumor tissue. Using these genes found to be differentially expressed, I attempted to find synthetic lethal pairs that differed between males and females. The linked video provides a short overview of my research.",
  },
].sort((a, b) => b.dateTime.localeCompare(a.dateTime));
