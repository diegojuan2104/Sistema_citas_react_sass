import React, { Fragment } from 'react';
import "./citas_dropdown.styles.scss"

import Cita from '../Cita/cita.component'

const Citas = ({ citas,eliminarCita }) => {
    return (<Fragment>
        <div className="citas">
            <h2>Citas</h2>

            {citas.length === 0 ? <p>No hay citas en el momento</p>:null}
            {citas.map(cita => (
                <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                />
            ))}
        </div>
    </Fragment>);
}

export default Citas;