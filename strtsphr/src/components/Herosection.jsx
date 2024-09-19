import React, { useState, useEffect } from 'react';
import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sliderImages = [image1, image2, image3];
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 3000);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [sliderImages.length]);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Launching Dreams, Building Futures
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
       We provide a platform for aspiring founders to turn their ideas into reality by offering mentorship, resources, and a collaborative community. Join us to unlock your potential and shape the future of tomorrow's startups.
      </p>
      
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={demo1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={demo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-10 w-full max-w-lg">
        <img
          src={sliderImages[currentImageIndex]}
          alt="Slider"
          className="w-screen h-96 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;