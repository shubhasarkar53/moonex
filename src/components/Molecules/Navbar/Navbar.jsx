import React, { useState } from "react";
import moonexLogo from "../../../assets/images/logo/moonex.png";
import moon from "../../../assets/images/logo/moon.png";
import NavItem from "../../Atoms/NavItem/NavItem";
import Button from "../../Atoms/Button/Button";
import { FooterIcon } from "../Footer/Contact";
import Menue from "../../Atoms/Icons/Menue";
import Close from "../../Atoms/Icons/Close";






function Navbar({ menuItems = ["Home"], btnText = "Connect Wallet" }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className=" w-full flex gap-2 items-center justify-between">
      {/* logo */}
      <Logo />
      {/* items */}
      <div className=" hidden w-[664px] max-w-[664px] md:flex  items-center justify-between">
        {menuItems.map((item, index) => {
          return <NavItem key={index}>{item}</NavItem>;
        })}
      </div>
      {/* mobile */}
     
      <button className=" md:hidden " onClick={toggleMobileMenu}>
        <FooterIcon
          icon={isMobileMenuOpen ? <Close className="text-gold-400" /> : <Menue className="text-gold-400" />}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-[#0B132A] text-white flex flex-col items-center space-y-4 py-8 transition-transform transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden z-40`}
      >
        {menuItems.map((item, index) => (
          <NavItem key={index}>{item}</NavItem>
        ))}
        <Button>{btnText}</Button>
      </div>
     
      {/* btn */}
      <div className="hidden md:flex">
      <Button>{btnText}</Button>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <>
      <div className=" flex gap-2 items-center justify-between">
        <div>
          <img src={moon} alt="" />
        </div>
        <div>
          <img src={moonexLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
