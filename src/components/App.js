import React, { Component } from 'react';
import Home from './Home'
import Navbar from './Navbar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home locale={this.props.locale} />
      </div>
    );
  }
}

export default App;
