import React from "react";

import macHeroScreenshotImageSrc from "./hero-screenshot-2.png";

import FeatureWithSteps from "./FeatureWithSteps";

export default function Features() {
  const defaultSteps = [
    {
      heading: "Register",
      description: "Create an account with us using Google or Facebook.",
    },
    {
      heading: "Download",
      description:
        "Browse and Download the template that you like from the marketplace.",
    },
    {
      heading: "Run",
      description:
        "Follow the instructions to setup and customize the template to your needs.",
    },
  ];
  return (
    <FeatureWithSteps
      subheading={<span>STEPS</span>}
      heading={
        <>
          Fácil de <span>Começar.</span>
        </>
      }
      steps={defaultSteps}
      textOnLeft={false}
      imageSrc={macHeroScreenshotImageSrc}
      imageDecoratorBlob={true}
    />
  );
}
