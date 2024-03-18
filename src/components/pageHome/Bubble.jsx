import React, { useState, useEffect } from 'react';

function BubbleContainer() {
    const [numberOfBubbles, setNumberOfBubbles] = useState(14);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1025) {
                setNumberOfBubbles(10);
            } else {
                setNumberOfBubbles(14);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container">
            {/* Création de x bulles */}
            {[...Array(numberOfBubbles)].map((_, index) => (
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
