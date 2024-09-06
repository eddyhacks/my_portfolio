import React from "react";
import { HERO_CONTENT_1 } from "../constants";
import { HERO_CONTENT_2 } from "../constants";
import { HERO_CONTENT_3 } from "../constants";
import { HERO_CONTENT_4 } from "../constants";

import profilepic from "../assets/Aditya_goyal_Profile_photo.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => (
  <div className=" pb-4 lg:mb-35">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
          >
            Aditya Goyal
          </motion.h1>
          <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-2xl tracking-tight text-transparent font-bold"
          >
            Software Developer
          </motion.span>
          

          <motion.p
            className="my-2 max-w-xl py-2 tracking-tighter font-bold"
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
          >
            {HERO_CONTENT_1}
          </motion.p>

          <motion.p
            className="my-2 max-w-xl py-2 font-bold tracking-tighter"
            variants={container(1.6)}
            initial="hidden"
            animate="visible"
          >
            {HERO_CONTENT_2}
          </motion.p>

          <motion.p
            className="my-2 max-w-xl py-2 font-bold tracking-tighter"
            variants={container(1.7)}
            initial="hidden"
            animate="visible"
          >
            {HERO_CONTENT_3}
          </motion.p>

          <motion.p
            className="my-2 max-w-xl py-2 font-bold tracking-tighter"
            variants={container(1.8)}
            initial="hidden"
            animate="visible"
          >
            {HERO_CONTENT_4}
          </motion.p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:p-20 ">
        <div className="flex justify-center ">
          <motion.img 
          className="rounded-2xl"
          initial={{x: 100, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{duration:1 , delay:2}}
          src={profilepic} alt="Aditya Goyal" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
