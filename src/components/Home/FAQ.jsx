"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Who can participate in Acharya Habba 2026?",
    answer:
      "Quillorria is a premium personal care brand offering skincare, haircare, and combo packages to elevate your daily rituals.",
  },
  {
    question: "How do I register for events?",
    answer:
      "Delivery usually takes 3-7 business days depending on your location.",
  },
  {
    question: "Is there a registration fee for participation?",
    answer:
      "Yes, we offer returns within 15 days of purchase. Conditions apply as per our return policy.",
  },
  {
    question: "Will participants receive certificates?",
    answer: "Currently, we only ship within India.",
  },
  {
    question: "Where can I find the event schedule and timings?",
    answer: "Currently, we only ship within India.",
  },
  {
    question: "Are on-spot registrations allowed?",
    answer: "Currently, we only ship within India.",
  },
  {
    question: "Whom should I contact for queries or support?",
    answer: "Currently, we only ship within India.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 flex px-4 justify-center items-center">
      <div className="w-full max-w-5xl ">

        {/* Glass Container */}
        <div className="space-y-4 bg-white/15 backdrop-blur-3xl rounded-3xl p-4 md:p-16  shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-white/20 backdrop-blur-xl border border-white/10 shadow-md hover:shadow-lg transition-all"
              >
                {/* Question Tab */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 h-full text-left focus:outline-none text-gray-50 font-semibold hover:bg-white/30 transition-all rounded-t-2xl"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span className="text-xl">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 overflow-hidden transition-all bg-black/15 duration-300  ${
                    isOpen ? "max-h-96 h-full py-5" : "h-full max-h-0 "
                  }`}
                >
                  <p className="text-gray-200">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
