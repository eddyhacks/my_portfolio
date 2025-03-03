import React from "react";
import { motion } from "framer-motion";
import { SiDjango } from "react-icons/si";

import { FaPython } from "react-icons/fa";
import { SiPandas,  } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { SiPostgresql } from "react-icons/si";

import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiAnaconda } from "react-icons/si";

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
        <FaPython className="text-5xl text-red-500" />
      </motion.div>

      <motion.div
        variants={iconvariants(1.5)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiPandas className="text-5xl text-blue-500" />
      </motion.div>


      <motion.div
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiNumpy className="text-5xl text-yellow-300" />
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
        <SiScikitlearn className="text-5xl text-cyan-400" />
      </motion.div>

      <motion.div
        variants={iconvariants(3.5)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiTensorflow className="text-5xl" />
      </motion.div>

      <motion.div
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiPytorch className="text-5xl text-green-500" />
      </motion.div>
      
      <motion.div
        variants={iconvariants(3.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <GrMysql className="text-5xl text-green-500" />
      </motion.div>

      <motion.div
        variants={iconvariants(1.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiPostgresql className="text-5xl text-blue-700" />
      </motion.div>

      <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiMicrosoftsqlserver className="text-5xl text-orange-300" />
      </motion.div>

      <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiTableau className="text-5xl text-orange-300" />
      </motion.div>

      <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiPowerbi className="text-5xl text-orange-300" />
      </motion.div>

      <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiJupyter className="text-5xl text-orange-300" />
      </motion.div>

      <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiAnaconda className="text-5xl text-orange-300" />
      </motion.div>

      {/* <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <FaExcel className="text-5xl text-orange-300" />
      </motion.div> */}

      {/* <motion.div
        variants={iconvariants(2.7)}
        initial="initial"
        animate="animate"
        className="pb-4"
      >
        <SiSeaborn className="text-5xl text-orange-300" />
      </motion.div> */}


      
    </motion.div>
  </div>
);

export default Technologies;
