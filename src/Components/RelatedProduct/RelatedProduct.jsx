import React, { useEffect, useState } from 'react';
import './RelatedProduct.css';
import Item from '../Item/Item';

const RelatedProduct = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/relatedproduct')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch related products');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && Array.isArray(data.relatedProducts)) {
          setRelatedProduct(data.relatedProducts);
        } else {
          console.error('Related products data is not in the expected format:', data);
        }
      })
      .catch((error) => console.error('Error fetching related products:', error));
  }, []);

  return (
    <div className='relatedProduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="related-roducts-item">
        {relatedProduct.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
