import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
      <div className={styles.companyInfo}>
          <h3>EmployWise</h3>
          <p>&copy; {new Date().getFullYear()} EmployWise. All rights reserved.</p>
        </div>

        <div className={styles.quickLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Login</a></li>
            <li><a href="/users">Users</a></li>
          </ul>
        </div>

        <div className={styles.socialLinks}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className={styles.icon} /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className={styles.icon} /> Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className={styles.icon} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
