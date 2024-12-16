import React from "react";
import Image from 'next/image';
import Form from "../../../components/Form";
import '@/styles/Contact.css'; // Import the CSS file

export default function GetInTouch() {
  return (
    <main className="main-container">
      {/* Background Section */}
      <section className="background-section">
        {/* Background Image */}
        <Image
          src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/contact-title.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="background-image"
        />
        {/* Content on top of the image */}
        <div className="content-container">
          <div className="content-text">
            <h2 className="heading">Get in Touch</h2>
            <p className="description">
              Etiam convallis, felis quis dapibus dictum, libero mauris luctus, non
              fringilla purus ligula non justo. Non fringilla purus ligula justo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Form />
    </main>
  );
}
