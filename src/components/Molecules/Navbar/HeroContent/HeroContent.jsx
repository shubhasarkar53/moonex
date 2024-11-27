import React from 'react'
import Heading from '../../../Atoms/Heading/Heading2'
import FancyLightText from '../../../Atoms/fancyLightText/FancyLightText'
import Button from '../../../Atoms/Button/Button'

function HeroContent({
    headingText = "Default Heading",
    subtitle = "Default Subtitle",
    buttons = [], 
  }) {
    return (
      <div className="  w-[100%] md:w-[960px]  md:h-[277px] mb-10 ">
         <Heading variant="h1" textMode="light" className="hidden lg:block">
          {headingText}
        </Heading>
        <Heading variant="h2" textMode="light" className="block lg:hidden">
          {headingText}
        </Heading>
        <div className='mt-4'>
        <FancyLightText>{subtitle}</FancyLightText>

        </div>
        <div className=" flex gap-4 mt-8">
          {buttons.map(({ text, variant, size, onClick }, index) => (
            <Button
              key={index} 
              variant={variant}
              size={size}
              onClick={onClick}
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
    );
  }
export default HeroContent