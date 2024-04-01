import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import CodePreview from "../general/CodePreview"

const LastCssProjects = () => {
    const [cssProjects, setCssProjects] = useState([]);

    useEffect(() => {
        async function fetchCssProjects() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/api/creations?sort=createdAt:desc&pagination[pageSize]=2`);
                setCssProjects(response.data);
            } catch (error) {
                console.error('Error fetching CSS projects:', error);
            }
        }

        fetchCssProjects();
    }, []);

    if (!cssProjects || cssProjects.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='last-css-projects-container'>
            <h4>Dernier projets CSS :</h4>
            <div className="last-css-projects">
                {cssProjects.data.map(project => (
                    <div key={project.id} className="project-card">
                        <CodePreview projectId={project.id} />
                        <div className='project-title'>{project.attributes.Titre}</div>
                        <p>{project.attributes.Description}</p>
                        <Link to={`/playground/${project.attributes.slug}`} className="view-code-button">Voir le code</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LastCssProjects;
