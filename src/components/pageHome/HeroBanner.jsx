import React from 'react';

const HeroBanner = () => {
    return (
        <div className='imageBackground'>

            <div className='heroContentContainers'>
                <h1 className='heroText'>Bonjour, je suis Manier Valentin</h1>
                <p className='heroText2'>Je suis un Développeur Web Junior basé dans la région de Lens, j'aime concevoir de beau et performant site web.  </p>

                <div className='heroButton'>
                    <div className='heroButtonPortfolio'>Mon Portfolio</div>
                    <div className='heroButtonAbout'>Me decouvrir</div>
                </div>

            </div>


        </div>
    );
};

export default HeroBanner;