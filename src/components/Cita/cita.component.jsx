import React from "react";
import "./cita.styles.scss";

const Cita = ({ cita, eliminarCita}) => {
  return (
    <div className="cita">
      <p>Mascota: {cita.mascota}</p>
      <p>Dueño: {cita.propietario}</p>
      <p>Fecha: {cita.fecha}</p>
      <p>Hora: {cita.hora}</p>
      <p>Sintomas: {cita.sintomas}</p>
      <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
    </div>
  );
};

export default Cita;
