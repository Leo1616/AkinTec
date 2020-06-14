import React, { Component } from 'react';

import FilmInfo from './FilmeInfo'

export default class ListFilm extends Component {
    render() {
        const film = this.props.film;
        return (
            <div className="">
                {
                    film.map((ff) => {
                        return (
                            <div key="ff.url">
                                <h3 className="film-title">{ff.title}</h3>
                                <FilmInfo filmInfo={ff} />
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}