import React from "react";
import tw from "twin.macro";

import heroScreenshotImageSrc from "./hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "./hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "./prototype-illustration.svg";

import FeatureWithSteps from "./TwoColWithSteps";

export default function Features() {
  return (
    <FeatureWithSteps
      subheading={<span>STEPS</span>}
      heading={
        <>
          Easy to <span>Get Started.</span>
        </>
      }
      textOnLeft={false}
      imageSrc={macHeroScreenshotImageSrc}
      imageDecoratorBlob={true}
      decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
    />
  );
}
