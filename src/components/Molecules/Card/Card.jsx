import React from "react";
import CardIcon from "../../Atoms/Cards/CardIcon";
import CardTitle from "../../Atoms/Cards/CardTitle";
import CardDes from "../../Atoms/Cards/CardDes";
import Doller from "../../Atoms/Icons/Doller";

const Card = ({icon,title,des}) => {
  return (
    <div className="border-[rgba(255,255,255,0.08)] border bg-gray-900 text-white py-10 px-9 pr-14 rounded-2xl shadow-lg min-w-[296px] w-[300px]  duration-200  transition-all ease-in  cursor-pointer hover:scale-105 ">
      <div className="pb-6">
        <CardIcon>
          {icon}
        </CardIcon>
      </div>

      <CardTitle size="lg">{title}</CardTitle>

      <CardDes>
        {des}
      </CardDes>

    </div>
  );
};

export default Card;
