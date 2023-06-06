import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
      id,
      name,
      image,
      description,
      tags,
      source_code_link,
      live_demo,
}) => (
      <motion.div>
            <Tilt
                  options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                  }}
                  className="bg-tertiary p-5 rounded-3xl sm:w-[360px] w-full"
            >
                  <div className="relative w-full h-[230px]">
                        <img
                              src={image}
                              alt={name}
                              className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-4">
                              <div
                                    onClick={() => {
                                          window.open(
                                                source_code_link,
                                                "_blank"
                                          );
                                    }}
                                    className="black-gradient w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
                              >
                                    <img
                                          src={github}
                                          alt="github"
                                          className="w-1/2 h-1/2 object-contain"
                                    />
                              </div>
                              <div
                                    onClick={() => {
                                          window.open(live_demo, "_blank");
                                    }}
                                    className="black-gradient w-20 h-10 flex items-center justify-center rounded-full cursor-pointer"
                              >
                                    <span>Demo</span>
                              </div>
                        </div>
                  </div>
                  <div className="mt-5">
                        <h3 className="text-white font-bold text-p[24px]">
                              {name}
                        </h3>
                        <p className="text-secondary text-[14px]">
                              {description}
                        </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                              <p
                                    key={tag.name}
                                    className={`text-[14px] ${tag.color}`}
                              >
                                    #{tag.name}
                              </p>
                        ))}
                  </div>
            </Tilt>
      </motion.div>
);

const Works = () => {
      return (
            <div>
                  <motion.div>
                        <p className={styles.sectionSubText}>My Work</p>
                        <h2 className={styles.sectionHeadText}>Projects</h2>
                  </motion.div>
                  <div className="w-full flex">
                        <motion.p
                              variants={fadeIn("", "", 0.1, 1)}
                              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                        >
                              Following projects showcases my skills and
                              experiences through real-world examples of my
                              work. Each project is breiefly described with
                              links to code repositories and live demos in it.
                              It reflects my ability to solve complex problems,
                              work with different technologies, and manage
                              projects effectively.
                        </motion.p>
                  </div>
                  <div className="mt-20 flex flex-wrap gap-7">
                        {projects.map((project) => (
                              <ProjectCard key={project.id} {...project} />
                        ))}
                  </div>
            </div>
      );
};

export default SectionWrapper(Works, "projects");
