import React, { useState } from "react";
import FaqQuestion from "../Molecules/FAQ/FaqQuestion";
import Heading from "../Atoms/Heading/Heading2";
import rightGradient from "../../assets/images/hero/rightgr.png";
const faqData = [
  {
    id: 1,
    question: "How do I get a Referral Code?",
    answer:
      "You can generate your referral code by visiting your account settings page.",
  },
  {
    id: 2,
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    id: 3,
    question: "How do I get a Referral Code?",
    answer:
      "You can generate your referral code by visiting your account settings page.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    // Toggle between opening and closing the question
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className=" w-full relative">
        <div className="  bg-[#bbbbbb0a] text-white  rounded-lg max-w-5xl mx-auto mb-32  px-10 py-5 md:px-20 md:py-10">
          <div className="text-center border-b border-gray-600 pb-10 pt-3">
            <Heading textMode="light" variant="h2">
              <span className="text-gold-500">FAQs</span>
            </Heading>
          </div>

          {faqData.map((item, index) => (
            <FaqQuestion
              key={item.id}
              question={item.question}
              des={item.answer}
              isActive={activeIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
        <img
          className="absolute -translate-x-52 top-10 w-[30rem] rotate-180 opacity-25 pointer-events-none "
          src={rightGradient}
          alt="gradient"
        />
      </div>
    </>
  );
}

export default FAQ;
