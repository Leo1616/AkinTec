import React, { Component } from 'react';

import { Card } from 'antd';

import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';

export default class PeopleInfo extends Component {
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
        const infoPP = this.props.peopleInfo;
        if (!this.state.expanded) {
            return <p className="btn btn-info" onClick={this.showInfo}>Mostrar</p>

        }
        return (
            <div className="site-card-border-less-wrapper">
                <Card bordered={false} style={{ width: 300 }}>

                    <p className="btn btn-warning" onClick={this.hideInfo}>Esconder</p>

                    <ul>
                        <li><h4>Altura: <p>{infoPP.height}</p></h4></li>
                        <li><h4>Massa: <p>{infoPP.mass}</p></h4></li>
                        <li><h4>Cor de cabelo: <p>{infoPP.hair_color}</p></h4></li>
                        <li><h4>Cor da pele: <p>{infoPP.skin_color}</p></h4></li>
                        <li><h4>Cor dos olhos: <p>{infoPP.eye_color}</p></h4></li>
                        <li><h4>Ano de nascimento: <p>{infoPP.birth_year}</p></h4></li>
                        <li><h4>Gênero: <p>{infoPP.gender}</p></h4></li>
                    </ul>
                </Card>

            </div>
        )
    }

}