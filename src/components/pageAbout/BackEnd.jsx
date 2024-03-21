import React from 'react';

import ServerAnim from '../pageAbout/ServerAnim';

const BackEnd = () => {
    return (
        <div className='backEnd'>
            <div className='animationServer'>
                <ServerAnim />
            </div>
            <div className="front-end-section">
                <h2>Back-End</h2>
                <p>
                    En ce qui concerne le développement côté serveur, j'ai également de l'expérience dans la construction d'API robustes et sécurisées en utilisant des frameworks tels que Strapi et Express.js. Je suis à l'aise avec les bases de données relationnelles et non relationnelles, notamment PostgreSQL et MySQL, et je suis capable de créer des systèmes backend efficaces et évolutifs.
                </p>
                <h3 >Technologies utilisées :</h3>
                <ul>
                    <li>Strapi</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    {/* Ajoutez d'autres technologies back-end utilisées */}
                </ul>
            </div>



        </div>
    );
};

export default BackEnd;