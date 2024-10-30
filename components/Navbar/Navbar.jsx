/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link href="/" className="logo">
          <img src="/Smartica logo.png" alt="SMATICA" width={100} />
        </Link>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button
              id="demo"
              onClick={() => {
                window.location.href = "/demo";
              }}
            >
              Book Demo
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
