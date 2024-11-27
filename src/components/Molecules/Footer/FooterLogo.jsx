import React from "react";
import footerLogo from "../../../assets/images/logo/footerLogo.png";
function FooterLogo() {
  return (
    <div className="w-full h-full overflow-hidden  md:min-w-[200px] md:min-h-[200px]">
      <div className="w-full h-full object-cover object-center flex justify-center items-center">
      <img src={footerLogo} alt="logo" />
      </div>
    </div>
  );
}

export default FooterLogo;
