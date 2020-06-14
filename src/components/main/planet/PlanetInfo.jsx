import React, { Component } from 'react';

import { Card } from 'antd';

export default class PlanetInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }

        this.showInfo = this.showInfo.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
    }

    showInfo() {
        this.setState({ expanded: !this.state.expanded })
    }

    hideInfo() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const infoPL = this.props.planetInfo;
        if (!this.state.expanded) {
            return <p className="btn btn-info" onClick={this.showInfo}>Mostrar</p>

        }
        return (
            <div className="site-card-border-less-wrapper">
                <Card bordered={false} style={{ width: 300 }}>

                    <p className="btn btn-warning" onClick={this.hideInfo}>Esconder</p>

                    <ul>
                        <li><h4>Nome: <p>{infoPL.rotation_period}</p></h4></li>
                        <li><h4>Peoríodo de rotação: <p>{infoPL.orbital_period}</p></h4></li>
                        <li><h4>Diâmetro: <p>{infoPL.diameter}</p></h4></li>
                        <li><h4>Clima: <p>{infoPL.climate}</p></h4></li>
                        <li><h4>Gravidade: <p>{infoPL.gravity}</p></h4></li>
                        <li><h4>Terreno: <p>{infoPL.terrain}</p></h4></li>
                        <li><h4>Água da superfície: <p>{infoPL.surface_water}</p></h4></li>
                        <li><h4>Poupulação: <p>{infoPL.population}</p></h4></li>
                        <li><h4>Criado: <p>{infoPL.created}</p></h4></li>
                        <li><h4>Editado: <p>{infoPL.edited}</p></h4></li>
                    </ul>
                </Card>

            </div>

        );
    }

}