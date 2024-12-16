import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import "../styles/Slider.css" // Import your CSS file here

function Slider() {

    const images = [
        "https://images.unsplash.com/photo-1492778297155-7be4c83960c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://thumbs.dreamstime.com/b/beautiful-herbal-teas-copy-space-generative-ai-illustration-336856386.jpg",
        // "https://images.unsplash.com/photo-1587496679742-bad502958fbf",
        "https://thumbs.dreamstime.com/b/flat-lay-two-cups-herbal-tea-surrounded-various-dried-flowers-herbs-light-blue-background-left-324871859.jpg",
        "https://plus.unsplash.com/premium_photo-1730833407755-6faaac25251f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];


      const [currentImage, setCurrentImage] = useState(0);

      const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      };
    
      const handlePrevious = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      };
    
      const handleDotClick = (index: number) => {
        setCurrentImage(index);
      };
    
      return (
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">The Art of Tea.</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet, agam viris at vel. Mei tollit facilisi et,
              audire nam. Rebum, te posse impetus pro.
            </p>
            <button className="hero-button">VIEW FEATURES</button>
          </div>
    
          <div className="slider-wrapper">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="slider-item">
                  <Image
                    src={image}
                    alt="hero image"
                    className="slider-image"
                    width={1200}
                    height={800}
                  />
                </div>
              ))}
            </div>
          </div>
    
          <button
            onClick={handlePrevious}
            className="nav-button left"
          >
            <ChevronLeft size={52} />
          </button>
          <button
            onClick={handleNext}
            className="nav-button right"
          >
            <ChevronRight size={52} />
          </button>
    
          <div className="dots-navigation">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot ${currentImage === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      );
    }
    
    export default Slider;