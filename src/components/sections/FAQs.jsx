// chinmayi
//import the FAQ dropdown and add the question and answers! 
//import button and redirect it to social media page of gdg for now

import SectionTitle from "@/components/global/SectionTitle";
import FAQItem from "@/components/elements/FAQItem";

const FAQs = () => {
  const faqs = [
    { question: "Is this hackathon online?", answer: "Nope! It’s fully offline at our campus." },
    { question: "Can I participate solo?", answer: "No! You can only work in a team." },
    { question: "What should I bring?", answer: "Laptop, charger, ID, and your A-game." },
    { question: "Is there a team size limit?", answer: "Yes, each team must have 3-4 members." },
    
  ];

  return (
    <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="faqs">
      <SectionTitle title="FAQs" subtitle="Got questions? We've got answers." />
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;

