import React from 'react';
import Slider from "react-slick"; // Importing the slideshow component

const Modal = ({ isOpen, onClose, teamMembers }) => {
  if (!isOpen) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">Close</button>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <img src={member} alt={`Team Member ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Modal;