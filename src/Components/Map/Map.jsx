import React from 'react';
import img_map from '../../assets/Images/Image (1).jpeg';

const Map = () => {
  return (
    <section className="map">
      <div className="map-image">
        <img src={img_map} alt="Map Image" />
      </div>
    </section>
  );
};

export default Map;