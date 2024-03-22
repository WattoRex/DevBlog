import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import CodePreview from "../general/CodePreview"

import Pagination from "../general/pagination"
import PageSizeSelector from "../general/pageSizeSelector"

const Playground = ({ selectedCategory, searchTerm }) => {
    const [cssProjects, setCssProjects] = useState([]);

    // Gestion de la pagination / Nombre de composant par page
    const [selectedPageSize, setSelectedPageSize] = useState(6); // Valeur par défaut : 6
    const [currentPage, setCurrentPage] = useState(1); // Page actuelle, initialisée à 1

    const handlePageSizeChange = (pageSize) => {
        setSelectedPageSize(pageSize);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Fetch CSS projects
    // Définition d'une fonction fetchData en utilisant useCallback.
    // useCallback est utilisé pour éviter que la fonction ne soit recréée à chaque rendu, 
    // ce qui peut améliorer les performances en cas de dépendances stables.
    const fetchData = useCallback(async (page, selectedCategory, searchTerm) => {
        try {
            // L'URL est construite en utilisant une variable d'environnement REACT_APP_STRAPI_API_URL et des paramètres de requête pour la pagination et le tri des données.
            let apiURL = `${process.env.REACT_APP_STRAPI_API_URL}/api/creations?populate=*&pagination[pageSize]=${selectedPageSize}&pagination[page]=${page}`

            if (selectedCategory) {
                apiURL += `&filters[tag][TagName][$contains]=${selectedCategory}`
            }

            if (searchTerm) {
                apiURL += `&filters[Titre][$containsi]=${searchTerm}` && `&filters[Description][$containsi]=${searchTerm}`;
            }


            // Effectue une requête GET asynchrone en utilisant Axios pour récupérer des données à partir d'une URL.
            const response = await axios.get(apiURL);
            // Met à jour l'état des projets CSS avec les données récupérées de la réponse.
            setCssProjects(response.data);
        } catch (error) {
            // En cas d'erreur lors de la requête, affiche un message d'erreur dans la console.
            console.error('Error fetching CSS projects:', error);
        }
    }, [selectedPageSize]); // Dépendance de useCallback : selectedPageSize

    // Utilise useEffect pour déclencher fetchData lorsque currentPage change.
    // Cela garantit que les données sont récupérées chaque fois que la page actuelle change.
    useEffect(() => {
        fetchData(currentPage, selectedCategory, searchTerm);
    }, [fetchData, currentPage, selectedCategory, searchTerm]); // Dépendances de useEffect : fetchData, currentPage


    if (!cssProjects || cssProjects.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='PlaygroundGridContainer'>
            <PageSizeSelector selectedPageSize={selectedPageSize} onPageSizeChange={handlePageSizeChange} />
            <div className="last-css-projects three-col">
                {cssProjects.data.map(project => (
                    <div key={project.id} className="project-card">
                        <CodePreview projectId={project.id} />
                        <div className='project-title'>{project.attributes.Titre}</div>
                        <p>{project.attributes.Description}</p>
                        <Link to={`/playground/${project.attributes.slug}`} className="view-code-button">Voir le code</Link>
                    </div>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(cssProjects.meta.pagination.total / selectedPageSize)} onPageChange={handlePageChange} />
        </div>
    );
};

export default Playground;