import React from 'react';
import '../styles/Admission.scss';
import service5 from '../assets/service-5.jpeg';
import service6 from '../assets/service-6.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

const Admission = () => {
  const sections = [
    {
      id: "inquiry",
      title: "Admission Inquiry",
      content:
        "Find all the details to inquire about admissions, including contact numbers, email, and the process of getting started.",
        image: service5,
    },
    {
      id: "payments-insurance",
      title: "Payments & Insurance",
      content:
        "Learn about accepted insurance plans, payment methods, and our financial assistance programs.",
        image: service6,
    },
    {
      id: "faqs",
      title: "Frequently Asked Questions",
      content:
        "Have questions? Explore answers to the most common queries about our admission process, policies, and more.",
        image: img1,
    },
    {
      id: "what-to-bring",
      title: "What to Bring",
      content:
        "Prepare for your visit by knowing what essentials to bring, including documentation, personal items, and more.",
        image: img2,
    },
    {
      id: "transportation",
      title: "Transportation",
      content:
        "Discover convenient transportation options, parking information, and accessibility support.",
        image: img3,
    },
    {
      id: "referring-professionals",
      title: "For Referring Professionals",
      content:
        "Guidelines for medical professionals looking to refer patients to our facility, including forms and contact details.",
        image: service5,
    },
  ];

  return (
    <section className="admission-section">
      <div className="admission-container">
        <h1 className="admission-title">Admission Information</h1>
        <div className="admission-content">
          {sections.map((section) => (
            <div key={section.id} className="admission-card">
              <img src={section.image} alt={section.title} className="focus-card-image" />
              <h2 className="admission-card-title">{section.title}</h2>
              <p className="admission-card-content">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admission;
