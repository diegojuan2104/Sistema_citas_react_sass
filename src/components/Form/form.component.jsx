import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import "./form.styles.scss";
import PropTypes from 'prop-types';

const Form = ({crearCita}) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();
    console.log("Enviando...");

    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    cita.id = uuid();

    crearCita(cita);
  };

  return (
    <Fragment>
      <form className="form" onSubmit={submitCita}>
        <h2>Crear cita</h2>

        {error ? (
          <p className="alerta-error">Todos los campos son obligatorios</p>
        ) : null}

        <div className="form-fields">
          <div className="input-box">
            <input
              type="text"
              name="mascota"
              placeholder="Nombre mascota"
              value={mascota}
              onChange={actualizarState}
            ></input>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="propietario"
              placeholder="Nombre del dueño"
              onChange={actualizarState}
              value={propietario}
            ></input>
          </div>

          <div className="input-box">
            <label htmlFor="fecha">Fecha y hora</label>
            <input
              type="date"
              name="fecha"
              onChange={actualizarState}
              value={fecha}
            ></input>
            <input
              type="time"
              name="hora"
              onChange={actualizarState}
              value={hora}
            ></input>
          </div>

          <div className="input-box">
            <textarea
              name="sintomas"
              onChange={actualizarState}
              value={sintomas}
            ></textarea>
          </div>

          <div className="input-box">
            <button type="submit">Agregar cita</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};


Form.propTypes = {
  crearCita : PropTypes.func.isRequired
}

export default Form;
