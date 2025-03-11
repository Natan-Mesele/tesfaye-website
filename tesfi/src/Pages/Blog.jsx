import React, { useState } from 'react';

function Blog() {
  const blogData = [
    {
      id: 1,
      title: "The Rise of AI in Healthcare",
      description: "Artificial Intelligence (AI) is transforming healthcare, improving patient outcomes and streamlining administrative tasks.",
      fullDescription: "Artificial Intelligence (AI) is transforming healthcare, improving patient outcomes and streamlining administrative tasks. AI technologies are being applied in diagnostics, treatment recommendations, and administrative work, leading to better efficiency and cost savings.",
      image: "https://thethrivecenter.org/wp-content/uploads/2022/06/Blog-Resource-Headers-_1920x1080-800x0-c-default.jpg",
    },
    {
      id: 2,
      title: "Sustainable Practices in the Fashion Industry",
      description: "The fashion industry is taking steps to reduce its environmental footprint, from sustainable fabrics to eco-friendly production methods.",
      fullDescription: "The fashion industry is taking steps to reduce its environmental footprint, from sustainable fabrics to eco-friendly production methods. This includes using organic cotton, reducing water waste, and embracing circular fashion models where products are recycled or upcycled.",
      image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
    },
    {
      id: 3,
      title: "Advancements in Renewable Energy",
      description: "With the increasing demand for clean energy, new innovations in solar, wind, and hydropower are paving the way for a sustainable future.",
      fullDescription: "With the increasing demand for clean energy, new innovations in solar, wind, and hydropower are paving the way for a sustainable future. Researchers are developing more efficient solar panels, wind turbines, and energy storage technologies to make renewable energy more accessible and reliable.",
      image: "https://music.mercer.edu/wp-content/uploads/sites/64/2024/12/singers2409_FallFamilyConcert_CiSmith-33-X2.jpg",
    },
    {
      id: 4,
      title: "Mental Health Awareness in the Workplace",
      description: "Addressing mental health challenges in the workplace is crucial for fostering a supportive and productive environment for employees.",
      fullDescription: "Addressing mental health challenges in the workplace is crucial for fostering a supportive and productive environment for employees. Employers are implementing mental health programs, promoting work-life balance, and providing resources to help employees manage stress and anxiety.",
      image: "https://hips.hearstapps.com/hmg-prod/images/bas-c3-adlica-del-voto-nacional-basilica-of-the-national-royalty-free-image-1655826535.jpg?crop=0.74996xw:1xh;center,top&resize=1200:*",
    },
    {
      id: 5,
      title: "The Impact of Electric Vehicles on the Environment",
      description: "Electric vehicles (EVs) are revolutionizing the automotive industry, offering a more sustainable and eco-friendly alternative to traditional gas-powered cars.",
      fullDescription: "Electric vehicles (EVs) are revolutionizing the automotive industry, offering a more sustainable and eco-friendly alternative to traditional gas-powered cars. With advancements in battery technology, EVs are becoming more affordable and practical, reducing carbon emissions and promoting cleaner air.",
      image: "https://www.mgprestigecar.fr/wp-content/uploads/2024/08/Electric-Vehicle-Features.jpg",
    },
    {
      id: 6,
      title: "Future Trends in Space Exploration",
      description: "The future of space exploration looks promising, with new technologies and private companies taking the lead in exploring the cosmos.",
      fullDescription: "The future of space exploration looks promising, with new technologies and private companies taking the lead in exploring the cosmos. From Mars missions to the development of space tourism, space exploration is rapidly advancing, opening up new possibilities for humanity's future in space.",
      image: "https://media.istockphoto.com/id/182062885/photo/space-station-in-earth-orbit.jpg?s=612x612&w=0&k=20&c=F_P2YJ3QDbSW2n6dWkh6JNYeQGI1-2q-wOBk9-sw_Xo=",
    },
  ];

  const [visiblePostId, setVisiblePostId] = useState(null);

  const toggleDescription = (id) => {
    setVisiblePostId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="blog" className="p-4 md:p-8 scroll-mt-26">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((post) => (
          <div key={post.id} className="mb-6 border rounded-lg shadow-md overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 px-4 whitespace-pre-line">{post.title}</h2>
            <p className="text-lg text-gray-700 px-4">
              {visiblePostId === post.id ? post.fullDescription : post.description}
            </p>
            <div className="px-4 py-2">
              <button
                onClick={() => toggleDescription(post.id)}
                className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
              >
                {visiblePostId === post.id ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
