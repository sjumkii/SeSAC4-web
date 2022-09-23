import React, { Component } from 'react';

class Handler_ex extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          title: 'Hello World!'
        };
    }

    render() {
        const { title } = this.state;
        return (
            <div>
                <h1>{ title }</h1>
                <button onClick={() => {
                    this.setState({ title: 'Goodbye World!'})
                }}>클릭</button>
            </div>
        );
    }
}

export default Handler_ex;