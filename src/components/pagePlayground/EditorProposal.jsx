import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import CodePreview from "../general/CodePreview"

const EditorProposal = ({ creationCategory, IDProject }) => {
    const [cssProjects, setCssProjects] = useState([]);
    const [categoryWithoutHash, setCategoryWithoutHash] = useState('');

    useEffect(() => {
        async function fetchProposal() {
            try {
                // Supprimer le '#' si c'est le premier caractère de creationCategory 
                // eslint-disable-next-line
                const removeHash = creationCategory.startsWith('#')
                    ? setCategoryWithoutHash(creationCategory.substring(1))
                    : creationCategory;

                const response = await axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/api/creations?populate=*&random=true&pagination&filters[tag][TagName][$contains]=${categoryWithoutHash}&filters[id][$ne]=${IDProject}`);
                setCssProjects(response.data);
            } catch (error) {
                console.error('Error fetching proposal:', error);
            }
        }

        // Ajout d'un délai  avant d'exécuter fetchProposal
        const timeoutId = setTimeout(() => {
            fetchProposal();
        }, 100);

        // Nettoyage du timeout si le composant est démonté ou si une nouvelle mise à jour déclenche un autre effet
        return () => clearTimeout(timeoutId);
    }, [creationCategory, categoryWithoutHash, IDProject]);

    if (!cssProjects || cssProjects.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='PlaygroundGridContainerContainer'>
            <div className='PlaygroundGridContainer'>

                <div className='proposalTextContainer'>
                    <Link to={`/playground/`} className="view-code-button back">Retour</Link>
                    <p className='proposalText'>Vous pourriez étre intérésé par d'autre composants de la catégorie : {categoryWithoutHash}</p>
                </div>

                <div className="last-css-projects three-col">
                    {cssProjects.data.slice(0, 3).map(project => (
                        <div key={project.id} className="project-card">
                            <CodePreview projectId={project.id} />
                            <div className='project-title'>{project.attributes.Titre}</div>
                            <p>{project.attributes.Description}</p>
                            <Link to={`/playground/${project.attributes.slug}`}
                                className="view-code-button">Voir le code</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default EditorProposal;