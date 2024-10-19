import React, { Component } from 'react';

class Person extends Component
{
    render()
    {
        // return React.createElement("div",{class:"App-header"},
        //     React.createElement("h1",null,
        //         React.createElement("i",null,"Tops Technologies Pvt. Ltd.")));

        return (
            <div className="App-header">
                <i><h1>Tops Technologies Pvt. Ltd.</h1></i>
            </div>
        );
    }
}
export default Person;