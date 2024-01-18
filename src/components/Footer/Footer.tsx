import { NavLink } from 'react-router-dom'
import './Footer.scss';
import '../../styles/form_footer.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [hasEmailRequire, setHasEmailRequire] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setHasEmailRequire(false);
    setHasEmailError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setHasEmailRequire(true);
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setHasEmailError(true);
    }

  }
  return (
    <footer className="footer">
      <div className="footer__form-container">

        <p className="footer__form-container--title">
          Subscribe to our <br /> newsletter
        </p>

        <form action="/" className="form" onSubmit={handleSubmit} method='POST'>
          <div className="form__input">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              className="form__mail"
              onChange={handleEmail}
            />


            {hasEmailRequire && (
              <div className='form__warning'>
                <div className='form__icon' />
                <p className={classNames({ 'form__warning-error': hasEmailRequire })}>
                  Email is required
                </p>
              </div>
            )}

            {hasEmailError && (
              <div className='form__warning'>
                <div className='form__icon' />
                <p className={classNames({
                  'form__warning-error': hasEmailError,
                })}>
                  Invalid email address
                </p>
              </div>
            )}
          </div>


          <button className="form__button" type="submit">
            Send
          </button>
        </form>
      </div >

      <div className="footer__divider"></div>

      <div className="footer__info-container">
        <div className="footer__info">
          <p className="footer__title">Customer service</p>
          <nav className="footer__nav">
            <ul className="footer__navList">
              <NavLink
                to='/'
                className="footer__navItem"
                target="_blank"
              >
                Delivery and Payment policy
              </NavLink>

              <NavLink
                to="/"
                className="footer__navItem"
              >
                Return policy
              </NavLink>

              <NavLink
                to="/"
                className="footer__navItem"
              >
                Terms and conditions
              </NavLink>
            </ul>
          </nav>
        </div>

        <div className="footer__info" id='contacts'>
          <p className="footer__title">
            Contact us
          </p>
          <nav className="footer__nav">
            <ul className="footer__navList">
              <NavLink
                to="tel:+1 212-923-3700"
                className="footer__navItem"
                target="_blank"
              >
                Phone : +380442222222
              </NavLink>

              <NavLink
                to="mailto:amin123@gmail.com"
                className="footer__navItem"
              >
                Email : amin123@gmail.com
              </NavLink>
            </ul>
          </nav>
        </div>

        <div className="footer__info">
          <p className="footer__title">FOLLOW US</p>
          <nav className="footer__nav">
            <ul className="footer__navList">
              <NavLink
                to='/'
                className="footer__navItem"
                target="_blank"
              >
                Facebook
              </NavLink>

              <NavLink
                to="/"
                className="footer__navItem"
              >
                Instagram
              </NavLink>

              <NavLink
                to="/"
                className="footer__navItem"
              >
                Linkedin
              </NavLink>

              <NavLink
                to="/"
                className="footer__navItem"
              >
                Twitter
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </footer >
  )
}
