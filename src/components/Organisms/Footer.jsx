import React from "react";
import FooterLogo from "../Molecules/Footer/FooterLogo";
import Contact from "../Molecules/Footer/Contact";
import NavItem from "../Atoms/NavItem/NavItem";

function Footer() {
  return (
    <footer className=" flex flex-col gap-16 md:flex-row bg-[#0B132A] text-white py-8 w-full justify-between items-center ">
      <div className="w-[50%] ">
        <FooterLogo />
      </div>

      <div className=" w-full items-center  flex-col gap-4 flex lg:w-[70%] lg:justify-between lg:flex-row">
        {["About Us", "RoadMap", "FAQS", "Contact Us"].map(
          (item, index) => {
            return <NavItem key={index}>{item}</NavItem>;
          }
        )}
      </div>

      <Contact />
    </footer>
  );
}

export default Footer;
