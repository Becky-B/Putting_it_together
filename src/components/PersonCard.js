import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    addYear = ()=>{
            this.setState({age : this.state.age + 1});
                              // this.state.position = "Off"
    }


    render(){
        const {firstname, lastname, age, hairColor}= this.props;
        return(
            <div>
                <h1>{lastname}, {firstname}</h1>
                <p>Age : {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = { this.addYear }>Birthday Button for {firstname} {lastname}  </button>
            </div>
        );
    }

}

export default PersonCard;
