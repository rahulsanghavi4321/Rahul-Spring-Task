import React, { Component } from 'react';

class Personn extends Component
{
    constructor
    (props)
    {
        super(props);
        console.log(props);
        
        this.props=props;
        this.state={};
    }
    render(){
        return(
            <div>
                <h1>
                    <label>Name : </label><i>{this.props.name}</i> <br/>
                    <label>Age : </label><i>{this.props.age}</i> <br/>
                </h1>
            </div>
        );
    }
}
export default Personn;