// Dans le composant Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pagesToShow = 1; // Nombre de pages à afficher de chaque côté de la page actuelle

    const generatePageNumbers = () => {
        const pageNumbers = [];

        for (let i = Math.max(1, currentPage - pagesToShow); i <= Math.min(totalPages, currentPage + pagesToShow); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <div className="PaginationContainer">
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="PaginationButton"
            >
                Première
            </button>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="PaginationButton"
            >
                ←
            </button>

            {generatePageNumbers().map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`PaginationButton ${pageNumber === currentPage ? 'PaginationActive' : ''}`}
                >
                    {pageNumber}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="PaginationButton"
            >
                →
            </button>
            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="PaginationButton"
            >
                Dernière
            </button>
        </div>
    );
};

export default Pagination;
