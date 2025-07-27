import styles from './About.module.css';
import { FiUsers, FiAward, FiMapPin } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.subtitle}>People-First Excellence</span>
            Building Trust Since 2013
          </h2>
          <p className={styles.intro}>
            We're tremendously proud of our client-focused approach that delivers 
            exceptional project management across the UAE.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FiUsers className={styles.icon} />
            <h3>Proven Methodology</h3>
            <p>
              Flexible team adopting tailored strategies to protect client 
              investments and ensure repeat success.
            </p>
          </div>

          <div className={styles.card}>
            <FiMapPin className={styles.icon} />
            <h3>Multi-Sector Mastery</h3>
            <ul className={styles.expertiseList}>
              <li>Healthcare</li>
              <li>Education & Innovation</li>
              <li>Hospitality & Leisure</li>
              <li>Commercial & Residential</li>
            </ul>
          </div>

          <div className={styles.card}>
            <FiAward className={styles.icon} />
            <h3>10+ Years Legacy</h3>
            <p>
              Extensive track record delivering commercial management 
              services throughout the UAE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;