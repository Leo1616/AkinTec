import React, { Component } from 'react';

// Lib menu
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/luna-amber/theme.css'
import 'primereact/resources/primereact.min.css'
//Css
import '../src/App.css';
import Header from './components/Header'

class App extends Component {

  render() {

    return (
      <div className="app">
        <Header />
        <div id="main">
          <main>
            <div className="container" id="container">
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;