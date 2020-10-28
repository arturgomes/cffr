import React from 'react'

export default function ListFeedback() {
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
