import React, { Component } from 'react';
class DivOne extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.tardis.name}</h3>
            </div>
        );
    }
}

export default DivOne;