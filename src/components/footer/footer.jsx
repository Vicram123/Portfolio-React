import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        VICRAM
      </a>
      <ul className="premalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <BsFacebook />
        </a>
        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small> © Copyright 2022 Vicram. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
