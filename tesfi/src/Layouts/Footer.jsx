import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>
              Welcome to our spiritual college, a place dedicated to nurturing your faith,
              wisdom, and spiritual growth. We offer various programs to empower students
              on their spiritual journeys.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Email: <a href="mailto:info@spiritualcollege.com" className="text-blue-400">info@spiritualcollege.com</a></p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-600 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Spiritual College | All Rights Reserved</p>
          <p className="text-sm text-gray-400 mt-2">
            Personal Website by <a href="https://yourportfolio.com" className="text-blue-400">Natan Mesele</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
