import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Dynamically import all images from the slideshow directory
    const importAll = (r) => {
      return r.keys().map(r);
    };

    try {
      const imageContext = require.context('../../public/images/slideshow', false, /\.(png|jpe?g|svg)$/);
      setImages(importAll(imageContext));
    } catch (error) {
      console.error("Error importing slideshow images:", error);
      // Handle cases where require.context might not be available or path is wrong
      // For example, in a non-webpack environment or if the directory is empty
    }
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return <div className="slideshow-container">No images to display.</div>;
  }

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`Slideshow image ${currentIndex + 1}`}
        className="slideshow-image"
      />
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
