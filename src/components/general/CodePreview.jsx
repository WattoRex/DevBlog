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
                setCodeJSX(response.data.data.attributes.CodeJSX);
            } catch (error) {
                console.error('Error fetching CSS projects:', error);
            }
        }

        fetchCodes();
    }, [projectId]);

    return (
        <div className='codePreview'>
            <style>{codeCSS}</style>
            <div dangerouslySetInnerHTML={{ __html: codeJSX }} />
        </div>
    );
};

export default CodePreview;
