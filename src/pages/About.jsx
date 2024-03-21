import React from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import HeroBanner from '../components/pageAbout/HeroBannerAbout';
import FrontEnd from '../components/pageAbout/FrontEnd';
import BackEnd from '../components/pageAbout/BackEnd';
import Contact from '../components/pageAbout/ContactForm';
// import PrincipalSkills from '../components/pageAbout/PrincipalSkills';

import Bubble from '../components/pageHome/Bubble';

const AboutMe = () => {
    return (
        <div className='pageAbout'>
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
