import React from "react";
import logo from "../assets/Hslogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href = "https://www.linkedin.com/in/harsh-sangwan-62a844269/" > <FaLinkedin /></a>
        <a href = "https://github.com/Harsh-sangwan-8998" > <FaGithub /> </a>
        <a href="#"> <FaTwitterSquare />  </a>
        <a href="#"><FaInstagram /></a> 
      </div>
    </nav>
  );
};

export default Navbar;
