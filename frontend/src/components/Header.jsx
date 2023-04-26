import { Link, useNavigate } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <ul>
        <li>
          <Link to='/'>Info</Link>
        </li>
        <li>
          <Link to='/idea'>Kom med din idé</Link>
        </li>
        <li>
          <Link to='/suggestions'>Forslag</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
