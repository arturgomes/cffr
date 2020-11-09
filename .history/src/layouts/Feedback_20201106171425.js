import React from 'react'
import FeedbackBlock from "../components/FeedbackBlock"

import { useParams } from "react-router";


export default function Feedback() {
  const { id } = useParams();
  const [request, setrequest] = useState(null)

  useEffect(() => {
    const initialState = async () => {
      const response = await api.post(`/feed/${id}/f`)
      setRequest(response.data)
    }
    initialState();
  }, [])

  return (
    <FeedbackBlock fid={id} />

  )
}