import React from 'react';
import Slider from 'react-slick';

const EventsConferences = () => {
  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Infinite loop
    speed: 500,  // Transition speed
    slidesToShow: 3,  // Show 3 images at a time (can be 4, 5, etc.)
    slidesToScroll: 1,  // Scroll one image at a time
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Speed of autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // Show 2 images on medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Show 1 image on small screens
        },
      },
    ],
  };

  return (
    <div id="events" className="py-12 scroll-mt-30">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Events & Conferences</h1>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {/* Book Image Slide */}
          <div className="px-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1731951687922-1bb9d7722a49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Book Published"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Published Book</h2>
              <p className="text-gray-700">Explore the journey behind my latest publication.</p>
            </div>
          </div>

          {/* Teaching Video Thumbnail Slide */}
          <div className="px-2">
            <img
              src="https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/417513743_7121951204539609_7160879536230970854_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGRf4wOaciBocGMqrxa6QZqyhkzLO1xFt_KGTMs7XEW30Cvoizvul-Gj2ondjyKtK4_T2b0-TAIVlfR9dX7uuiG&_nc_ohc=d5A7VTu-xrUQ7kNvgE6hed4&_nc_oc=Adj5kgolKRM2B_c8Ko7jHn_kjZKGp_MHEkc4k2i-sfCGX4DJxJHlmpVbk-DxwcUAxnc&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=AYzEw3snxnyba3wpOCXiaOF&oh=00_AYGAkdqWzy3rwg7nNRQt8xsSHrUz6om6AkVmWLcs62db1A&oe=67D5BC96"
              alt="Teaching Video"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Teaching Session</h2>
              <p className="text-gray-700">Watch a snippet of my teaching session at the conference.</p>
            </div>
          </div>

          {/* Graduation Picture Slide */}
          <div className="px-2">
            <img
              src="https://z-p3-scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/395766055_6667617639972970_6855171003336124366_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvimfagcb5EHVkFmtHjHNYoGJUMajdIWOgYlQxqN0hY-7Q02FHIt0Q2pA8sjnTDUMbttD8h4-r0eS0eYvyXhQF&_nc_ohc=8ozqVF3vIZgQ7kNvgFi1rID&_nc_oc=AdjmpfpHL7Od_94YD-PvHtHBYp_o6Z_ox5AoEJNz5suf33i96DEImnVSkGvi4Am-Aac&_nc_zt=23&_nc_ht=z-p3-scontent.fadd1-1.fna&_nc_gid=A9Q-wDXT7MxkwpzQ3jOamXz&oh=00_AYGfc9sWtWsJIVqI_T6rfkcn7xPjyyyZD27hesnzXK9blw&oe=67D5CA06"
              alt="Graduation"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Graduation Day</h2>
              <p className="text-gray-700">A milestone in my academic journey.</p>
            </div>
          </div>

          {/* YouTube Video Embed Slide */}
          <div className="px-2">
            <iframe
              width="100%"
              height="256"  // Adjusted to match the height of the images (h-64)
              src="https://www.youtube.com/embed/LYj_8uIzCMY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Conference Teaching Video</h2>
              <p className="text-gray-700">Watch the full session from the event.</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default EventsConferences;