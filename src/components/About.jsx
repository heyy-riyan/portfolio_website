import React from "react";
// for tilting the cards that displaying
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      // fade in from the right side, type of spring
      // the delay is 0.5 seconds multiplied for every index, first is 0 second is 0.5 third is 1 and so on
      // and the duration is 0.75 seconds
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      {/* tilt options that providing to the cards */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* show the icon */}
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        {/* text inside the cards */}
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* for animate */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
       
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        "Hello Community,

        I am delighted to introduce myself, Md Abdul Wali Farooqui, a dedicated student with a deep passion for the world of Artificial Intelligence and Data Science. <br />
        Currently, I am pursuing a comprehensive program in AI and Data Science, where I am actively engaged in data analysis, machine learning, and the application of AI techniques. My academic journey is a testament to my unwavering commitment to exploring data-driven solutions and the latest advancements in these fields. <br />
        Beyond my coursework, I actively participate in AI research projects, collaborating with peers on innovative data-driven solutions. My enthusiasm for AI and Data Science is evident in my active involvement in events, competitions, and conferences, where I continuously strive to expand my knowledge and network with fellow enthusiasts.
        <br />
        Let's work together to bring your ideas to life!
      </motion.p>
    
      {/* display cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {/* loop over the services for each individual service render a custom service card */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// wrap the export default About with the SectionWrapper - (About - component, "about" - idName)
export default SectionWrapper(About, "about");
