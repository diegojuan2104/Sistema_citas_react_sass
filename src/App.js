import React, { Fragment } from "react";
import Form from "./components/Form/form.component";

function App() {
  return (
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
              <h1>Administrador de Pacientes</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-1-of-2">
            <Form/>
          </div>
          <div class="col-1-of-2">CITAS</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
