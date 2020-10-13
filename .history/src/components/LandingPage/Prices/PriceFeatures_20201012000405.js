import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import './styles.css'



function CheckCircle() {
  return (
    <>
     <span className="left">
          <i className="green">
              <AiFillCheckCircle />
            </i>
          </span>
    </>
  );
}

export default function PriceFeatures(props) {
  return (
    <div>
      <ul className="price_features">
        <li className="first">
          <CheckCircle/>
          <span className="right">
            {props.nfeedbacks ? (<><span className="bold"> {props.nfeedbacks} </span> feedbacks mensais</>) : (<span className="bold">Feedbacks ilimitados</span>)}
          </span>

        </li>
        <li>
        <CheckCircle/>
          <span className="right">
            {props.nqr ? (<><span className="bold"> {props.nqr} </span> QR code{props.nqr > 1 ? (<>s</>) : (<></>)}</>) : (<span className="bold">QR codes ilimitados</span>)}
          </span>
        </li>
        <li>
        <CheckCircle/>
          <span className="right">
            Contato com o cliente</span>
        </li>
        <li>
        <CheckCircle/>
          <span className="right">
            Programa de Fidelidade</span>
        </li>

        <li>
        <CheckCircle/>
          <span className="right">
            Personalize o questionário</span>
        </li>
        <li>
        <CheckCircle/>
          <span className="right">
            <span className="bold">Custom</span> Hosting
          </span>
        </li>
        <li className="last">
        <CheckCircle/>
          <span className="right">
            <span className="bold">24/7</span> Support</span>

        </li>
      </ul>

    </div>
  )
}
