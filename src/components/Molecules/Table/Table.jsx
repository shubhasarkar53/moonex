import React from "react";
import FancyLightText from "../../Atoms/fancyLightText/FancyLightText";
import comparison from "../../../assets/images/compariosns/Comparison.png";
import moonexMain from "../../../assets/images/compariosns/moonexfull.png";
import uniswap from "../../../assets/images/compariosns/uniswap.png";
const Table = () => {
  const data = [
    {
      id: 1,
      point: "Point no one this",
      moonex: true,
      uniswap: false,
    },
    {
      id: 2,
      point: "Point no two this",
      moonex: true,
      uniswap: false,
    },
    {
      id: 3,
      point: "Point no three this",
      moonex: true,
      uniswap: false,
    },
    {
      id: 4,
      point: "Point no four this",
      moonex: true,
      uniswap: false,
    },
    {
      id: 5,
      point: "Point no five this",
      moonex: true,
      uniswap: false,
    },
  ];

  return (
    <div className=" mx-auto p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg">
      <div className="grid grid-cols-3 items-center text-centerpb-3 mb-3">
        <div className="flex justify-center items-center">
          <img src={comparison} alt="img" />
        </div>
        <div className="flex justify-center items-center">
          <img src={moonexMain} alt="img" />
        </div>
        <div className="flex justify-center items-center">
          <img src={uniswap} alt="img" />
        </div>
      </div>

      {data.map((item, index) => (
        <TableRow
          id={item.id}
          text={item.point}
          moonexBool={item.moonex}
          uniswapBool={item.uniswap}
        />
      ))}
    </div>
  );
};

function TableRow({ id, text, moonexBool, uniswapBool }) {
  return (
    <>
      <div className="grid grid-cols-3 items-center text-center  border-[rgba(153,153,153,0.11)] border-t p-6">
        <div className="text-left ">
          <FancyLightText size="sm">
            {id} . {text}
          </FancyLightText>
        </div>
        <div
          className={
            moonexBool
              ? `text-green-400 text-[2rem] `
              : `text-red-400 text-[2rem]`
          }
        >
          {moonexBool ? "✔" : "✘"}
        </div>
        <div
          className={
            uniswapBool
              ? `text-green-400 text-[2rem] `
              : `text-red-400 text-[2rem] `
          }
        >
          {uniswapBool ? "✔" : "✘"}
        </div>
      </div>
    </>
  );
}

export default Table;
