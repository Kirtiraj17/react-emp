import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <h1><Link to='/'>Employee</Link></h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/register'>Register User</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header;
