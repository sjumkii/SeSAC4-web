import React, {Component} from "react";

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "1",
            age: 1
        }
    }

    componentDidMount() {
        console.log( "componentDidMount");
    }

    comonentDidUpdate(props, state){
        console.log("componentDidUpdate");
        console.log("props : ", props );
        console.log("State : ", state );
        console.log("this.state : ", this.state );
        if (state.age != this.state.age ) {
            console.log("age change");
        }
    }

    componenWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>
                라이프사이클 {this.state.name}
                <button onClick={() => {this.setState({name: 'hi'})}}>버튼</button>
                <button onClick={() => {this.setState({age: 2})}}>버튼</button>
            </div>
        )
    }
}
 
export default LifeCycle;