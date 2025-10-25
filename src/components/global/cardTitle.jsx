//ananya
//just check how the section title is written! 
//style the div accordingly using tailwind css according to figma design
//just have to round the div and have to add color and shadow! 
// CardTitle.jsx
// CardTitle.jsx
import React from "react";

const CardTitle = ({ title }) => {
  return (
    <div className="px-6 py-2 bg-[#fdf2f8] rounded-xl shadow-md text-black text-base font-semibold tracking-wide">
      <h3 className="text-center">{title}</h3>
    </div>
  );
};

export default CardTitle;

