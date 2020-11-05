import React from 'react'
import FeedbackBlock from "../components/FeedbackBlock"

import { useParams } from "react-router";


export default function Feedback() {
  function feedId() {
    let { id } = useParams();
    return id;
  }

  return (
    <FeedbackBlock fid={feedId()} />

  )
}
