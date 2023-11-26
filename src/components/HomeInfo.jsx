import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { motion } from "framer-motion";

const InfoBox = ({ text, link, btnText }) => (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: -10 }}
    transition={{ duration: 0.5 }}
  >
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  </motion.div>
);

const renderContent = {
  1: (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, my name is <span className="font-semibold">Robert</span>
        👋.
        <br />A Software Developer from Melbourne, Australia!
        <br />
        <br />
        <span className="font-semibold">Click and Drag</span> anywhere on the
        screen to begin,
        <br /> or use your <span className="font-semibold">
          Left and Right
        </span>{" "}
        arrow keys.
      </h1>
    </motion.div>
  ),
  2: (
    <InfoBox
      text="A recent software developer graduate with a passion for making interesting technology solutions and tackling complex problems"
      link="/about"
      btnText="About Me"
    />
  ),
  3: (
    <InfoBox
      text="Working on a multitude of projects, from personal side gigs to professional software. Curious to see some of my work"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev for a project? I'm always open to new opportunities and challenges. Let's get in touch!"
      link="/contact"
      btnText="Let's Talk!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
  // <div className="flex flex-col items-center justify-center">
  //   <h1 className="text-4xl font-bold text-center text-white">
  //     Hi, I'm <span className="text-blue-500">Oscar</span>
  //   </h1>
  //   <h2 className="text-2xl font-bold text-center text-white">
  //     I'm a full-stack developer
  //   </h2>
  //   <p className="mt-4 text-center text-white">
  //     I'm a software engineer based in the Bay Area. I enjoy building
  //     applications that are fast, responsive, and intuitive.
  //   </p>
  // </div>
};

export default HomeInfo;
