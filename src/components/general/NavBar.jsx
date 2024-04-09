import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/autres/Logo1.webp';

const NavBar = () => {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    const toggleNav = () => {
        setIsMobileNavActive(!isMobileNavActive);
    };

    return (
        <div className='navBarContainer'>
            <div className='logoContainer'>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>

                {/* <p>Manier Valentin</p> */}
            </div>
            <div className='navMenuContainer'>
                <ul className='navMenu'>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/projects">Projets</Link></li>
                    <li><Link to="/playground">Playground</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </div>
            <div className={`hamburger ${isMobileNavActive ? 'hamburger-active' : ''}`} onClick={toggleNav}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className={`menubar ${isMobileNavActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/playground">Playground</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
