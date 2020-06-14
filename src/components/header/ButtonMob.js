import React, { Component } from 'react';

export default class ButtonMob extends Component {

    constructor() {
        super();
        this.state = {
            visNav: 'flex'
        }
    }


    clickMenu() {
        if (this.state.visNav === 'flex') {
            this.setState({
                visNav: 'none'
            });
        } else {
            this.setState({
                visNav: 'flex'
            });
        }
        document.querySelector('.nav').style.display = this.state.visNav;

    }


    render() {
        return (
            <div className="button-mob">
                <img src="/img/iconmenu.png" alt="Botão Mobile" onClick={this.clickMenu.bind(this)} />
            </div>
        );
    }
}