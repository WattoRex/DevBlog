import React from 'react';

import ResponsiveAnim from './ResponsiveAnim';

const FrontEnd = () => {
    return (
        <div className='frontEnd'>

            <div className="front-end-section">
                <h2>Front-End</h2>
                <p>
                    - Conception des sites web qui s'adaptent de manière fluide à une variété d'appareils, garantissant une expérience utilisateur optimale sur smartphones, tablettes et ordinateurs de bureau.
                </p>

                <p>
                    - Conception d'application via React.js, je développe des sites web à la fois performants, fonctionnels et esthétiques.
                </p>

                <p>
                    - Génération de site statique avec React pour optimiser le SEO.
                </p>

                <h3>Technologies utilisées :</h3>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    {/* Ajoutez d'autres technologies front-end utilisées */}
                </ul>
            </div>

            <div className='animationResponsive'>
                <ResponsiveAnim />
            </div>
        </div>
    );
};

export default FrontEnd;