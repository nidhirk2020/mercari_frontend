import React from 'react';
import box1 from '../../assets/box1.svg';
import box2 from '../../assets/box2.svg';
import box3 from '../../assets/box3.svg';

const ShambhalaComponent = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      {/* Main Content Container */}
      <div style={{ width: '80%', maxWidth: '733px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Welcome to Shambhala Spiritual Foundation</h2>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Awakening <span style={{ color: '#2F8479' }}>Inner Peace</span> to Transform Lives Worldwide
        </h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          At Shambhala Spiritual Foundation, we believe in the profound potential of every soul to achieve enlightenment and inner peace through meditation and mindful living. Our mission is to guide individuals on a spiritual journey of self-discovery, fostering a sense of unity, compassion, and purpose. Join us in creating a compassionate, enlightened society where everyone can realize their highest potential.
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          To Learn More, please <a href="#learn-more" style={{ color: '#3498db' }}>click here</a>.
        </p>
      </div>

      {/* Box 1 - Left Side */}
      <img 
        src={box1} 
        alt="Box 1" 
        style={{ position: 'absolute', left: '300px', top: '50%', transform: 'translateY(-50%)', width: '200px' }} 
      />

      {/* Box 2 - Top Right of H1 */}
      <img 
        src={box2} 
        alt="Box 2" 
        style={{ position: 'absolute', right: '400px', top: '20%', width: '200px' }} 
      />

      {/* Box 3 - Bottom Right of Text */}
      <img 
        src={box3} 
        alt="Box 3" 
        style={{ position: 'absolute', right: '300px', bottom: '30%', width: '200px' }} 
      />
    </div>
  );
}

export default ShambhalaComponent;

