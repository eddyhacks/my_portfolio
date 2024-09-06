import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import { SiDjango } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiWireshark } from "react-icons/si";
import { SiBurpsuite } from "react-icons/si";


const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => (
  <div className="broder-b border-neutral-800 pb-4">
    <motion.h2 
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y: -100}}
     transition={{duration: 0.5}}
    className="my-20 text-center text-4xl font-bold">Technologies</motion.h2>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-5"
    >
      <motion.div
        variants={iconvariants(1)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <FaHtml5 className="text-5xl text-red-500" />
      </motion.div>

      <motion.div
        variants={iconvariants(1.5)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <FaCss3Alt className="text-5xl text-blue-500" />
      </motion.div>

      <motion.div
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <DiJavascript className="text-5xl text-yellow-300" />
      </motion.div>

      <motion.div
        variants={iconvariants(2.5)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiDjango className="text-5xl text-green-400" />
      </motion.div>
      <motion.div
        variants={iconvariants(3)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <RiReactjsLine className="text-5xl text-cyan-400" />
      </motion.div>

      <motion.div
        variants={iconvariants(3.5)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <TbBrandNextjs className="text-5xl" />
      </motion.div>

      <motion.div
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiMongodb className="text-5xl text-green-500" />
      </motion.div>
      
      <motion.div
        variants={iconvariants(3.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <FaNodeJs className="text-5xl text-green-500" />
      </motion.div>

      <motion.div
        variants={iconvariants(1.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiWireshark className="text-5xl text-blue-700" />
      </motion.div>

      <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiBurpsuite className="text-5xl text-orange-300" />
      </motion.div>


      
    </motion.div>
  </div>
);

export default Technologies;
