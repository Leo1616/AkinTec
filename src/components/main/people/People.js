import React, { Component } from 'react';

import Axios from 'axios';
import ListPeople from './ListPeople';


export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
        this.getPeople = this.getPeople.bind(this);
    }

    componentDidMount() {
        this.getPeople()
    }

    getPeople() {
        return Axios.get("https://swapi.dev/api/people/")
            .then((response) => {
                this.setState({ people: response.data.results })
                console.log(response.data.results);

            })
    }

    render() {
        const { people } = this.state;
        return (
            <div className="people">
                <ListPeople people={people} />
            </div>
        );
    }
}