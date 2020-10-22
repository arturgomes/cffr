import React from "react";

export default function FeatureWithSteps() {
  return (
    <div>
      <div>
        <div>
          <img
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {/* {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />} */}
        </div>
        <div textOnLeft={textOnLeft}>
          <div>
            <h6>{subheading}</h6>
            <h6>{heading}</h6>
            <ul>
              {steps.map((step, index) => (
                <li key={index}>
                  <div>{(index + 1).toString().padStart(2, "0")}</div>
                  <div>
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
