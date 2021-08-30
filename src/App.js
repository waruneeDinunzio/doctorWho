import React, { Component } from 'react';
import DivOne from './DivOne';
import DivTwo from './DivTwo';
import DivThree from './DivThree';
import './App.css';

class App extends Component {
  state = {
    tardis : {
      name: 'Time and Relative Dimension in Space',
      caps: false
    }
    
  }
  changeIt = (text) =>{
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
      <div>
        <h3 onClick={this.changeIt}> <DivThree tardis={this.state.tardis} /> </h3>
        {/*<h3 onClick={this.changeIt}>{this.state.tardis.name}</h3>*/}
      </div>
    );
  }
}

export default App;