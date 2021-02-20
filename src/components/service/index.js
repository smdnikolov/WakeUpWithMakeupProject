import React from 'react';
import services from '../services/services';
import NotFound from '../not-found';

const Service = (props) => {
  let serviceTitle = props.location.pathname.split('/')[
    props.location.pathname.split('/').length - 1
  ];
  let titles = [];
  services.forEach((x) => {
    titles.push(x.title.toLocaleLowerCase().replaceAll(' ', '-'));
  });
  const service = services.filter(
    (x) => x.title.toLocaleLowerCase().replaceAll(' ', '-') === serviceTitle
  )[0];

  if (!titles.includes(serviceTitle)) {
    return <NotFound />;
  } else {
    return (
      <div className="container">
        <h1 className="page-header">{service.title}</h1>
        <p>{service.description}</p>
      </div>
    );
  }
};

export default Service;
