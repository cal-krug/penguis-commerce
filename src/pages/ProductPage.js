import React from 'react';

/* PROB | this is the generic product page, where information is carried through each product item
https://www.better.dev/route-parameters-with-react-router */
function ProductPage( {image, name, price }) { // Accept props and render UI based on props
    return (
        <div className="productListing">
            <div claseName="productImage"> {image} productImagePlaceholder </div>
            <h1 className="productTitle"> {name} productNamePlaceholder </h1>
            <p className="productPrice"> {price} productPricePlaceholder </p>
        </div>
    )
}

export default ProductPage;
