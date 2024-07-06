import React from "react";

const Button = ({ px, py, color, content, font, weight, size }) => {
  return (
    <button
      className={`px-${px} py-${py} bg-${color} font-${font} font-${weight} text-${size}`}
    >
      {content}
    </button>
  );
};

export default Button;
