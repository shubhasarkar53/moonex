import React from "react";

import Doller from "../Atoms/Icons/Doller";
import Card from "../Molecules/Card/Card";
import Shild from "../Atoms/Icons/Shild";
import NoCall from "../Atoms/Icons/NoCall";
import Setting from "../Atoms/Icons/Setting";
import Heading from "../Atoms/Heading/Heading2";

const data = [
  {
    id: 1,
    icon: <Doller />,
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    id: 2,
    icon: <Shild />,
    title: "Fast Transactions",
    description: "Experience lightning-fast transactions without any delays.",
  },
  {
    id: 3,
    icon: <NoCall />,
    title: "Secure Platform",
    description:
      "Your digital assets are safe with our top-notch security measures.",
  },
  {
    id: 4,
    icon: <Setting />,
    title: "Custom Settings",
    description:
      "Configure your transactions with advanced customization options.",
  },
];

function Features() {
  return (
    <>
      <div className="w-full flex justify-center items-center my-7 ">
        <Heading textMode="light" variant="h2">
          Our <span className="text-gold-500">Features</span>
        </Heading>
      </div>

      <div className="flex justify-center md:justify-between items-center gap-6 flex-wrap">
        {data.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            des={item.description}
          />
        ))}
      </div>
      <div className="mb-48"></div>
    </>
  );
}

export default Features;
