import React from 'react';
import '../styles/Ourfocus.scss';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img2 from '../assets/img2.jpeg';

const OurFocus = () => {
  const sections = [
    {
      id: "skilled-rehabilitation",
      title: "Skilled/Rehabilitation",
      description: "We provide personalized, goal-oriented rehabilitation services to help you regain independence and improve quality of life.",
      image: img3, // Add your image path here
    },
    {
      id: "longterm-care",
      title: "Longterm Care",
      description: "Compassionate, comprehensive long-term care services to meet the evolving needs of our residents.",
      image: img4, // Add your image path here
    },
    {
      id: "medicated-recovery",
      title: "Medicated Supported Recovery",
      description: "Safe and effective recovery plans supported by medical professionals to help you transition to a healthier lifestyle.",
      image: img2, // Add your image path here
    },
  ];

  return (
    <section className="our-focus-section">
      <div className="focus-container">
        <h1 className="focus-title">Our Focus</h1>
        <div className="focus-cards">
          {sections.map((section) => (
            <div key={section.id} className="focus-card">
              <img src={section.image} alt={section.title} className="focus-card-image" />
              <div className="focus-card-content">
                <h2 className="focus-card-title">{section.title}</h2>
                <p className="focus-card-description">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFocus;