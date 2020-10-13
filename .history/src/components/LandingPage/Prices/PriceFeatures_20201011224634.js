import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import './styles.css'

export default function PriceFeatures(props) {
  return (
    <div>
      <ul className="price_features">
        <li className="first">
        <span className="left">
            <i className="green">
            <AiFillCheckCircle />
            </i>
          </span>
          <span className="right">
            {props.nfeedbacks ? (<><span className="bold"> {props.nfeedbacks} </span> feedbacks mensais</>) : (<span className="bold">Feedbacks ilimitados</span>)}
          </span>
          
        </li>
        <li>
          <span className="left">
            <i className="green">
            <AiFillCheckCircle />
            </i>
          </span>
          <span className="right">
            {props.nqr ? (<><span className="bold"> {props.nqr} </span> QR code{props.nqr > 1 ? (<>s</>) : (<></>)}</>) : (<span className="bold">QR codes ilimitados</span>)}
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
