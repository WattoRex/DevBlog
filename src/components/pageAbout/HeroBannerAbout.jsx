import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <div className='imageBackground aboutB'>

            <div className='heroContentContainers about'>

                <div className='imageContainer'>
                    <img src={require('../../assets/Images/PageAbout/maniervalentin_webdeveloper-removebg-preview.webp')} alt="heroImg" className='heroImg' />
                </div>

                <div className='heroBannerCOntenue'>
                    <div className='text'>
                        <h1 className='heroText'>Bonjour, je suis Manier Valentin</h1>
                        <p className='heroText2'>Je suis un Développeur Web Junior basé dans la région de Lens, j'aime concevoir de beau et performant site web.  </p>
                    </div>

                    <div className='heroButton About'>
                        <Link className='heroButtonAbout' style={{ textDecoration: "none" }}>Obtenir mon CV</Link >
                        <Link to={'/projects'} className='heroButtonPortfolio' style={{ textDecoration: "none" }}>Mes Projets</Link >
                        <Link to={'/playground'} className='heroButtonPortfolio' style={{ textDecoration: "none" }}>Mes Créations</Link >
                    </div>
                </div>

            </div>


        </div>
    );
};

export default HeroBanner;