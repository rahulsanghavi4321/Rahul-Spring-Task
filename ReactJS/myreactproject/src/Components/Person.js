import React,{Component} from 'react';
import {Man} from "./Man";
class Person extends Component
{
    render()
    {
        return(
            <div>
                    <h2>NAme : Rahul Sanghavi</h2>
                    <h2>Age : 36</h2>
                    <Man />
            </div>
        );
    }
}
export default Person;