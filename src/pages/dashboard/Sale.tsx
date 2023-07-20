import { useParams } from 'react-router-dom'
const Sale = () => {
  const { id } = useParams()

  return <div> Sale id: {id}</div>
}

export default Sale
