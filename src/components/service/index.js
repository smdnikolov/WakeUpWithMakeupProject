import React, { useEffect } from 'react';
import services from '../services/services';
import NotFound from '../not-found';

const Service = (props) => {
  let serviceTitle = props.location.pathname.split('/')[props.location.pathname.split('/').length - 1];
  let titles = [];
  services.forEach((x) => {
    titles.push(x.title.toLocaleLowerCase().replaceAll(' ', '-'));
  });
  const service = services.filter((x) => x.title.toLocaleLowerCase().replaceAll(' ', '-') === serviceTitle)[0];

  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map((str, index) => <p key={index}>{str}</p>);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!titles.includes(serviceTitle)) {
    return <NotFound />;
  } else {
    return (
      <>
        <div className='container'>
          <h1 className='page-header'>{service.title}</h1>
          <div
            className='heading'
            style={{
              background: `url(${service.image}) no-repeat center`,
              marginBottom: '50px',
              WebkitBackgroundSize: 'cover',
              MozBbackgroundSize: 'cover',
              OBackgroundSize: 'cover',
              backgroundSize: 'cover',
            }}></div>
          <div className='row'>
            <div className='col'>
              <div className='text-content'>{service.description}</div>
              <div className='service-row'>
                {service.benefits ? (
                  <>
                    <div className='underline' />
                    <h3>Ползи</h3>
                    <div className='underline' />
                    <div className='text-content'>{service.benefits}</div>
                  </>
                ) : null}

                {service.stages ? (
                  <>
                    <div className='underline' />
                    <h3>Етапи</h3>
                    <div className='underline' />
                    <ul className='stages'>
                      {service.stages.map((x, index) => {
                        return (
                          <li className='stage' key={index}>
                            <img src={x[Object.keys(x)[0]]} style={{ width: '50px' }} alt='' />
                            <p>
                              {index + 1}. {Object.keys(x)[0]}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}

                {service.preparation ? (
                  <>
                    <div className='underline'></div>
                    <h3>Подготовка за процедурата</h3>
                    <div className='underline'></div>
                    <div className='text-content'>
                      <NewlineText text={service.preparation} />
                    </div>
                  </>
                ) : null}

                {service.sideEffectsAbsolute && service.sideEffectsMinor ? (
                  <>
                    <div className='underline'></div>
                    <h3> Противопоказания</h3>
                    <div className='underline'></div>
                    <div className='row'>
                      <div className='col'>
                        <h2 style={{ textDecoration: 'underline' }}>Абсолютни:</h2>
                        <div className='text-content'>
                          <NewlineText text={service.sideEffectsAbsolute} />
                        </div>
                      </div>

                      <div className='col'>
                        <h2 style={{ textDecoration: 'underline' }}>Относителни:</h2>
                        <div className='text-content'>
                          <NewlineText text={service.sideEffectsMinor} />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                {service.recovery ? (
                  <>
                    <div className='underline'></div>
                    <h3>Възстановяване</h3>
                    <div className='underline'></div>
                    <div className='text-content'>
                      <NewlineText text={service.recovery} />
                    </div>
                  </>
                ) : null}

                {service.care ? (
                  <>
                    <div className='underline'></div>
                    <h3>Последваща Грижа</h3>
                    <div className='underline'></div>
                    <div className='text-content'>
                      <NewlineText text={service.care} />
                    </div>
                  </>
                ) : null}

                {service.custom ? (
                  <>
                    {service.custom.map((element, index) => {
                      return (
                        <div key={index}>
                          <div className='underline'></div>
                          <h3>{Object.keys(element)}</h3>
                          <div className='underline'></div>
                          {Object.keys(element)[0] === 'Времетраене' ? (
                            <div className=''>
                              <NewlineText text={Object.values(element)[0]} />
                            </div>
                          ) : (
                            <div className='text-content'>
                              <NewlineText text={Object.values(element)[0]} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                ) : null}

                {service.last ? (
                  <div>
                    <br></br>
                    <div className='underline'></div>
                    <div style={{ textAlign: 'justify' }}>{service.last}</div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Service;
