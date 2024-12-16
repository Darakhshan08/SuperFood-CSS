import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Flowering tea',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea1-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mock ups',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea2-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
    {
      id: 3,
      name: 'Fruit tea',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea3-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
    {
      id: 4,
      name: 'Green tea',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea4-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
    {
      id: 5,
      name: 'Black tea',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea5-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
    {
      id: 6,
      name: 'Herbal tea',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea6-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
    {
      id: 7,
      name: 'Metal box tea',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea7-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
    {
      id: 8,
      name: 'Blueberry tea',
      image: 'https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea8-300x300.jpg',
      price: '$190.00',
      rating: 5,
    },
  ];

  return (
    <div className="products-section">
      <div className="products-header">
        <h2>Our Products</h2>
        <p>Discover our collection of premium teas</p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="product-image"
              />
            </div>
            <Link href="/detail" className="product-name">
              {product.name}
            </Link>
            <div className="product-rating">
              {[...Array(product.rating)].map((_, i) => (
                <Star key={i} size={20} className="star-icon" />
              ))}
            </div>
            <span className="product-price">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
