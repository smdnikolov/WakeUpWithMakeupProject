import React from 'react';
import services from './services';
import './styles.css';
import FlipCards from '../flip-cards';

const Services = () => {
  return (
    <div className="container">
      <h1 className="page-header">Услуги</h1>
      <div className="row services">
        <FlipCards arr={services} home={false} />
      </div>
    </div>
  );
};

export default Services;
