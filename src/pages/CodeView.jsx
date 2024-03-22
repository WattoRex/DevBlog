import React, { useState } from 'react';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

import CodePreview from '../components/pagePlayground/Editor';
import Proposal from '../components/pagePlayground/EditorProposal';

import Bubble from '../components/pagePlayground/BubblePlaygroundTwo'


const CodeView = () => {

    // Gestion de la catégorie de création entre composants CodePreview et Proposal
    const [creationCategory, setCreationCategory] = useState(null);

    const updateCreationCategory = (category) => {
        setCreationCategory(category);
    };

    return (
        <div className='pageCodeView'>
            <NavBar />

            <div className='pageCodeViewContainer'>
                <div className='CodeViewPageContainer'>
                    <CodePreview updateCreationCategory={updateCreationCategory} />
                </div>

                <div className='ProposalPageContainer'>
                    <Proposal creationCategory={creationCategory} />
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