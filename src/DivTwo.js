import React, { Component } from 'react';
import DivOne from './DivOne';

class DivTwo extends Component {
    render() {
        return (
            <div>
                <h3><DivOne tardis={this.props.tardis} /></h3>   
            </div>
            
        );
    }
}

export default DivTwo;