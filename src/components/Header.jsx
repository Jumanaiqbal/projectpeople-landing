import styles from './Header.module.css';
import logo from '../assets/logo.png';
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="ProjectPeople Logo" />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
           <li>
              <a  href="mailto:enquiries@projectpeople.ae" title="Email us" className={styles.ctaLink}>
                <HiOutlineMail className={styles.icon} /> 
              
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;