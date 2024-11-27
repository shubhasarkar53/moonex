import React from "react";

function CardIcon({ iconSrc,children }) {
  return (
    <div className="w-20 h-20 overflow-hidden ">
      {/* <img className={"overflow-hidden object-cover w-full"} src={iconSrc} alt="icon" /> */}
      <div className="bg-gray-800 rounded-full w-full h-full flex items-center justify-center">
        {iconSrc ? <img src={iconSrc} alt="icon" /> : <div className="text-white size-14">{ children }</div>}
      </div>
    </div>
  );
}

export default CardIcon;
