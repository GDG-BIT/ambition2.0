//anu
//just make a div wiith shadow and round of 8 or more (see the design)
//import this in each section 
//for everyone: when using in section just add the src from the assets folder!

const positionClasses = {
    "top-left": "absolute top-0 left-0",
    "top-right": "absolute top-0 right-0",
    "bottom-left": "absolute bottom-0 left-0",
    "bottom-right": "absolute bottom-0 right-0",
  };
  
  const StyleElement = ({ src, alt = "", position = "top-left", className = "" }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={`${positionClasses[position]} ${className} pointer-events-none select-none`}
      />
    );
  };
  
  export default StyleElement;

