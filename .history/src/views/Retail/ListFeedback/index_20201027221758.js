import React, {useState,useEffect} from 'react'

export default function ListFeedback() {
  const [detrator,setDetrator] = useState(false)
  const [neutro,setNeutro] = useState(false)
  const [promotor,setPromotor] = useState(false)

  useEffect(()=>{
    
  },[])

  function checkDetrator(){
    setDetrator(!detrator)
  }
  function checkNeutro(){
    setNeutro(!detrator)
  }
  function checkPromotor(){
    setPromotor(!detrator)
  }

  return (
    <div>
      <div className="query">
        <input type="checkbox" value={detrator} onChange={()=>checkDetrator()}/>
        <input type="checkbox" value={neutro} onChange={()=>checkNeutro()}/>
        <input type="checkbox" value={promotor} onChange={()=>checkPromotor()}/>
      </div>
      <div className="table">

      </div>
    </div>
  )
}
