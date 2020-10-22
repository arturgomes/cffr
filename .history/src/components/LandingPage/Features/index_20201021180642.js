import React from "react";

import macHeroScreenshotImageSrc from "./hero-screenshot-2.png";

import FeatureWithSteps from "./FeatureWithSteps";

export default function Features() {
  return (
    <FeatureWithSteps
      subheading={<span>STEPS</span>}
      heading={
        <>
          Fácil de <span>Começar.</span>
        </>
      }
      steps={[]}
      textOnLeft={false}
      imageSrc={macHeroScreenshotImageSrc}
      imageDecoratorBlob={true}
    />
  );
}
