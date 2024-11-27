import React, { useState } from "react";
import FaqTitle from "../../Atoms/FAQ/FaqTitle";
import FaqDes from "../../Atoms/FAQ/FaqDes";
import FaqIcon from "../../Atoms/FAQ/FaqIcon";
import Plus from "../../Atoms/Icons/Plus";
import Down from "../../Atoms/Icons/Down"

function FaqQuestion({ question, des, isActive, onToggle }) {
  return (
    <div className="w-[100%] border-b border-gray-600 pb-3 pt-3">
      <div className="flex justify-between items-center">
        {/* Question Title */}
        <FaqTitle question={question} />

        {/* Toggle Icon */}
        <div onClick={onToggle} className="cursor-pointer">
          <FaqIcon icon={isActive ? <Down /> : <Plus />} />
        </div>
      </div>

      {/* Conditional Rendering for Description */}
      {isActive && (
        <div className="mt-3">
          <FaqDes des={des} />
        </div>
      )}
    </div>
  );
}

export default FaqQuestion;
