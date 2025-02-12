import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { teamMember1, teamMember2, teamMember3 } from '../../public';
import Modal from './Modal';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { portfolio } from "../data";
import TeamMemberModal from './TeamMemberModal';
import WhatIsFTC from './WhatIsFTC'; // Importing the WhatIsFTC component

const ProjectCard = ({
  index,
  name,
  description,
  image,
  teamMembers,
  setIsOpen,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  const [showSlideshow, setShowSlideshow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSlideshowClick = () => {
    setShowSlideshow(true);  // Open the slideshow
    setIsModalOpen(true);  // Open the Team Member Modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setShowSlideshow(false); // Hide the slideshow
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover md:rounded-3xl'
          onClick={() => {
            if (name === "Meet The team") {
              setIsOpen(true);
            }
          }}
        />
        {name === "Meet The team" && (
          <button
            onClick={setIsOpen}
            className='absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full'
          >
            Show Slideshow
          </button>
        )}
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
      </div>

      {showSlideshow && name === "Meet The team" && isModalOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white p-5 flex justify-center items-center">
          <div className="relative">
            {/* Place the Slideshow component or your desired slideshow UI here */}
            <p>Slideshow goes here</p>

            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <WhatIsFTC />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            name={project.name}
            description={project.description}
            image={project.image}
            teamMembers={project.teamMembers}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>

      <TeamMemberModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Portfolio;
