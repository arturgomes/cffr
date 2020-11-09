import React from 'react'
import FeedbackBlock from "../components/FeedbackBlock/"

import { useParams } from "react-router";
// import api from '../services/api';


export default function Feedback() {
  const { id } = useParams();


  return (
    <FeedbackBlock fid={id} />

  )
}
