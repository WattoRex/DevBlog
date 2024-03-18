import React from 'react';

const PageSizeSelector = ({ selectedPageSize, onPageSizeChange }) => {
    const pageSizeOptions = [1, 6, 12, 24]; // Options disponibles pour la taille de page

    return (
        <div className="PageSizeSelector">
            <label className="SizeSelectorLabel" htmlFor="pageSize"> <p>Produits par page :</p></label>
            <select
                className='SizeSelectorSelect'
                name="pageSize"
                id="pageSize"
                value={selectedPageSize}
                onChange={(e) => onPageSizeChange(parseInt(e.target.value))}
            >
                {pageSizeOptions.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PageSizeSelector;
