import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2020- present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelance"
            subTitle="Frontend developer- (2020 - Present)"
            result="Germany"
            des="Developed websites using React,HTML5/CSS3 and Javascripts ES6 and React"
          />
          <ResumeCard
            title=" Computer studies ( febuary 2017 -  febuary 2018)"
            subTitle="Taught students basic computer studies and how to use the computer"
            result="Nigeria"
            des="How to use the computer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;