import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <h3>{this.props.description}</h3>
                    <p>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default Content;