import React from 'react';

const HeroBanner = () => {
    return (
        <div className='imageBackground aboutB'>

            <div className='heroContentContainers about'>

                <div className='imageContainer'>
                    <img src={require('../../assets/Images/PageAbout/maniervalentin_webdeveloper-removebg-preview.png')} alt="heroImg" className='heroImg' />
                </div>

                <div className='heroBannerCOntenue'>
                    <div className='text'>
                        <h1 className='heroText'>Bonjour, je suis Manier Valentin</h1>
                        <p className='heroText2'>Je suis un Développeur Web Junior basé dans la région de Lens, j'aime concevoir de beau et performant site web.  </p>
                    </div>

                    <div className='heroButton About'>
                        <div className='heroButtonAbout'>Obtenir mon CV</div>
                        <div className='heroButtonPortfolio'>Mes Projets</div>
                        <div className='heroButtonPortfolio'>Mes Créations</div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default HeroBanner;