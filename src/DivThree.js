import React, { Component } from 'react';
import DivTwo from './DivTwo';
class DivThree extends Component {
    render() {
        return (
            <div>
                <h3><DivTwo tardis={this.props.tardis} /></h3> 
            </div>
            
        );
    }
}

export default DivThree;