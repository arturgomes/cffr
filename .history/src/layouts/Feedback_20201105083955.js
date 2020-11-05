import React, { useEffect, useState } from 'react'
import FeedbackBlock from "../components/FeedbackBlock"

import { useParams } from "react-router";


export default function Feedback() {
  const { fid } = useParams();

  return (
    <FeedbackBlock fid={fid} />

  )
}
