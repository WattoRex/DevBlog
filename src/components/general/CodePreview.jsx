import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CodePreview = ({ projectId }) => {
    const [codeCSS, setCodeCSS] = useState('');
    const [codeJSX, setCodeJSX] = useState('');
    const [codeKeyFrame, setcodeKeyFrame] = useState('');

    useEffect(() => {
        async function fetchCodes() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_STRAPI_API_URL}/api/creations/${projectId}?populate=*`);
                setCodeCSS(response.data.data.attributes.CodeCSS);
                setCodeJSX(response.data.data.attributes.CodeHTML);
                setcodeKeyFrame(response.data.data.attributes.CodeKeyFrame);
            } catch (error) {
                console.error('Error fetching CSS projects:', error);
            }
        }

        fetchCodes();
    }, [projectId]);

    // Générer une classe CSS unique pour ce composant basée sur le projectId
    const uniqueClass = `codePreview-${projectId}`;

    const inlineStyles = {
        __html: `.${uniqueClass} { ${codeCSS} }`
    };

    return (
        <div className={`codePreview ${uniqueClass}`}>
            <div className='codePreviewContent'>
                <style>{codeKeyFrame}</style>
                <style dangerouslySetInnerHTML={inlineStyles}></style>
                <div className={uniqueClass} dangerouslySetInnerHTML={{ __html: codeJSX }} />
            </div>
        </div>
    );
};

export default CodePreview;
