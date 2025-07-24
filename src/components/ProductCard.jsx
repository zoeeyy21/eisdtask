import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Rating: {product.rating.rate}</p>
      </div>
    </div>
  );
};

export default ProductCard;
