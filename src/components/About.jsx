import React from 'react';
import '../styles/About.scss';
import service4 from '../assets/service-4.jpeg';
import service5 from '../assets/service-5.jpeg';
import service6 from '../assets/service-6.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';

const About = () => {
  const sections = [
    {
      id: "about-us",
      title: "About Us",
      description:
        "Balasarnya is dedicated to providing exceptional care with a focus on compassion, innovation, and excellence. Our experienced team ensures a holistic approach to healthcare.",
      image: service4, // Replace with your image path
    },
    {
      id: "mission-vision",
      title: "Our Mission and Vision",
      description:
        "Our mission is to revolutionize healthcare by combining advanced technology with patient-focused care. Our vision is to be a global leader in innovative healthcare solutions.",
      image: service5, // Replace with your image path
    },
    {
      id: "history",
      title: "History",
      description:
        "Founded in 1990, Balasarnya has grown from a small clinic to a state-of-the-art healthcare facility, serving thousands of patients with dedication and care.",
      image: service6, // Replace with your image path
    },
    {
      id: "leadership",
      title: "Leadership",
      description:
        "Our leadership team is composed of seasoned professionals with a passion for healthcare innovation and excellence, guiding us toward new milestones.",
      image: img1, // Replace with your image path
    },
    {
      id: "careers",
      title: "Careers at Balasarnya",
      description:
        "Join our dynamic team and contribute to making a difference in people's lives. We offer opportunities for growth, learning, and innovation.",
      image: img2, // Replace with your image path
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="about-cards">
          {sections.map((section) => (
            <div key={section.id} className="about-card">
              <img
                src={section.image}
                alt={section.title}
                className="about-card-image"
              />
              <div className="about-card-content">
                <h2 className="about-card-title">{section.title}</h2>
                <p className="about-card-description">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
