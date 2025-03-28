import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css"; // Import CSS module

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1>Welcome to EmployWise</h1>
        <p>Your simple and efficient Users Management System.</p>

        <div className={styles.homeButtons}>
          <Link to="/users" className={styles.homeBtn}>Manage Users</Link>
          <Link to="/login" className={styles.homeBtn}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
