import React, { useEffect, useState } from 'react'
import FeedbackBlock from "../components/FeedbackBlock/Feed.js"

import { useParams } from "react-router";
import api from '../services/api';


export default function Feedback() {
  const { id } = useParams();


  return (
    <FeedbackBlock fid={id} />

  )
}
