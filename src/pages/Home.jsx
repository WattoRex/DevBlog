import React from 'react';

import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import HeroBanner from '../components/pageHome/HeroBanner';
// import PrincipalSkills from "../components/pageHome/PrincipalSkills"
import LastArticle from '../components/pageHome/LastArticle';
import LastProjects from '../components/pageHome/LastProjetcs';
import LastCssProjects from '../components/pageHome/LastCssProjets';
import Bubble from "../components/pageHome/Bubble"

import SEO from "../context/seo";


const Home = () => {
    return (
        <div className='pageHome'>
            <SEO
                title="Manier Valentin - Développeur Web"
                description="Découvrez mes compétences et projets en tant que développeur web. Contactez-moi pour toute collaboration ou opportunité."
                keywords="développeur web, compétences, projets, contact, article, React, JavaScript, CSS, HTML, SEO, composant, Manier, Valentin"
                canonicalUrl="https://manier-valentin.fr/"
            />


            <NavBar />
            <div className='pageHomeContainer'>

                <div className='heroBackground'>
                    <HeroBanner />

                </div>
                {/* <PrincipalSkills /> */}
                <div className='lastArticleContainerHome'>
                    <LastArticle />
                </div>

                <div className='projectsContainerHome'>
                    <LastProjects />
                </div>

                <div className='projectsContainerHome f'>
                    <LastCssProjects />
                </div>

                {/* Animation */}
                <div className='bubbleContainer'>
                    <Bubble />
                </div>
                <div className='bubbleContainer2'>
                    <Bubble />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;