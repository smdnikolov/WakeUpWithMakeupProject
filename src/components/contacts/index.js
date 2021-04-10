import React from 'react';
import Map from './map';

const Contacts = () => {
  return (
    <div>
      <h1 className='page-header'>Контакти</h1>
      <h3>Телефон: </h3>
      <br />
      <span>+359 879 99 76 00</span>
      <div className='underline'></div>
      <h3>Електронна поща: </h3>
      <br /> <span>elenayordanova0440@gmail.com</span>
      <div className='underline'></div>
      <h3>Работно време: </h3>
      <br />
      <span> Всеки ден от 9:00 до 19:00</span>
      <div className='underline'></div>
      <h3>Адрес на салона: </h3>
      <br />
      <Map />
    </div>
  );
};

export default Contacts;
