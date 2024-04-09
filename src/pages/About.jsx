import React from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import HeroBanner from '../components/pageAbout/HeroBannerAbout';
import FrontEnd from '../components/pageAbout/FrontEnd';
import BackEnd from '../components/pageAbout/BackEnd';
import Contact from '../components/pageAbout/ContactForm';
// import PrincipalSkills from '../components/pageAbout/PrincipalSkills';

import Bubble from '../components/pageHome/Bubble';

import SEO from "../context/seo";


const AboutMe = () => {
    return (
        <div className='pageAbout'>

            <SEO
                title="Manier Valentin - À propos de moi"
                description="Découvrez qui je suis, mes différentes compétences en développement front-end et en développement back-end, et comment me contacter."
                keywords="à propos, développeur web, front-end, back-end, contact, React, JavaScript, CSS, HTML, SEO, composant, Manier, Valentin"
                canonicalUrl="https://manier-valentin.fr/about"
            />

            <NavBar />

            <div className='pageAboutContainer'>
                <HeroBanner />
            </div>

            <div className='pageAboutContainerSkill'>
                {/* <PrincipalSkills /> */}
                <FrontEnd />
            </div>

            <div className='pageAboutContainerSkill2'>
                {/* <PrincipalSkills /> */}
                <BackEnd />
            </div>

            <div className='pageAboutContainerContact'>
                <Contact />
            </div>

            {/* Animation */}
            <div className='bubbleContainer' >
                <Bubble />
            </div>
            <div className='bubbleContainer2'>
                <Bubble />
            </div>

            <Footer />
        </div>
    );
};

export default AboutMe;
