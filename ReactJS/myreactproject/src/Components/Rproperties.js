import React, { Component } from "react";

class Rproperties extends Component
{
    constructor(props)
    {
        super(props);
        this.props=props;
        this.state={
            sname:"Rocky",
            city:"S.nagar",
        }
    }
    nameChangeHandler()
    {
        console.log(this.state);
        this.setState({sname:"Rohit"},()=>{console.log(this.state)});
    }
    render()
    {
        return(
            <>
            <h1>Dear {this.props.name},Welcome to Tops Technologies</h1>
            <h1>Dear {this.state.sname} from {this.state.city},Welcome to Tops Technologies</h1>
            <br/>
            <button onClick={() => this.nameChangeHandler()}>Click Here</button>
            </>
        );
    }
}
export default Rproperties;