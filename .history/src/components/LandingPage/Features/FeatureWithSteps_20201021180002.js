import React from "react";
import "./styles.css";
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
    <div className="container">
      <div className="two_col">
        <div className="img_col">
          <img
            className="l_image"
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {/* {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />} */}
        </div>
        <div className="text_col" textOnLeft={textOnLeft}>
          <div className="text_content">
            <h6>{subheading}</h6>
            <h4>{heading}</h4>
            <ul className="steps">
              {steps.map((step, index) => (
                <li className="step" key={index}>
                  <div className="step_number">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="step_text">
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
