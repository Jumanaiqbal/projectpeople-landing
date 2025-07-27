import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styles from './Portfolio.module.css';

import Education from '../assets/Education.webp';
import Industrial from '../assets/Industrial.webp';
import Residential from '../assets/residential.webp';
import Retail from '../assets/retail.webp';
import Commercial from '../assets/Commercial.webp';

const projects = [
  {
    id: 1,
    title: "Dubai Government Entity Offices",
    category: "COMMERCIAL",
    location: "Dubai, UAE",
    year: "2024",
    description: "From traditional office environments to award-winning co-working spaces, we have delivered many top-quality fit-out projects all over the country. Our work includes high end office environments for leaders of governmental departments, and international Fortune 500’s including some of the world’s most recogniSable brands in social media, technology, banking and pharmaceuticals. Our experience over the last 12 years solidifies our position as leaders in formal commercial office space and co-working / innovation projects",
    image: Commercial
  },
  {
    id: 2,
    title: "Nursery of the Future",
    category: "EDUCATION & INNOVATION",
    location: "Dubai, UAE", 
    year: "2024",
    description: "Schools and academic institutions are purpose-built facilities and we have delivered both new builds and retro-fits in this field. We have recently completed a state-of-the-art, purpose-built children’s nursery in one of the country’s most iconic buildings. We have achieved significant success for this prolific education brand that benefited from our methodology and technical approach to such a degree, it is being implemented for their other locations.",
    image: Education
  },
  {
    id: 3,
    title: "Al Barari Villa",
    category: "RESIDENTIAL",
    location: "Al Barari, Dubai",
    year: "2023", 
    description: "Our team has worked in this sector both for property development companies extending our expertise for large scale or mixed-use developments; to private luxury villas throughout the region. We have worked with the largest names in residential remits in the UAE and have delivered several phases of long-term projects successfully. Our client base includes A-list celebrities that you will often find on the world stage from company CEOs of global companies, to TV stars and professional sports people.",
    image: Residential
  },
  {
    id: 4,
    title: "Jebel Ali Freezone Warehouse",
    category: "INDUSTRIAL",
    location: "Dubai, UAE",
    year: "2023",
    description: "The team has delivered over 10,000’s of sqm of industrial projects in the past several years. From successfully handing over the regional headquarters, training academy and workspace for the regions largest corporate training and development company; to completing the flagship campus with workshop for one of the leading aviation universities. We have also completed numerous other projects for international conglomerates such as Maersk who required a state-of-the-art training and simulation facility which was the first of its kind in the region.",
    image: Industrial
  },
  {
    id: 5,
    title: "Mall Based High Street Brand",
    category: "RETAIL",
    location: "Dubai Festival City Mall",
    year: "2023",
    description: "We have delivered notable projects in the retail space from a famous London lingerie showroom in Dubai Festival City Mall, to retail banks and a luxury clothing brand at Reem Mall in Abu Dhabi. Our work in this space is wide-ranging and has been met with accolades from local, regional, and international clientele.",
    image: Retail
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Image parallax (moves slower than content)
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const isLeftLayout = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      style={{ 
        opacity,
        scale,
        y
      }}
      className={`${styles.project} ${isLeftLayout ? styles.leftLayout : styles.rightLayout}`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.15
      }}
    >
      <motion.div 
        className={styles.imageContainer}
        style={{ y: imageY }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img 
          src={project.image} 
          alt={project.title}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.15 + 0.3 }}
        />
        <div className={styles.imageOverlay} />
      </motion.div>
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, x: isLeftLayout ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeftLayout ? -50 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 + 0.2 }}
      >
        <motion.span 
          className={styles.category}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
        >
          {project.category}
        </motion.span>
        
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className={styles.projectMeta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
        >
          <span className={styles.location}>{project.location}</span>
          <span className={styles.year}>{project.year}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className={styles.portfolio} ref={containerRef}>
      <motion.div 
        className={styles.backgroundParallax}
        style={{ y: backgroundY }}
      />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;