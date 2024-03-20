import React from 'react';

const HeroBanner = () => {
    return (
        <div className='imageBackground'>

            <div className='heroContentContainers about'>

                <div className='text'>
                    <h1 className='heroText'>Bonjour, je suis Manier Valentin</h1>
                    <p className='heroText2'>Je suis un Développeur Web Junior basé dans la région de Lens, j'aime concevoir de beau et performant site web.  </p>
                </div>

                <div className='imageContainer'>
                    <img src={require('../../assets/Images/PageAbout/maniervalentin_webdeveloper-removebg-preview.png')} alt="heroImg" className='heroImg' />
                </div>



                {/* <div className='heroButton'>
                    <div className='heroButtonPortfolio'>Mon Portfolio</div>
                    <div className='heroButtonAbout'>Me decouvrir</div>
                </div> */}
            </div>


        </div>
    );
};

export default HeroBanner;