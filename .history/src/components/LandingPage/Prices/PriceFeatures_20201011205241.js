import React from 'react'
import './styles.css'

export default function PriceFeatures(props) {
  return (
    <div>
      <ul className="price_features">
        <li className="first">
          <span className="left">
            {props.nfeedbacks ? (<span className="bold">{props.nfeedbacks}</span> feedbacks mensais) : (<span className="bold">Feedbacks ilimitados</span>)}
            </span>
          <span className="right">
            <AiFillCheckCircle />
          </span>
        </li>
        <li>
          <span className="left">
            <span className="bold">Montly</span> Documents</span>
          <span className="right">
            <i className="icon icon-remove red">
            </i>
          </span>
        </li>
        <li>
          <span className="left">
            <span className="bold">Unlimited</span> Domains</span>
          <span className="right">
            <AiFillCheckCircle />
          </span>
        </li>
        <li>
          <span className="left">
            <span className="bold">Custom</span> Hosting</span>
          <span className="right">
            <i className="icon icon-remove red">
            </i>
          </span>
        </li>
        <li className="last">
          <span className="left">
            <span className="bold">24/7</span> Support</span>
          <span className="right">
            <AiFillCheckCircle />
          </span>
        </li>
      </ul>

    </div>
  )
}
