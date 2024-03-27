import React, { useState } from 'react';
import SearchBar from '../pageArticles/SearchBar';

const Filter = ({ onCategoryChange, searchTerm, onSearch }) => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleCategoryClick = (category) => {
        onCategoryChange(category); // Appel de la fonction de rappel pour transmettre la catégorie à PlaygroundPage
        setActiveFilter(category); // Définir le filtre actif
    }

    const handleResetClick = () => {
        onCategoryChange(null); // Réinitialise la catégorie sélectionnée à null
        setActiveFilter(null); // Définir le filtre actif à null
    }

    return (
        <div className='filterContainer'>
            <ul className="filter-menu">
                <li>
                    <div className={`bouton ${activeFilter === null ? 'active' : ''}`} onClick={handleResetClick}>All</div> {/* Bouton de réinitialisation */}
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Form" ? 'active' : ''}`} onClick={() => handleCategoryClick("Form")}>Form</div>
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Card" ? 'active' : ''}`} onClick={() => handleCategoryClick("Card")}>Card</div>
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Button" ? 'active' : ''}`} onClick={() => handleCategoryClick("Button")}>Button</div>
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Checkbox" ? 'active' : ''}`} onClick={() => handleCategoryClick("Checkbox")}>Checkbox</div>
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Loader" ? 'active' : ''}`} onClick={() => handleCategoryClick("Loader")}>Loader</div>
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Toggle-switch" ? 'active' : ''}`} onClick={() => handleCategoryClick("Toggle-switch")}> Toggle-switch</div>
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Animation" ? 'active' : ''}`} onClick={() => handleCategoryClick("Animation")}>Animation</div>
                </li>
                <li>
                    <div className={`bouton ${activeFilter === "Tooltip" ? 'active' : ''}`} onClick={() => handleCategoryClick("Tooltip")}>Tooltip</div>
                </li>
                {/* Ajoutez d'autres éléments de filtre ici */}
            </ul>
            <SearchBar searchTerm={searchTerm} onSearch={onSearch} holderText="Rechercher un composant..." taille={"60vw"} />
        </div>
    );
};

export default Filter;
