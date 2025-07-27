import styles from './Hero.module.css';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className={styles.hero}>
     
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.videoBg}
      >
        <source src=" src\assets\Hero-Video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      
      <div className={styles.content}>
        <h1>
          <span className={styles.accentText}>Building</span> Digital Futures
        </h1>
        <p className={styles.subtitle}>
          We deliver construction project management, workplace strategy, and commercial services across UAE
        </p>
        <div className={styles.ctaContainer}>
         <a href="mailto:enquiries@projectpeople.ae" className={styles.primaryButton}>
  Get Started <FiArrowRight />
</a>
       <button 
  className={styles.secondaryButton}
  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
>
  View Portfolio
</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;