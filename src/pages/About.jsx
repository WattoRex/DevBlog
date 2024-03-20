import React from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import HeroBanner from '../components/pageAbout/HeroBannerAbout';

const AboutMe = () => {
    return (
        <div className='pageAbout'>
            <NavBar />

            <div className='pageAboutContainer'>
                <HeroBanner />
            </div>

            <Footer />
        </div>



        // <div className="about-me-container">
        //     <h1>À propos de moi</h1>
        //     <div className="front-end-section">
        //         <h2>Front-End</h2>
        //         <p>
        //             Je suis passionné par le développement côté client et j'ai une solide expérience dans la création d'interfaces utilisateur interactives et conviviales à l'aide de technologies telles que React.js, HTML5, CSS3 et JavaScript. J'ai une bonne connaissance des principes de conception Web et j'aime explorer de nouvelles bibliothèques et frameworks pour améliorer mes compétences.
        //         </p>
        //         <h3>Technologies utilisées :</h3>
        //         <ul>
        //             <li>React.js</li>
        //             <li>HTML5</li>
        //             <li>CSS3</li>
        //             <li>JavaScript</li>
        //             {/* Ajoutez d'autres technologies front-end utilisées */}
        //         </ul>
        //     </div>
        //     <div className="back-end-section">
        //         <h2>Back-End</h2>
        //         <p>
        //             En ce qui concerne le développement côté serveur, j'ai également de l'expérience dans la construction d'API robustes et sécurisées en utilisant des frameworks tels que Node.js et Express.js. Je suis à l'aise avec les bases de données relationnelles et non relationnelles, notamment MongoDB et MySQL, et je suis capable de créer des systèmes backend efficaces et évolutifs.
        //         </p>
        //         <h3>Technologies utilisées :</h3>
        //         <ul>
        //             <li>Node.js</li>
        //             <li>Express.js</li>
        //             <li>MongoDB</li>
        //             <li>MySQL</li>
        //             {/* Ajoutez d'autres technologies back-end utilisées */}
        //         </ul>
        //     </div>
        // </div>
    );
};

export default AboutMe;
