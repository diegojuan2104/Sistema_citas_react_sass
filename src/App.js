import React, { Fragment, useState } from "react";
import Header from "./components/Header/header.component";

function App() {
  //Arreglo de citas

  const [citas, guardarCitas] = useState([]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <Header crearCita={crearCita} />
    </Fragment>
  );
}

export default App;
