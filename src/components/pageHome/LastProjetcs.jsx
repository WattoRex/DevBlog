import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LastProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchLastProjects() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/api/projets?populate=*&sort=id:desc&pagination[pageSize]=3`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching last projects:', error);
            }
        }

        fetchLastProjects();
    }, []);

    if (!projects || projects.length === 0) {
        return <div>Loading...</div>;
    }

    // console.log(projects)

    return (
        <div className='last-projectsContainer'>
            <h3>Latest Projects </h3>
            <div className="last-projects">
                {projects.data.map(project => (
                    <div key={project.id} className="project">
                        <div className='project-title'>{project.attributes.Titre}</div>
                        <img src={`${process.env.REACT_APP_STRAPI_API_URL}${project.attributes.ImageDePresentation.data.attributes.url}`} alt={project.attributes.Titre} />
                        <p>{project.attributes.Description}</p>
                    </div>
                ))}
            </div>

        </div>


    );
}

export default LastProjects;
