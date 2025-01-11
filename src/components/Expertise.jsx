import React from 'react';
import "../styles/Expertise.scss";
import service4 from '../assets/service-4.jpeg';
import service5 from '../assets/service-5.jpeg';
import service6 from '../assets/service-6.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

const Expertise = () => {
  const sections = [
    { id: "who-we-are", title: "Who We Are", content: "Learn about our mission, values, and commitment to providing exceptional care.",image: img3},
    { id: "our-campus", title: "Our Campus", content: "Explore our state-of-the-art facilities designed for healing and growth.", image: img4 },
    { id: "care-recovery", title: "Care & Recovery", content: "Discover our holistic approach to care and recovery programs.", image: img2 },
    { id: "accommodations", title: "Accommodations", content: "Experience comfortable, private spaces tailored to your needs.", image: img1 },
    { id: "amenities", title: "Amenities", content: "Enjoy our wide range of modern amenities to enhance your recovery journey.", image: service4 },
    { id: "medicated-support", title: "Medicated Support Recovery", content: "Learn about our medically supervised support and recovery options.", image: service5 },
    { id: "our-team", title: "Our Team", content: "Meet our compassionate and highly qualified team of professionals.", image: service6 },
    { id: "outpatient-care", title: "Outpatient Care", content: "Flexible outpatient programs designed to fit your lifestyle and needs.", image: img3 },
    { id: "extended-care", title: "Extended Care", content: "Continue your recovery journey with our extended care options.", image: img4 },
    { id: "family-services", title: "Family Services", content: "Support for families to heal and grow together during recovery.", image: img2 },
    { id: "mental-health", title: "Mental Health", content: "Comprehensive mental health care to address emotional and psychological needs.", image: img1 },
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <h1 className="expertise-title">Our Expertise</h1>
        <div className="expertise-content">
          {sections.map((section) => (
            <div key={section.id} className="expertise-card">
              <img src={section.image} alt={section.title} className="focus-card-image" />
              <h2 className="expertise-card-title">{section.title}</h2>
              <p className="expertise-card-content">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

