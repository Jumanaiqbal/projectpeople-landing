import React from 'react';
import styles from './Footer.module.css';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="ProjectPeople Logo" className={styles.logo} />
            </div>
            <p className={styles.aboutText}>
              We are a flexible, client-focused team that adopts a proven methodology to deliver on our clients' investments.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/services/commercial">Commercial</a></li>
              <li><a href="/services/education">Education & Innovation</a></li>
              <li><a href="/services/industrial">Industrial</a></li>
              <li><a href="/services/retail">Retail</a></li>
              <li><a href="/services/residential">Residential</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <address className={styles.contactInfo}>
              <p>Office 1702, The Burlington Tower</p>
              <p>Business Bay, Dubai, UAE</p>
              <p><a href="tel:+97144204444">+971 4 420 4444</a></p>
              <p><a href="mailto:info@projectpeople.ae">info@projectpeople.ae</a></p>
            </address>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} ProjectPeople. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;