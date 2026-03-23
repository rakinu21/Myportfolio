import React from 'react';

const GraphicDesign = () => {
  const images = [1,2,3,4,5,6,7,8]; // Placeholder

  return (
    <div className="graphics-gallery">
      <h1>Graphic Design Portfolio</h1>
      <div className="gallery-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
        {images.map((img, index) => (
          <div key={index} className="gallery-item glass" style={{height: '200px', background: 'linear-gradient(45deg, var(--accent), #60a5fa)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'}}>
            <p>Design {img}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesign;
