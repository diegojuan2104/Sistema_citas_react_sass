import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header/header.component";

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];
  }



  //Arreglo de citas

  const [citas, guardarCitas] = useState([]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  // Use Effect para ralizar ciertas operaciones cuando el state cambia

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  }, [citas]);


  return (
    <Fragment>
      <Header crearCita={crearCita} citas = {citas} eliminarCita={eliminarCita}/>
    </Fragment>
  );
}

export default App;
