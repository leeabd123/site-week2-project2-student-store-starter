
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from '../NotFound/NotFound';
import ProductView from '../ProductView/ProductView';

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const { productId } = useParams();
  const { handleAddItemToCart, handleRemoveItemToCart } = props;

  useEffect(() => {
    const fetchProduct = async () => {
      setIsFetching(true);

      try {
        const response = await axios.get(
          `https://codepath-store-api.herokuapp.com/store/${productId}`
        );
        if (response.data && response.data.product) {
          setProduct(response.data.product);
        } else {
          setProduct(null);
        }
      } catch (error) {
        setError('Error fetching product.');
      } finally {
        setIsFetching(false);
      }
    };

    fetchProduct();
  }, [productId]);


  if (isFetching) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error || !product) {
    return <NotFound />;
  }

  return (
    <div className="product-detail">
      <ProductView product={product} />
    </div>
  );
}
