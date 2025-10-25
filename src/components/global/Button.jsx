 //sinchana 
//for everyone: when importing this button use the vvarient accordingly! rest of the style is same only
//ex: <Button variant="neon">amBITion</Button>
// <Button variant="primary">Register</Button>

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyle =
      "px-6 py-2 rounded-full text-white font-semibold transition-all duration-300";
    const variants = {
      primary: "bg-black hover:bg-gray-800",
      secondary: "bg-white text-black border border-black hover:bg-gray-100",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  };
  
  export default Button;
  
2
