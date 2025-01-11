import React, { useState } from "react";
import "../styles/FAQs.scss";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does your hospital provide?",
      answer:
        "We offer a wide range of services including emergency care, outpatient treatments, specialized surgeries, and health checkups.",
    },
    {
      question: "Do you offer 24/7 emergency support?",
      answer: "Yes, our emergency department operates 24/7 with expert medical staff.",
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment via our website, mobile app, or by calling our helpdesk.",
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes, we accept most major health insurance plans. Please contact us for more details.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
