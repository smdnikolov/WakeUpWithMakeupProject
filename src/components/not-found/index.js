import React from 'react';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1 className='page-header'>Страницата не е намерена</h1>
      <img src={'/404.png'} alt='' />
    </div>
  );
};
export default NotFound;
