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
      <>
        <div className="container">
          <h1 className="page-header">{service.title}</h1>
          <div
            className="heading"
            style={{
              background: `url(${service.image}) no-repeat center`,
              marginBottom: '50px',
              WebkitBackgroundSize: 'cover',
              MozBbackgroundSize: 'cover',
              OBackgroundSize: 'cover',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="row">
            <div className="col">
              <p
                style={{
                  textAlign: 'justify',
                }}
              >
                {service.description}
              </p>
              <div className="service-row">
                <div className="underline" />
                <h3>Ползи</h3>
                <div className="underline" />
                <p
                  style={{
                    textAlign: 'center',
                  }}
                >
                  {service.benefits}
                </p>
                <div className="underline" />
                <h3>Етапи</h3>
                <div className="underline" />
                <ul className="stages">
                  {service.stages.map((x, index) => {
                    return (
                      <li className="stage" key={index}>
                        <img
                          src={x[Object.keys(x)[0]]}
                          style={{ width: '50px' }}
                          alt=""
                        />
                        <p>
                          {index + 1}. {Object.keys(x)[0]}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Service;
