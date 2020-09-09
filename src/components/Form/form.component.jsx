import React, { Fragment } from 'react';

const Form = () => {
    return (
        <Fragment>
            <h2>Crear cita</h2>
            <form>
                <label htmlFor="mascota">Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    placeholder="Nombre mascota"
                ></input>

                <label htmlFor="propietario">Nombre propietario</label>
                <input
                    type="text"
                    name="propietario"
                    placeholder="Nombre del dueño"
                ></input>

                <label htmlFor="fecha">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                ></input>
                <label htmlFor="hora">Hora</label>
                <input
                    type="time"
                    name="hora"
                ></input>

                <label htmlFor="sintomas">Sintomas</label>
                <textarea
                    name="sintomas"
                ></textarea>

                <button
                    type="submit">
                    Agregar cita
                </button>
            </form>
        </Fragment>
    );
}

export default Form;