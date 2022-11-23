import React from 'react'
import {Link} from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <div className='nav'> 
        <div className="navContainer">
            <div className="navItem">
                <ul className='navUl'>
                <li className='navLi'><Link to='/'>Home</Link></li>
                <li className='navLi'><Link to='/polling/detail/new'>UnitDetails</Link></li>
                <li className='navLi'><Link to='/polling/unit/new'>PollingUnit</Link></li>
                <li className='navLi'><Link to='/ward/new'>Ward</Link></li>
                <li className='navLi'><Link to='/lga/new'>LGA</Link></li>
                <li className='navLi'><Link to='/user/new'>User</Link></li>
                <li className='navLi'><Link to='/state/new'>State</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav