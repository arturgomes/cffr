import React, { useEffect, useState } from 'react'
import FeedbackBlock from "../components/FeedbackBlock"

import { useParams } from "react-router";
import api from '../services/api';


export default function Feedback() {
  const { id } = useParams();
  const [request, setRequest] = useState(null)


  return (
    <FeedbackBlock data={request} fid={id} />

  )
}
