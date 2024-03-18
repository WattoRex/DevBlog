import React from 'react';

const BubbleContainer = () => {
    return (
        <div className="container">
            {/* Création de x bulles */}
            {[...Array(8)].map((_, index) => (
                <div key={index} className="bubble">
                    {/* Création de x espaces (contour de la bulle pour mettre différents styles) */}
                    {[...Array(5)].map((_, spanIndex) => (
                        <span key={spanIndex}></span>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default BubbleContainer;
