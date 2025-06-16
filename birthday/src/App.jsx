import React, { useState } from 'react';
import pic1 from '/pic1.jpeg';
import pic2 from '/pic2.jpeg';
import pic3 from '/pic3.jpeg';
import pic4 from '/pic4.jpeg';
import pic5 from '/pic5.jpeg';
import pic6 from '/pic6.jpeg';
import pic7 from '/pic7.jpeg';
import { useNavigate } from 'react-router-dom';
export default function ImageSlider() {
  const navigate = useNavigate();
  const images = [pic1, pic2, pic3, pic4,pic5,pic6,pic7];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url('./sunflower1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '5vh' }}>Happy Birthday Meri Jaan ❤️❤️</h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3vw',
        }}
      >
        <button
          onClick={prevImage}
          style={{
            fontSize: '2rem',
            background: 'transparent',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ←
        </button>
        <img
          src={images[currentIndex]}
          alt={`pic${currentIndex + 1}`}
          style={{
            height: '65vh',
            border: '10px solid #f0e8c6',
            borderRadius: '10px',
          }}
        />

        
        <button
          onClick={nextImage}
          style={{
            fontSize: '2rem',
            background: 'transparent',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          →
        </button>
      </div>
      <button
        onClick={() => navigate('/next')}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          fontSize: '2.5rem',
          background: 'transparent',
          color: 'wheat',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        ➡️
      </button>
    </div>
  );
}
