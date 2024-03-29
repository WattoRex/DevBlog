// CodePreview.jsw
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CodePreview = ({ projectId }) => {

    const [codeCSS, setCodeCSS] = useState([]);
    const [codeJSX, setCodeJSX] = useState([]);

    useEffect(() => {
        async function fetchCodes() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/api/creations/${projectId}?populate=*`);
                setCodeCSS(response.data.data.attributes.CodeCSS);
                setCodeJSX(response.data.data.attributes.CodeHTML);
            } catch (error) {
                console.error('Error fetching CSS projects:', error);
            }
        }

        fetchCodes();
    }, [projectId]);

    // Générer une classe CSS unique pour ce composant basée sur le projectId
    const uniqueClass = `codePreview-${projectId}`;

    return (
        <div className={`codePreview ${uniqueClass}`}>
            <div className='codePreviewContent'>
                <div className={uniqueClass} dangerouslySetInnerHTML={{ __html: codeJSX }} />
            </div>
            <style>
                {`
                    .codePreview.${uniqueClass} .${uniqueClass} {
                        ${codeCSS}
                    }
                `}
            </style>
        </div>
    );
};

export default CodePreview;
