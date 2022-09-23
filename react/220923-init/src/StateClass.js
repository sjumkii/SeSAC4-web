import React, {Component} from 'react';


class StateClass extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: "SeSAC",
    //         list: ['s', 'e', 's', 'a', 'c']
    //     };
    // }
    state = {
        name: "SeSAC",
        cnt: 0,
        list: ['s', 'e', 's', 'a', 'c']
    };

    render(){
        return(
            <div>
                <div>{this.props.name} StateClass</div>
                <button onClick = {()=>{
                    // this.seState({name: "청년취업사관학교", cnt: this.state.cnt +1});
                    // this.seState({name: "영등포 캠퍼스", cnt: this.state.cnt +1});
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    })
                    }}> 클릭 </button> 
                <button onClick = {()=>{this.setState({list: ['c', 'l', 'i']})}}> 클릭2 </button> 
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        )         
    }
}
export default StateClass;

// var car1 = new Car();
// car1.getName();
// car1.name;
// class Car {
//     constructor(){

//     }
// }