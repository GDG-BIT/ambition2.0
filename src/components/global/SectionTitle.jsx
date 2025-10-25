//sana
//this is just for the section title tag since all are same type only!
//for you: add the colors to in figma!
//add the shadow!
//for everyone: to change in each section just the section color same as done in button! instead of color change it to acc to design!

const SectionTitle = ({ title, subtitle, align = "center", color = "default" }) => {
  const alignment = align === "left" ? "text-left" : "text-center";

  const titleColors = {
    default: "text-black dark:text-white",
    red: "text-red-500 dark:text-red-400",
    blue: "text-blue-500 dark:text-blue-400",
    yellow: "text-yellow-500 dark:text-yellow-400",
    green: "text-green-500 dark:text-green-400",
    // Add more as needed based on design
  };

  return (
    <div className={`mb-10 ${alignment}`}>
      <h2 className={`text-3xl font-bold mb-2 ${titleColors[color]} transition-colors duration-300`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
