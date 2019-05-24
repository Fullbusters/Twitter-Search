import React from 'react';
import { Link } from 'react-router-dom'


class Header extends React.Component {
  
  render() {
    return (
      <div>
        <header >
          <h1>Twitter Search</h1>
          <ul>
            <li><Link to='/'>Search</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;