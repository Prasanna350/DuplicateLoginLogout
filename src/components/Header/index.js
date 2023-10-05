// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="header-container">
    <li className="header-list-item">
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
