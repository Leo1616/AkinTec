import React, { Component } from 'react';

import { Card } from 'antd';

export default class FilmInfo extends Component {
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
        const infoFF = this.props.filmInfo;
        if (!this.state.expanded) {
            return <p className="btn btn-info" onClick={this.showInfo}>Mostrar</p>

        }
        return (
            <div className="site-card-border-less-wrapper">
                <Card bordered={false} style={{ width: 300 }}>

                    <p className="btn btn-warning" onClick={this.hideInfo}>Esconder</p>

                    <ul>
                        <li><h4>Id do episódio: <p>{infoFF.episode_id}</p></h4></li>
                        <li><h4>Rastreamento de abertura: <p>{infoFF.opening_crawl}</p></h4></li>
                        <li><h4>Produtor: <p>{infoFF.producer}</p></h4></li>
                        <li><h4>Data de lançamento: <p>{infoFF.release_date}</p></h4></li>
                        <li><h4>Data de lançamento: <p>{infoFF.release_date}</p></h4></li>
                        <li><h4>Criado: <p>{infoFF.created}</p></h4></li>
                        <li><h4>Editado: <p>{infoFF.edited}</p></h4></li>
                    </ul>
                </Card>

            </div>
        )
    }

}