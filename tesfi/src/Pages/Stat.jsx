import React from "react";

function Stat() {
  const stats = [
    {
      label: "Registered Members",
      value: "37,000+",
      description: "These are the individuals who have faith in the vision and became part of the movement.",
      color: "text-blue-900",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      label: "Scholarship Winners",
      value: "2,000+",
      description: "We are only as strong as our weakest link. We try to include everyone in the journey.",
      color: "text-green-700",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      label: "Active Students",
      value: "5,000+",
      description: "These are students trying to acquire the necessary digital skills to compete globally.",
      color: "text-purple-800",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-8">
          Our Impact <span className="text-blue-600">📊</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex flex-col items-center text-center">
                <span className={`text-5xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                  {stat.label}
                </h3>
                <p className="text-base text-gray-600 mt-4 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stat;