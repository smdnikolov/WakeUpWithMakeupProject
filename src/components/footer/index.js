import React from 'react';

import instagram from '../../utils/instagram.png';
import facebook from '../../utils/facebook.png';

const Footer = () => {
  const year = new Date().toISOString().substr(0, 4);

  return (
    <footer className='page-footer font-small teal pt-4'>
      <hr className='style-two' style={{ maxWidth: '90%' }}></hr>

      <div className='container-fluid text-center text-md-center'>
        <div className='row'>
          <div className='col'>
            <div className='social-container'>
              <a
                className='social'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/permanent.makeup.elenayordanova'>
                <img src={facebook} width='30px' alt='' />
              </a>
              <a
                className='social'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/wake_up_with_makeup/'>
                <img src={instagram} width='30px' alt='' />
              </a>
            </div>

            <div className='font-weight-bold'>Wake up with Makeup by Elena Yordanova</div>
            <div className='font-weight-bold'>All rights reserved</div>
            <div className='font-weight-bold'> © {year}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
