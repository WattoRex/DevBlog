import React from 'react';
import { Link } from 'react-router-dom';


const HeroBanner = () => {
    return (
        <div className='imageBackground'>

            <div className='heroContentContainers'>
                <h1 className='heroText'>Bonjour, je suis Manier Valentin</h1>
                <p className='heroText2'>Je suis un Développeur Web Junior basé dans la région de Lens, j'aime concevoir de beau et performant site web.  </p>

                <div className='heroButton'>
                    <Link to="/projects" className='heroButtonPortfolio' style={{ textDecoration: "none" }}>Mon Portfolio</Link>
                    <Link to="/about" className='heroButtonAbout' style={{ textDecoration: "none" }}>Me decouvrir</Link>
                </div>

            </div>


        </div>
    );
};

export default HeroBanner;