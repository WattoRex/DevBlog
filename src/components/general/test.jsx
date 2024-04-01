import React from 'react';

const Input = () => {
    return (
        <div className="input-container">
            <input type="text" className="custom-input" placeholder="Entrez votre texte" />
            <span className="input-border"></span>
            <span className="input-highlight"></span>
        </div>
    );
}

export default Input;
