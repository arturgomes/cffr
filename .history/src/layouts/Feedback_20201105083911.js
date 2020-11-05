import React, { useEffect, useState } from 'react'
import FeedbackBlock from "../components/FeedbackBlock"

import { useParams } from "react-router";


export default function Feedback() {
  const [fid, setfid] = useState(null)
  useEffect(() => {
    let { id } = useParams();
    return id;
  }, [input])

  return (
    <FeedbackBlock fid={feedId()} />

  )
}
