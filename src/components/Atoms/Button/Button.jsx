import React from "react";

function Button({ children, variant = "filled", size ="md", onClick }) {
  const baseStyles =
    "font-Raleway font-extrabold px-5 py-3 rounded-full hover:scale-95 transition-all duration-200 ease-in-out";
  const variantStyles = {
    filled: "bg-gradient-to-l from-gold-300 to-gold-500",
    outlined: "border-2 border-gold-500 text-gold-500",
  };
  const sizeStyles = {
    sm: "text-sm px-3 py-2",
    md: "text-md px-5 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
