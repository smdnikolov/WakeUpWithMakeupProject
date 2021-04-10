import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../utils/1j+ojFVDOMkX9Wytexe43D6kifCCrhBGkBbNwXs1M3EMoAJtliAvhPds9vk5.png';
import call from '../../utils/call.png';
import messenger from '../../utils/messenger.png';

function Header() {
  return (
    <div className='header'>
      <Link className='navbar-brand' to='/'>
        <img className='logo' src={logo} width='90%' alt='' />
      </Link>
      <nav>
        <div className='call'>
          <a href='tel:+359879997600'>
            <img src={call} width='30px' alt='' />
          </a>
        </div>
        <div className='messenger'>
          <a href='https://www.messenger.com/t/100000208277245'>
            <img src={messenger} width='30px' alt='' />
          </a>
        </div>
      </nav>
      <nav className='navbar navbar-expand-md  navbar-dark'>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='collapsibleNavbar'
          data-toggle='hide'
          data-target='#collapsibleNavbar'>
          <hr className='navbar-hr' />
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/услуги'>
                Услуги
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/цени'>
                Цени
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/галерия'>
                Галерия
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/чзв'>
                ЧЗВ
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/контакти'>
                Контакти
              </Link>
            </li>
          </ul>
          <hr className='navbar-hr' />
        </div>
      </nav>
    </div>
  );
}

export default Header;
