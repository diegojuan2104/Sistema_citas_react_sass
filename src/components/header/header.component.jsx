import React, { Fragment } from 'react';
import Form from "../Form/form.component";
import Citas from "../Citas/citas.component"

import "./header.styles.scss"

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <div className="box">
                    <div className="title-box" >
                        <img className="logo" src={require("../../img/logo.svg")} />
                        <div><h1>Administrador de citas</h1></div>
                    </div>

                    <div className="header-content">
                        <Form />
                        <Citas/>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;