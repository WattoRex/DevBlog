import React from 'react';

// Création du composant SkillCard
function SkillCard({ title, description }) {
    return (
        <div className="skill-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// Composant principal
function SkillsComponent() {
    return (
        <div className="skills-container">
            <h2>Mes compétences en développement web</h2>
            <div className="skill-cards-container">
                {/* Carte 1 : Site responsive adapté au mobile/tablette */}
                <SkillCard
                    title="Site responsive"
                    description="Je suis capable de créer des sites web qui s'adaptent parfaitement à différents appareils, tels que les smartphones, les tablettes et les ordinateurs de bureau."
                />
                {/* Carte 2 : Site web */}
                <SkillCard
                    title="Création de sites web"
                    description="Je maîtrise les technologies nécessaires pour concevoir et développer des sites web performants, fonctionnels et esthétiques, en utilisant HTML, CSS, JavaScript et React.js."
                />
                {/* Carte 3 : Qualité du Code */}
                <SkillCard
                    title="Qualité du Code"
                    description="En coulisses, je suis fier d'écrire un code propre, efficace et maintenable. Découvrez mes normes de codage et pratiques qui contribuent à la fonctionnalité et aux performances des projets que j'entreprends."
                />
            </div>
        </div>
    );
}

export default SkillsComponent;
