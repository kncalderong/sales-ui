import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <img src={''} alt='not found' />
      <h3>Ohh! page not found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to='/'>back home</Link>
    </div>
  )
}

export default Error
