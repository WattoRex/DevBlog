import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const ProjectCard = ({ searchTerm }) => {
const ProjectCard = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les données depuis Strapi
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/api/projets?populate=*`);
                setProjects(response.data.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets:", error);
            }
        };

        fetchProjects();
    }, []);
    // }, [searchTerm]);


    return (
        <div className="project-container">
            {projects.length === 0 ? (
                <p className="no-results-message">Aucun nom de projet ne correspond à votre recherche</p>
            ) : (
                projects.map((project) => (
                    <div key={project.id} className="project-Card">
                        <img className='project-image' src={`${process.env.REACT_APP_STRAPI_API_URL}${project.attributes.ImageDePresentation.data.attributes.url}`} alt={project.attributes.Titre} />
                        <h3>{project.attributes.Titre}</h3>
                        <p>{project.attributes.Description}</p>
                        <p>Technologies utilisées: {project.attributes.technologies}</p>
                        {project.attributes.demoUrl && (
                            <a href={project.attributes?.demoUrl} target="_blank" rel="noopener noreferrer">
                                Visiter le site de demonstration
                            </a>
                        )}
                        {project.attributes.url && (
                            <a href={project.attributes?.url} target="_blank" rel="noopener noreferrer">
                                Visiter le site
                            </a>
                        )}
                        {project.attributes.github && (
                            <a href={project.attributes?.github} target="_blank" rel="noopener noreferrer">
                                Voir sur GitHub
                            </a>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default ProjectCard;
