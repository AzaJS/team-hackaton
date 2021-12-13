import React, { useContext } from 'react';
import { productsContext } from '../../contexts/productsContext';

const ProductsList = () => {
    const {handleDelete} = useContext(productsContext)
    return (
        <div>
            ProductsList
        </div>
    );
};

export default ProductsList;