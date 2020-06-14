import React, { Component } from 'react';

import PeopleInfo from './PeopleInfo'

export default class ListPeople extends Component {
    render() {
        const people = this.props.people;
        return (
            <div className="">
                {
                    people.map((pp) => {
                        return (
                            <div key="pp.url">
                                <h3 className="people-name">{pp.name}</h3>
                                <PeopleInfo peopleInfo={pp} />
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}