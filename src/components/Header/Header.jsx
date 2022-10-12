import React from 'react';
import {NAV} from '../../data';
import './Header.scss';
import cn from 'classnames';
import {useNavigate, NavLink, useLocation} from 'react-router-dom'

function Header() {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <header className='header'>
        <div className='header__container _container'>
            <div className='logo' onClick={() => nav('/')}>
                <span className='logo__nb'>NB</span> new basketball
            </div>
            <nav className='nav'>
                {NAV.map(link => (
                  <NavLink className={cn("nav__link" , {
                    active: location.pathname === link.href
                  })} key= {link.id} to={link.href}>{link.name}</NavLink>
                ))}
            </nav>
        </div>
      </header>
  )
}

export default Header