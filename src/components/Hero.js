import React from "react";

function Hero() {
  return (
    <div className="bgimage">
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100 flex-row-reverse">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h4>Pumpin Pies!</h4>
            <p>
              An application that combines both workout planning and meal planning
              all into one.
            </p>
            <p>
              <a href="#" className="btn btn-primary btn-large">
                Get Started »
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
