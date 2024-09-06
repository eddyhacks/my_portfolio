import React from "react";
import aboutImg from "../assets/profile_photo_-removebg-preview.png";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => (
  <div>
    <h1 className="font-bold my-10 text-center text-4xl">
      About
      <span className="text-neutral-500"> Me</span>
    </h1>
    <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 pb-10">
        <div className="flex items-center justify-center">
            <img className="rounded-xl w-[450px]" src={aboutImg} alt="about" />
        </div>
        </motion.div>
        
        <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x: 100}}
         transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
        <div className="flex items-center justify-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
        </div>
        </motion.div>
    </div>
  </div>
);

export default About;
