import React from 'react';
import { Link } from 'react-router-dom';
const FlipCards = (props) => {
  const listItems = props.arr.map((service) => {
    return (
      <div className="card-li" key={service.title}>
        <div className="flip-card-front-title">{service.title}</div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={service.image} alt="Avatar" />
            </div>
            <div className="flip-card-back circle">
              <span className="circle-content">
                {service.description.slice(0, 30)}
                <p>
                  {' '}
                  <Link className="card-link" to={service.link}>
                    Виж още
                  </Link>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <ul className="card-ul">{listItems}</ul>;
};
export default FlipCards;
