import React from "react";

import macHeroScreenshotImageSrc from "./hero-screenshot-2.png";

import FeatureWithSteps from "./FeatureWithSteps";

export default function Features() {
  const defaultSteps = [
    {
      heading: "Cadastre-se",
      description: "Crie uma conta usando Google ou Facebook.",
    },
    {
      heading: "Gere o QR code",
      description: "Crie um QR code para sua loja e imprima.",
    },
    {
      heading: "Exiba o QR code",
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
