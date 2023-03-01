import React, { Component } from 'react';

class Blogs extends Component {
    render() {
        return (
            <div>
                <h1>Blogs</h1>
                <p> This is  my {this.props.name}</p>
            </div>
        );
    }
}

export default Blogs;