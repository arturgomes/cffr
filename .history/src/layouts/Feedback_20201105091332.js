import React, { useEffect, useState } from 'react'
import FeedbackBlock from "../components/FeedbackBlock"

import { useParams } from "react-router";


export default function Feedback() {
  const { fid } = useParams();
  console.log(fid);

  return (
    <FeedbackBlock fid={fid} />

  )
}
