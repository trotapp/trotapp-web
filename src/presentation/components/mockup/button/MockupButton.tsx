import React from "react";
import { MockupButtonProps } from "..";

const MockupButton: React.FC<MockupButtonProps> = ({
  id,
  Svg,
  text,
  description,
}) => {
  return (
    <button
      key={id}
      className="group bg-black hover:bg-gray-800 text-white font-sans p-2 md:px-4 rounded-lg transition-all duration-300 ease-in-out overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap items-center justify-center space-x-2 mb-0.5">
          <Svg />
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-normal leading-tight">
              {text}
            </span>
            <span className="text-[18px] font-semibold leading-tight transition-all duration-300">
              {description}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MockupButton;
