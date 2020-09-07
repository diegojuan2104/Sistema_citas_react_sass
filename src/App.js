import React, { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Fragment>
        <div className="banner">
          <div className="row">
            <div className="header">
              <div className="header-content">
                <img
                  alt="logo"
                  className="logo"
                  src={require("./img/cita-medica.png")}
                ></img>
                <h1>PROGRAMADOR DE CITAS</h1>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-1-of-2">FORM</div>
            <div class="col-1-of-2">CITAS</div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
