import React from "react";
import Image from "next/image";
import "../styles/Features.css"; // Import the CSS file

function Features() {
  const features = [
    {
      title: "Stunning Full Screen Slider",
      description:
        "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website and creating pages.",
      position: {
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
    {
      title: "Simple Demo Import",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality that comes in style.",
      position: {
        top: "25%",
        right: "0",
      },
    },
    {
      title: "Smooth Parallax Effect",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your content.",
      position: {
        bottom: "25%",
        right: "0",
      },
    },
    {
      title: "Infographic Elements",
      description:
        "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website has never been.",
      position: {
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
    {
      title: "WooCommerce Compatible",
      description:
        "Elated Themes provide a large collection of elements and shortcodes. Create any layout combination you can imagine and.",
      position: {
        bottom: "25%",
        left: "0",
      },
    },
    {
      title: "Retina Ready",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality display your main.",
      position: {
        top: "25%",
        left: "0",
      },
    },
  ];

  const decorativeLeaves = [
    {
      color: "#f8b9c6",
      rotation: 45,
      top: "15%",
      left: "30%",
    },
    {
      color: "#a8e6e1",
      rotation: 90,
      top: "25%",
      right: "25%",
    },
    {
      color: "#f8b9c6",
      rotation: 180,
      bottom: "20%",
      left: "35%",
    },
    {
      color: "#a8e6e1",
      rotation: 270,
      bottom: "30%",
      right: "20%",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="decorative-tea-cup">
          <Image
            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/tea1-1.png"
            alt="Decorative tea cup"
            width={400}
            height={400}
          />
        </div>

        {decorativeLeaves.map((leaf, index) => (
          <svg
            key={index}
            className="decorative-leaf"
            style={{
              top: leaf.top,
              left: leaf.left,
              right: leaf.right,
              bottom: leaf.bottom,
              transform: `rotate(${leaf.rotation}deg)`,
            }}
            viewBox="0 0 24 24"
            fill={leaf.color}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        ))}

        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item"
            style={{
              ...feature.position,
              textAlign: feature.position.right
                ? "left"
                : feature.position.left === "0"
                ? "right"
                : "center",
            }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
