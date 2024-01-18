import { Link, NavLink, useLocation } from 'react-router-dom';
import './NavBar.scss';
import classNames from 'classnames';
import { useState } from 'react';

export const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    closeMenu();
  };

  return (
    <nav className="navbar">


      <Link to='/' className='navbar__logo'>
        <div className='navbar__logo--img' />
      </Link>

      <ul className={classNames('navbar__list', {
        'navbar__list--mob': isOpen,
      })}>
        <NavLink
          to="/"
          className={classNames('navbar__item', {
            'navbar__item--active': location.pathname === '/',
          })}
          onClick={closeMenu}
        >
          HOME
        </NavLink>

        <NavLink
          to="/catalog"
          className={classNames('navbar__item', {
            'navbar__item--active': location.pathname === '/catalog',
          })}
          onClick={closeMenu}
        >
          CATALOG
        </NavLink>

        <NavLink
          to="/wineBlog"
          className={classNames('navbar__item', {
            'navbar__item--active': location.pathname === '/wineBlog',
          })}
          onClick={closeMenu}
        >
          WINE BLOG
        </NavLink>

        <NavLink
          to="#"
          className="navbar__item"
          onClick={scrollToBottom}
        >
          CONTACTS
        </NavLink>

        <NavLink
          to="/"
          className="navbar__item--mob"
          onClick={closeMenu}
        >
          Log In or Sign Up
        </NavLink>
      </ul>

      <div className="navbar__icons">
        <Link to='/' className='navbar__icon'>
          <div className="navbar__icon--profile" />
        </Link>

        <Link to='/favourites' className='navbar__icon'>
          <div className="navbar__icon--favs" />
        </Link>

        <Link to='/cart' className='navbar__icon'>
          <div className="navbar__icon--cart" />
        </Link>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="navbar__cross"
            className="navbar__cross"
            onClick={toggleMenu}
          />
        </>
      ) : (
        <>
          <Link to='/cart' >
            <div className="navbar__cart" />
          </Link>
          <button
            type="button"
            aria-label="navbar__burger"
            className="navbar__burger"
            onClick={toggleMenu}
          />
        </>

      )}
    </nav>
  )
}
