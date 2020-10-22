import React from "react";
import tw from "twin.macro";

import FeatureWithSteps from "./TwoColWithSteps";

export default function Features() {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <FeatureWithSteps
      subheading={<Subheading>STEPS</Subheading>}
      heading={
        <>
          Easy to <HighlightedText>Get Started.</HighlightedText>
        </>
      }
      textOnLeft={false}
      imageSrc={macHeroScreenshotImageSrc}
      imageDecoratorBlob={true}
      decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
    />
  );
}
