import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';


class Nav extends Component {

    render() {

        const menuitems = [
            {
                label: 'Pessoas',
                icon: 'pi pi-fw pi-user',
                command: () => this.props.history.push('/People')

            },
            {
                label: 'Planetas',
                icon: 'pi pi-fw pi-circle-on',
                command: () => this.props.history.push('/Planet')
            },
            {
                label: 'Filmes',
                icon: 'pi pi-fw pi-video',
                command: () => this.props.history.push('/Film')

            },
            {
                label: 'Sign in',
                command: () => this.props.history.push('/Sign'),
                disabled: true

            },
            {
                label: 'Register',
                command: () => this.props.history.push('/Register'),
                disabled: true

            },
            {
                label: 'Pesquisar',
                icon: 'pi pi-fw pi-search',
                disabled: true
            }
        ];

        return (
            <div className="nav">
                <Menubar model={menuitems} className="menubar" />
            </div>

        );
    }


}

export default withRouter(Nav);