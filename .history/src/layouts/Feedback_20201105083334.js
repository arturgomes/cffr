import React from 'react'
import FeedbackBlock from "../components/FeedbackBlock"

import { useParams } from "react-router";
function feedId() {
  let { id } = useParams();
  return id;
}

export default function Feedback() {
  return (
    <FeedbackBlock fid={feedId()} />

  )
}
