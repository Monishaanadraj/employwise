import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { FaUsers, FaUserPlus, FaCog, FaSignOutAlt } from "react-icons/fa";
import style from "./Navbar.module.css";

const Navbar = () => {

  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token"); // Check if token exists


  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/"); // Redirect to Login page
  };

  return (
    <div className={style.navbar}>
      <h2>EmployWise</h2>
      <nav className={style.nav_links}>      
      {/* Show Users and Logout only if logged in */}
      {isAuthenticated && <Link to="/users"><FaUsers /> Users</Link>}
      {isAuthenticated && <button className={style.logout_btn} onClick={handleLogout}><FaSignOutAlt /> Logout</button>}
      
      {/* Show Login link only if NOT logged in */}
      {!isAuthenticated && <Link to="/">Login</Link>}
      </nav>
    </div >
  );
};

export default Navbar;
