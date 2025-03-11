import React from 'react';

function BookPublished() {
  return (
    <div id="books" className="min-h-screen py-12 scroll-mt-26">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-16">
          My Published Book
        </h1>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Right Side: Book Details */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Title of the Book
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This book is a culmination of years of research, passion, and dedication. It explores
              the depths of [topic] and provides readers with actionable insights and strategies to
              [achieve something]. Whether you're a beginner or an expert, this book will guide you
              through [specific journey or transformation].
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Published on <span className="font-semibold">March 29th, 2025</span>, this book has
              already touched the lives of thousands of readers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/purchase"
                className="bg-blue-900 text-white px-8 py-3 rounded-lg text-center hover:bg-blue-800 transition duration-300"
              >
                Purchase Now
              </a>
              <a
                href="/preview"
                className="bg-transparent border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg text-center hover:bg-blue-900 hover:text-white transition duration-300"
              >
                Read a Preview
              </a>
            </div>
          </div>

          {/* Image Section (Appears at the top on mobile) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1731951687922-1bb9d7722a49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Book Cover"
              className="w-full cursor-pointer rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPublished;
