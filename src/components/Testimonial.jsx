import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonial.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Savannah Nguyen",
    company: "Education First",
    quote: "ProjectPeople delivered exceptional results on our nursery project. Their attention to detail and innovative approach set a new standard for educational spaces in the region.",
    project: "Nursery of the Future"
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    company: "Dubai Government",
    quote: "The team's work on our office spaces transformed our workplace culture. Their understanding of governmental operations was impressive.",
    project: "Government Entity Offices"
  },
  {
    id: 3,
    name: "Albert Flores",
    company: "Retail Group",
    quote: "From concept to completion, ProjectPeople exceeded our expectations. Our retail space performance improved by 40% post-renovation.",
    project: "Mall High Street Brand"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => 
      dir > 0 
        ? (prev + 1) % testimonials.length 
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.4 }
    })
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>CLIENT TESTIMONIALS</span>
          <h2 className={styles.title}>What Our Clients Says!</h2>
        </div>

        <div className={styles.carousel}>
          <button 
            className={styles.navButton} 
            onClick={() => navigate(-1)}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>

          <div className={styles.sliderWrapper}>
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.testimonialCard}
              >
                <div className={styles.quoteContainer}>
                  <svg className={styles.quoteIcon} viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className={styles.quote}>"{testimonials[current].quote}"</p>
                </div>

                <div className={styles.clientInfo}>
                  <div>
                    <h4 className={styles.clientName}>{testimonials[current].name}</h4>
                    <p className={styles.clientCompany}>{testimonials[current].company}</p>
                  </div>
                  <div className={styles.projectTag}>
                    {testimonials[current].project}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className={styles.navButton} 
            onClick={() => navigate(1)}
            aria-label="Next testimonial"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.active : ''}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;