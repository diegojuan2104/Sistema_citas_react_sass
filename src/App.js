import React, { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Fragment>
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
        <div className>
        </div>

        <div className="banner-img"></div>
      </Fragment>
    </div>
  );
}

export default App;
