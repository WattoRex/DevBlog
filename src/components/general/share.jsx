import React from 'react';

const ShareButtons = ({ url, title, description }) => {
    const handleShareLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(linkedInUrl, '_blank');
    };

    const handleShareFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookUrl, '_blank');
    };

    const handleShareTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        window.open(twitterUrl, '_blank');
    };

    return (
        <div className="share-buttons-container">
            <p className="share-text">
                {description}
            </p>
            <div className="button-container">
                <button className="share-button" onClick={handleShareLinkedIn}>Partager sur LinkedIn</button>
                <button className="share-button" onClick={handleShareFacebook}>Partager sur Facebook</button>
                <button className="share-button" onClick={handleShareTwitter}>Partager sur Twitter</button>
            </div>
        </div>
    );
};

export default ShareButtons;
