import React from 'react';

import instagram from '../../utils/instagram.png';
import facebook from '../../utils/facebook.png';

const Footer = () => {
  return (
    <footer className="page-footer font-small teal pt-4">
      <div className="container-fluid text-center text-md-center">
        <div className="row">
          <div className="col">
            <div className="social-container">
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/permanent.makeup.elenayordanova"
              >
                <img src={facebook} width="30px" alt="" />
              </a>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/wake_up_with_makeup/"
              >
                <img src={instagram} width="30px" alt="" />
              </a>
            </div>
            <h5 className="text-uppercase font-weight-bold">
              The Online Market ©
            </h5>
            <h5 className="text-uppercase font-weight-bold">2020</h5>
            <div>
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/iconixar"
                title="iconixar"
              >
                iconixar&nbsp;
              </a>
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
