import SectionTitle from "@/components/global/SectionTitle";
import StepItem from "@/components/elements/StepItem";

const HowToParticipate = () => {
  const steps = [
    { 
      number: 1, 
      title: "Form a Team", 
      description: "You can participate solo or form a team of up to 4 members. Mix different skills - developers, designers, and innovators work best together!" 
    },
    { 
      number: 2, 
      title: "Choose a Track", 
      description: "Pick from Web3, AI/ML, Open Innovation, or IoT. Choose the category that aligns with your passion and expertise." 
    },
    { 
      number: 3, 
      title: "Register Online", 
      description: "Fill out the registration form with your team details before the deadline. Make sure all team members are registered." 
    },
    { 
      number: 4, 
      title: "Build & Present", 
      description: "Develop your solution during the hackathon timeframe, then present your innovative idea to our panel of expert judges." 
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800" id="participate">
      <SectionTitle title="How to Participate?" subtitle="Easy as pie 🥧" />
      <div className="max-w-4xl mx-auto space-y-6">
        {steps.map((step) => (
          <StepItem key={step.number} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowToParticipate;

