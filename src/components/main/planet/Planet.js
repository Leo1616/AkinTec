import React, { Component } from 'react';

import Axios from 'axios';
import ListPlanet from './ListPlanet';


export default class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: [],
        }
        this.getPlanet = this.getPlanet.bind(this);
    }

    componentDidMount() {
        this.getPlanet()

    }

    getPlanet() {
        return Axios.get("https://swapi.dev/api/planets/")
            .then((response) => {
                this.setState({ planet: response.data.results })

            })
    }

    render() {
        const { planet } = this.state;
        return (
            <div className="planet">
                <ListPlanet lanet planet={planet} />
            </div>
        );
    }
}