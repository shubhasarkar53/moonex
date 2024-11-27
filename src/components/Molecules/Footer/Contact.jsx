import React from "react";
import Heading from "../../Atoms/Heading/Heading2";
import Tweet from "../../Atoms/Icons/Tweet";
import Reddit from "../../Atoms/Icons/Reddit";
import Telegram from "../../Atoms/Icons/Telegram";

const iconsData = [
  {
    id: 1,
    icon:  <Telegram />,
  },
  {
    id: 2,
    icon: <Reddit />,
  },
  {
    id: 3,
    icon: <Tweet />,
  },
];

export function FooterIcon({ icon }) {
  return (
    <div className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] overflow-hidden">
      <div className="object-cover w-full h-full">{icon}</div>
    </div>
  );
}

function Contact() {
  return (
    <div className="w-[60%] md:w-[40%]">
      <div className="text-center mb-10">
        <Heading variant="h2" textMode="light">
          Contact <span className="text-gold-500">Us</span>
        </Heading>
      </div>

      <div className="flex text-white justify-center items-center gap-10">
        {iconsData.map((item) => (
          <div key={item.id}>
            <FooterIcon icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
