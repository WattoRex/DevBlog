import React, { useState } from 'react';

import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import PlaygroundGrid from '../components/pagePlayground/PlaygroundGrid';
import Filter from '../components/pagePlayground/Filter';
import Bubble from '../components/pagePlayground/BubblePlayground'

import SEO from "../context/seo";


const Playground = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
        // Mettre à jour l'état avec la nouvelle catégorie sélectionnée
        setSelectedCategory(category);
    };


    // Gestion de la bar de recherche
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='pagePlayground'>
            <SEO
                title="Manier Valentin - Mon Playground"
                description="Explorez et testez des composants React dans mon Playground. Utilisez le filtre pour trouver des composants spécifiques."
                keywords="React, composants, Playground, exploration, card, form, loader, button, tooltip, toggle switch, checkbox, animation, Manier, Valentin"
                canonicalUrl="https://manier-valentin.fr/playground"
            />

            <NavBar />
            <div className='pagePlaygroundContainer'>

                <div className='PlaygroundFilter'>
                    <p className='PlaygroundFilterTitle'>Composant React</p>
                    <p className='PlaygroundFilterText'>Explore des composants React !</p>
                    <Filter onCategoryChange={handleCategoryChange} searchTerm={searchTerm} onSearch={handleSearch} />
                </div>

                <div className='gridContainer'>
                    <PlaygroundGrid selectedCategory={selectedCategory} searchTerm={searchTerm} />
                </div>

                {/* Animation */}
                <div className='bubbleContainer Playground'>
                    <Bubble />
                </div>
                <div className='bubbleContainer2 Playground2'>
                    <Bubble />
                </div>

            </div>
            <Footer />
        </div >
    );
};

export default Playground;