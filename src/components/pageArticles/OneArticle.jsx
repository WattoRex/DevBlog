import React, { useState, useEffect } from 'react';

import CodeBlockWithPrism from "../general/CodeBlock";


const ArticleComponent = () => {
    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        // Fonction pour récupérer les données de l'article depuis l'API Strapi
        const fetchArticleData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_STRAPI_API_URL}/api/articles/1`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const data = await response.json();
                setArticleData(data);
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        fetchArticleData();
    }, []);

    const detectLanguage = (code) => {
        if (code.includes('import') || code.includes('export') || code.includes('function') || code.includes('=>') || code.includes('useState') || code.includes('useEffect') || code.includes('useRef') || code.includes('useContext')) {
            return 'jsx';
        } else if (code.includes(':') || code.includes('{') || code.includes('}') || code.includes(';')) {
            return 'css';
        } else {
            return 'js';
        }
    };

    // Fonction pour rendre les éléments du contenu riche
    const renderContent = (content) => {
        // eslint-disable-next-line
        return content.map((element, index) => {
            switch (element.type) {
                case 'paragraph':
                    return (
                        <div key={index} className='paragraph'>
                            { // eslint-disable-next-line 
                                element.children.map((child, childIndex) => {
                                    let style = {};
                                    if (child.bold) style.fontWeight = 'bold';
                                    if (child.italic) style.fontStyle = 'italic';
                                    if (child.underline) style.textDecoration = 'underline';

                                    if (child.code) {
                                        const detectedLanguage = detectLanguage(child.text);
                                        return (
                                            <div className='code22'>
                                                <CodeBlockWithPrism
                                                    key={childIndex}
                                                    code={child.text}
                                                    language={detectedLanguage}
                                                    className="code-block"
                                                />
                                            </div>
                                        );
                                    }

                                    if (child.type === 'text') {
                                        return (
                                            <span key={childIndex} style={style}>
                                                {child.text}
                                            </span>
                                        );
                                    } else if (child.type === 'link') {
                                        return (
                                            <a key={childIndex} href={child.url}>
                                                {child.children.map((linkChild, linkChildIndex) => (
                                                    <span key={linkChildIndex}>{linkChild.text}</span>
                                                ))}
                                            </a>
                                        );
                                    }
                                })}
                        </div>
                    );
                case 'list':
                    if (element.format === 'unordered') {
                        return (
                            <ul key={index}>
                                {element.children.map((listItem, listItemIndex) => (
                                    <li key={listItemIndex}>{listItem.children[0].text}</li>
                                ))}
                            </ul>
                        );
                    } else if (element.format === 'ordered') {
                        return (
                            <ol key={index}>
                                {element.children.map((listItem, listItemIndex) => (
                                    <li key={listItemIndex}>{listItem.children[0].text}</li>
                                ))}
                            </ol>
                        );
                    }
                    break;
                case 'image':
                    // Modifier l'URL de l'image pour le dev en local // Responsivle Mobile/Tabeltte
                    const imageUrl = element.image.url.replace('localhost', `192.168.1.196`);
                    return (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={element.image.alternativeText}
                            style={{
                                // maxWidth: '60%',
                                height: 'auto',
                            }}
                        />

                    );
                case 'quote':
                    return <blockquote key={index}>{element.children[0].text}</blockquote>;
                case 'heading':
                    const HeadingTag = `h${element.level}`;
                    return <HeadingTag key={index}>{element.children[0].text}</HeadingTag>;
                default:
                    return null;
            }
        });
    };

    return (
        <div className="center-container">
            <div className="center-content">
                {articleData ? (
                    <div className='articleContent'>
                        <h2>{articleData.data.attributes.Titre}</h2>
                        <p>{articleData.data.attributes.Description}</p>
                        {renderContent(articleData.data.attributes.Contenue)}
                    </div>
                ) : (
                    <p>Chargement...</p>
                )}
            </div>
        </div>
    );
}

export default ArticleComponent;

