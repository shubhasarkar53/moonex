import React from "react";

function Heading({ children, variant = "h2", textMode = "dark", className = "" }) {
  const baseStyles = "font-Neue font-ultrabold";
  const textModeStyles = {
    dark: "text-black",
    light: "text-white",
  };
  const variantStyles = {
    h1: "text-7xl",
    h2: "text-5xl",
  };

  return (
    <h1
      className={`${baseStyles} ${variantStyles[variant]} ${textModeStyles[textMode]} ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
