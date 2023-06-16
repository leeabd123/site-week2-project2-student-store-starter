import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductView(props) {
  const { product, productId, quantity, showDescription, cateogry, image, price, name, handleAddItemToCart, handleRemoveItemToCart } = props;
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{product.id}</h1>
      <ProductCard
        product={product}
        productId={product.productId}
        quantity={product.quantity}
        showDescription={true}
        cateogry={product.cateogry}
        image={product.image}
        price={product.price}
        name={product.name}
      />
      <div className="preview-window-container">

      </div>
      <br/>
      <br/>
    </div>
  );
}


