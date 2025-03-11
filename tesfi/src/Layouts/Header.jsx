import React, { useState } from "react";
import { FaHome, FaDonate } from "react-icons/fa"; // Import home and donate icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <a href="#home">
          <img
            src="https://www.shutterstock.com/image-vector/simple-minimal-logo-design-church-600nw-2305257681.jpg"
            alt="Logo"
            className="w-20 md:w-24 cursor-pointer"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {/* Home Icon */}
          <a href="home" className="text-gray-700 hover:text-blue-600 transition duration-300">
            <FaHome className="text-2xl" />
          </a>
          {/* Navigation Links */}
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#blog" className="text-gray-700 hover:text-blue-600 transition duration-300">Blog</a>
          <a href="#school" className="text-gray-700 hover:text-blue-600 transition duration-300">School</a>
          <a href="#books" className="text-gray-700 hover:text-blue-600 transition duration-300">Books & Publications</a>
          <a href="#events" className="text-gray-700 hover:text-blue-600 transition duration-300">Events & Conferences</a>
          
          {/* Donate Button */}
          <button className="flex items-center gap-2 py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300">
            <FaDonate className="text-lg" />
            <span>Donate</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation (Slide in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-700 text-2xl focus:outline-none cursor-pointer"
        >
          ✕
        </button>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col items-start gap-6 mt-16 p-6">
          {/* Home Icon */}
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center gap-2">
            <FaHome className="text-xl" />
            <span>Home</span>
          </a>
          {/* Mobile Nav Links */}
          <a href="#blog" className="text-gray-700 hover:text-blue-600 transition duration-300">Blog</a>
          <a href="#school" className="text-gray-700 hover:text-blue-600 transition duration-300">School</a>
          <a href="#books" className="text-gray-700 hover:text-blue-600 transition duration-300">Books & Publications</a>
          <a href="#events" className="text-gray-700 hover:text-blue-600 transition duration-300">Events & Conferences</a>

          {/* Donate Button in Mobile Nav */}
          <button className="flex items-center gap-2 py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 mt-4">
            <FaDonate className="text-lg" />
            <span>Donate</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
