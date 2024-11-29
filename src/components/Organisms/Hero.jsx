import React from "react";
import Navbar from "../Molecules/Navbar/Navbar";
import Container from "../LayoutHelper/Container";
import HeroContent from "../Molecules/Navbar/HeroContent/HeroContent";
import bgCircle from "../../assets/images/hero/circles.png";
import moon from "../../assets/images/hero/moon.png";
import star from "../../assets/images/hero/star.png";
import star2 from "../../assets/images/hero/star2.png";
import gradient from "../../assets/images/hero/gr.png";
import rightGradient from "../../assets/images/hero/rightgr.png";
import { Glow, GlowCapture } from "@codaworks/react-glow";
function Hero() {
  return (

        <div
          className={` w-full bg-cover  mb-16 glow:bg-gold-400/10`}
          style={{ backgroundImage: `url(${bgCircle})` }}
        >
          <Container>
            {/* extra div for setting up the absolute images */}

            <div className=" relative w-full  ">
              <Navbar
                menuItems={[
                  "Home",
                  "About Us",
                  "RoadMap",
                  "FAQS",
                  "Contact Us",
                ]}
              />
              <div className="pt-72 ">
                <HeroContent
                  headingText="Trusted Multi-Chain Dex Platform"
                  subtitle="Trade, earn, and own crypto on the all-in-one multi-chain DEX"
                  buttons={[
                    { text: "Connect Wallet", variant: "filled" },
                    { text: "Trade Crypto", variant: "outlined" },
                  ]}
                />
              </div>

              {/* moon images as a child */}
              <div className="absolute w-48 aspect-square bg-gradient-to-br from-[#ffefb9] to-gold-500 rounded-full left-[65%] top-[30%] translate-x-[-50%] translate-y-[-50%] "></div>

              <img
                className="absolute hidden lg:block lg:right-36 bottom-0 transform -translate-y-1/2 pointer-events-none  "
                src={star}
                alt="star"
              />

              <img
                className="  absolute top-[30%] sm:top-[35%] sm:left-48 bottom-0 transform  pointer-events-none "
                src={star}
                alt="star"
              />

              <img
                className="absolute right-48 top-32 transform -translate-y-1/2  pointer-events-none "
                src={star2}
                alt="star2"
              />
            </div>

            {/* Absolute Images */}

            <img
              className="absolute top-0 left-0  pointer-events-none "
              src={gradient}
              alt="gradient"
            />
            <img
              className="absolute top-[5%] right-0 opacity-25 select-none  pointer-events-none "
              src={rightGradient}
              alt="gradient"
            />
          </Container>
        </div>
 
  );
}

export default Hero;
