import React,{Component} from 'react';
import PersonStyle from "./Person.module.css";

class Person extends Component
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
            <div className={PersonStyle.personBox}>
                <h1 style={{color:"red",backgroundColor:"yellow"}}>
                    <label>Name : </label><i>{this.props.name}</i> <br/>
                    <label>Age : </label><i>{this.props.age}</i> <br/>
                </h1>
                <label className={PersonStyle.Label}>TEsting-tops</label>
            </div>
        );
    }
}
export default Person;