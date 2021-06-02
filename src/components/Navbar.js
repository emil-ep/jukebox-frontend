import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// import { Button } from './Button';
import './Navbar.css'


function Navbar() {

    let history = useHistory();
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const logoutUser = () => {
        localStorage.removeItem("user-token");
        // history.push("/");
    }

    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
              JUKEBOX <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/albums"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Albums
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/artists"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Artists
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={logoutUser}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Navbar
