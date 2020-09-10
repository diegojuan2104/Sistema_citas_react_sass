import React, { Fragment } from 'react';
import "./form.styles.scss"

const Form = () => {
    return (
        <Fragment>
            <form className="form">
                <h2>Crear cita</h2>
                <div className="form-fields">
                    <div className="input-box">
                        <input
                            type="text"
                            name="mascota"
                            placeholder="Nombre mascota"
                        ></input>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="propietario"
                            placeholder="Nombre del dueño"
                        ></input>
                    </div>

                    <div className="input-box">
                        <label htmlFor="fecha">Fecha y hora</label>
                        <input
                            type="date"
                            name="fecha"
                        ></input>
                        <input
                            type="time"
                            name="hora"
                        ></input>
                    </div>

                    <div className="input-box">
                        <textarea
                            name="sintomas"
                        ></textarea>
                    </div>

                    <div className="input-box">
                        <button
                            type="submit">
                            Agregar cita
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default Form;