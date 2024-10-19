import { Link } from 'react-router-dom'

function LinksSupport() {
  return (
    <div className="flex flex-col gap-3 mt-5">
    <Link to="/" className="text-blue-500 link">
      Can't access your account?
    </Link>
    <Link to="/about" className="text-blue-500 link">
      How do I search for events or activities?
    </Link>
    <Link to="" className="text-blue-500 link">
      How do I create a new event?
    </Link>
  </div>
  )
}

export default LinksSupport