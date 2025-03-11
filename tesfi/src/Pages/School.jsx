import React from "react";
import { FaBook, FaGraduationCap, FaUniversity } from "react-icons/fa"; // Importing icons

function School() {
  return (
    <div id="school" className="min-h-screen max-w-8xl mx-auto px-6 scroll-mt-30">
      <h1 className="text-4xl font-bold text-center text-gray-800 py-6">
        Diakonia Spiritual College
      </h1>

      {/* About & Admissions Section */}
      <section className="container px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Image */}
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <img
              src="https://images.deepai.org/art-image/9b871d4609c545749417cb1b5f53d1da/black-female-student-image-like-open-album-style.jpg"
              alt="Diakonia Spiritual College"
              className="rounded-lg cursor-pointer h-full object-cover border border-gray-300 shadow-2xl transform transition-all duration-300 hover:scale-105" // Added light border
            />
          </div>

          {/* Right Side: Spiritual Programs Offered */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-left text-gray-800 mb-6">
            📚 Our Spiritual Programs 
            </h3>
            <div className="flex flex-col gap-6">
              {/* Undergraduate Spiritual Studies */}
              <div className="p-6 rounded-lg hover:shadow-xl transition duration-300 border border-gray-300">
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <FaBook className="text-gray-800" /> {/* Icon for book */}
                  Undergraduate Spiritual Studies
                </h4>
                <p className="text-gray-700 mb-2">
                  Our undergraduate programs provide a firm foundation in biblical principles, prayer, and spiritual service.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Bachelor of Theology (B.Th)</li>
                  <li>Bachelor of Ministry (B.Min)</li>
                  <li>Bachelor of Arts in Spiritual Leadership (B.A.S.L)</li>
                </ul>
              </div>

              {/* Graduate Spiritual Leadership Programs */}
              <div className="p-6 rounded-lg hover:shadow-xl transition duration-300 border border-gray-300">
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <FaGraduationCap className="text-gray-800" /> {/* Icon for graduation */}
                  Graduate Spiritual Leadership Programs
                </h4>
                <p className="text-gray-700 mb-2">
                  Our graduate programs are tailored for those seeking to develop advanced spiritual leadership and understanding.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Master of Theology (M.Th)</li>
                  <li>Master of Divinity (M.Div)</li>
                  <li>Master of Arts in Christian Ministry (M.A.C.M)</li>
                </ul>
              </div>

              {/* PhD in Spirituality and Ministry */}
              <div className="p-6 rounded-lg hover:shadow-xl transition duration-300 border border-gray-300">
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <FaUniversity className="text-gray-800" /> {/* Icon for university */}
                  PhD in Spirituality and Ministry
                </h4>
                <p className="text-gray-700 mb-2">
                  Our PhD programs are designed for scholars and spiritual leaders who wish to make a lasting impact in their communities.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>PhD in Theology and Ministry</li>
                  <li>PhD in Spiritual Care and Counseling</li>
                  <li>PhD in Christian Education and Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default School;
