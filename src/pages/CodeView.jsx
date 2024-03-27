import React, { useState } from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import Share from '../components/general/share';

import CodePreview from '../components/pagePlayground/Editor';
import Proposal from '../components/pagePlayground/EditorProposal';

import Bubble from '../components/pagePlayground/BubblePlaygroundTwo'
import SEO from "../context/seo";


const CodeView = () => {
    const articleUrl = window.location.href;
    const articleTitle = 'Nouveau composant !';

    // Gestion de la catégorie de création entre composants CodePreview et Proposal
    const [creationCategory, setCreationCategory] = useState(null);
    const [creationID, setCreationID] = useState(null);
    const [TitreSEO, setTitreSEO] = useState(null);
    const [DescriptionSEO, setDescriptionSEO] = useState(null);
    const [KeywordsSEO, setKeywordsSEO] = useState(null);


    const updateCreationCategory = (category) => {
        setCreationCategory(category);
    };

    return (
        <div className='pageCodeView'>

            <SEO
                title={TitreSEO}
                description={DescriptionSEO}
                keywords={KeywordsSEO}
                canonicalUrl={articleUrl}
                author="Manier Valentin"
            />

            <NavBar />

            <div className='pageCodeViewContainer'>
                <div className='CodeViewPageContainer'>
                    <CodePreview updateCreationCategory={updateCreationCategory} IDProject={setCreationID} TitreSEO={setTitreSEO} DescriptionSEO={setDescriptionSEO} KeywordsSEO={setKeywordsSEO} />
                </div>

                <div className='ProposalPageContainer'>
                    <Proposal creationCategory={creationCategory} IDProject={creationID} />
                    <Share url={articleUrl} title={articleTitle} description={'Vous pouvez partager ce composant en utilisant les boutons ci-dessous :'} />
                </div>

                {/* Animation */}
                <div className='bubbleContainer Playground'>
                    <Bubble />
                </div>
                <div className='bubbleContainer2 Playground22'>
                    <Bubble />
                </div>

            </div>


            <Footer />
        </div>
    );
};

export default CodeView;