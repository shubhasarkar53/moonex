import React from "react";

function CardTitle({ children, size = "md" }) {
  const baseStyles = "font-Raleway font-semibold text-gray-300";

  const sizeStyles = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };
  return <h3 className={`${baseStyles} ${sizeStyles[size]}`}>{children}</h3>;
}

export default CardTitle;
