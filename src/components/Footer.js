/**
  Footer Component that has useful links and info
**/
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light page-footer font-small blue pt-4 mt-5">
    <div className="container-fluid text-center text-md-left">
      <div className="row link-effect">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Pumpin Pies</h5>
          <p>Fitness planning made easy.</p>
        </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Frameworks & Libraries</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" data-hover="ReactJS">ReactJS</a>
              </li>
              <li>
                <a href="#!" data-hover="Bootstrap">Bootstrap</a>
              </li>
              <li>
                <a href="#!" data-hover="ReactBootstrap">ReactBootstrap</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">© 2019 Copyright:
        <a href="">
          Cristian Aspacio</a>
      </div>
    </footer>
    );
}

export default Footer;
