import React from 'react';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.webp';
import product4 from '../../assets/product4.jpeg';
import prod5 from '../../assets/product5.jpg';

const products = [
  {
    id: 1,
    name: 'Dark Shade Foundation',
    description: 'A rich, creamy foundation available in a variety of dark shades.',
    imageUrl: product2,
    price: '$25.00',
  },
  {
    id: 2,
    name: 'Plus Size Dress',
    description: 'Comfortable and stylish dress designed to fit and flatter all body types.',
    imageUrl: product1,
    price: '$45.00',
  },
  {
    id: 3,
    name: 'Inclusive Activewear',
    description: 'High-quality, breathable activewear available in extended sizes for all your fitness needs.',
    imageUrl: product3,
    price: '$40.00',
  },
  {
    id: 4,
    name: 'Curvy Fit Jeans',
    description: 'Stylish jeans tailored for curvy figures, offering comfort and style in one.',
    imageUrl: product4,
    price: '$60.00',
  },
  {
    id: 5,
    name: 'Body Positive T-Shirt',
    description: 'Soft, comfortable T-shirt with empowering messages promoting body positivity. Everyone is Beautiful.',
    imageUrl: prod5,
    price: '$20.00',
  },
];

const ProductCard = ({ product }) => (
  <div className="flex flex-col bg-white rounded-lg shadow-md p-4 m-2 w-60">
    <img src={product.imageUrl} alt={product.name} className="rounded-md mb-2" />
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-600 mb-2">{product.description}</p>
    <span className="text-xl font-bold mb-2">{product.price}</span>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
      Buy Now
    </button>
  </div>
);

const Product = () => {
  return (
    <div className="max-w-full mx-auto p-6 mt-3">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-center text-purple-400 mb-8">
        Feel Good, Look Great – Just as You Are
      </h1>

      {/* Product Cards */}
      <div className="flex justify-center items-center flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;

