import React, {useState} from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./styles.css";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);


  const toddleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" data-testid={`faq-item-${index}`}  key={index}>
          <button data-testid={`faq-question-${index}`}  onClick={() => toddleFAQ(index)} className="faq-question">
            <span >{faq.question}</span>
            {activeIndex === index? <span
              data-testid={`icon-up-${index}`}
             
              className="faq-icon">
              <FiChevronUp />
            </span> :
            <span
              data-testid={`icon-down-${index}`}
              className="faq-icon">
              <FiChevronDown />
            </span>}
          </button>
          {activeIndex === index && <p data-testid={`faq-answer-${index}`}>
            {faq.answer}
          </p>}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
