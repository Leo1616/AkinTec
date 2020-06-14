import React, { Component } from 'react';

import Axios from 'axios';
import ListFilm from './ListFilm';


export default class Film extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: [],
        }
        this.getFilm = this.getFilm.bind(this);
    }

    componentDidMount() {
        this.getFilm();
        console.log("componentDidMount()");
    }

    getFilm() {
        return Axios.get("https://swapi.dev/api/films/")
            .then((response) => {
                console.log(response.data.results);
                this.setState({ film: response.data.results })
            })
    }

    render() {
        const { film } = this.state;
        return (
            <div className="film">
                <ListFilm film={film} />
            </div>
        );
    }
}