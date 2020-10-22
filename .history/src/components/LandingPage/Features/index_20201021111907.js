import React from "react";

export default function Features() {
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
