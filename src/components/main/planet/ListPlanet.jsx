import React, { Component } from 'react';

import PlanetInfo from './PlanetInfo'

export default class ListPlanet extends Component {
    render() {
        const planet = this.props.planet;
        return (
            <div className="">
                {
                    planet.map((pl) => {
                        return (
                            <div key="pl.url">
                                <h3 className="planet-name">{pl.name}</h3>
                                <PlanetInfo planetInfo={pl} />
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}