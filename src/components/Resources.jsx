import React from 'react';
import '../styles/Resources.scss';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

const Resources = () => {
  const sections = [
    {
      id: "resources",
      title: "Resources",
      description:
        "Explore our comprehensive resources, including guides, articles, and helpful tools to support your journey.",
      image: img1, // Replace with your image path
    },
    {
      id: "events",
      title: "Events",
      description:
        "Stay updated with upcoming events, workshops, and seminars that enhance your learning and growth.",
      image: img2, // Replace with your image path
    },
    {
      id: "research",
      title: "Research",
      description:
        "Discover cutting-edge research conducted by our experts to innovate and revolutionize healthcare practices.",
      image: img3, // Replace with your image path
    },
    {
      id: "research-outcomes",
      title: "Research Outcomes",
      description:
        "Dive into the impactful outcomes of our research and their contributions to the field.",
      image: img4, // Replace with your image path
    },
    {
      id: "blog",
      title: "Blog",
      description:
        "Read our blog for insights, tips, and expert opinions on various topics related to health and wellness.",
      image: img2, // Replace with your image path
    },
    {
      id: "news",
      title: "News",
      description:
        "Catch the latest news and updates from Balasarnya, including announcements and success stories.",
      image: img1, // Replace with your image path
    },
  ];

  return (
    <section className="resources-section">
      <div className="resources-container">
        <h1 className="resources-title">Our Resources</h1>
        <div className="resources-cards">
          {sections.map((section) => (
            <div key={section.id} className="resources-card">
              <img
                src={section.image}
                alt={section.title}
                className="resources-card-image"
              />
              <div className="resources-card-content">
                <h2 className="resources-card-title">{section.title}</h2>
                <p className="resources-card-description">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;