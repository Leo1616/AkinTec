import React, { Component } from 'react';

import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


export default class Sign extends Component {

    render() {
        return (
            <div className="form">
                <label htmlFor="fieldId">Login</label>
                <InputText id="fieldId" type="text" />
                <label htmlFor="fieldId">Senha</label>
                <InputText id="fieldId" type="password" />
                <Button label="Entrar" className="p-button-warning" />
            </div>
        );
    }
}