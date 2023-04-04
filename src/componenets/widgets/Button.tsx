import React, { FC } from "react";

const Button: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-teal-500 text-white rounded-2xl px-3 py-2 cursor-pointer">
      {children}
    </div>
  );
};

export default Button;
