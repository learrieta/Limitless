import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ButtonIn } from './ButtonIn';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './Navbar.css';
import { ButtonOut } from './ButtonOut';

const Navbar = () => {
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try{
      await logOut()
    }catch(error) {
      console.log(error)
    }
  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LIMITLESS
            <i class="fas fa-dumbbell" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              {user?.displayName ? <></> : <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up </Link>}
            </li>
            <li>
              {user?.displayName ? <Link  className='nav-links-mobile'  onClick={handleSignOut} > Sign Out</Link> :
                <Link
                  to='/sign-in'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              }
            </li>
          </ul>

          {user?.displayName ? <></> : (button && <Button buttonStyle='btn--outline'>SIGN UP</Button>) }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {user?.displayName ? (button && <ButtonOut  buttonStyle='btn--outline' onClick={handleSignOut}>SIGN OUT</ButtonOut>) : ( button && <ButtonIn buttonStyle='btn--outline'>SIGN IN</ButtonIn>) }
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;