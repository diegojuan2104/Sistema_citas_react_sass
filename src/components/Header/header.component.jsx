import React, { Fragment } from 'react';
import Form from "../Form/form.component";
import Citas_dropdown from "../Citas_dropdown/citas_dropdown.component"

import "./header.styles.scss"

const Header = ({crearCita, citas, eliminarCita}) => {
    return (
        <Fragment>
            <header className="header">
                <div className="box">
                    <div className="title-box" >
                        <img className="logo" src={require("../../img/logo.svg")} />
                        <div><h1>Administrador de citas</h1></div>
                    </div>

                    <div className="header-content">
                        <Form crearCita={crearCita}/>
                        <Citas_dropdown citas ={citas} eliminarCita={eliminarCita}/>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;