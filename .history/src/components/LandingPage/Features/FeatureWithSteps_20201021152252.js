import React from "react";

export default function FeatureWithSteps(props) {
  const {
    imageSrc,
    imageBorder,
    imageShadow,
    imageRounded,
    textOnLeft,
    subheading,
    heading,
    steps,
  } = props;
  return (
    <div className="">
      <div className="">
        <div className="">
          <img
            className=""
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {/* {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />} */}
        </div>
        <div className="" textOnLeft={textOnLeft}>
          <div className="">
            <h6>{subheading}</h6>
            <h6>{heading}</h6>
            <ul>
              {steps.map((step, index) => (
                <li key={index}>
                  <div className="">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="">
                    <h6>{step.heading}</h6>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
