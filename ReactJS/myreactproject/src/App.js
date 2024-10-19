import './App.css';
// import Rahul, { Ricky } from './Rahul';
// import Person from "./Components/Person";
// // import Man from "./Components/Man";
// import {Man} from "./Components/Man";
// import Personn from "./Jsx/Person";
//import Rproperties from './Components/Rproperties';
//import Democounting from './Components/Democounting';
import Personn from './Components/Personn';
import Person from './Components/Person/Person.js';
import { Component } from 'react';
class App extends Component 
{
  constructor(props)
  {
    super(props)
    this.props=props;
    this.state={
      demo:"Testing",
    };
  }
  //event handling with arrow function
  // buttonClickHandler = () =>{
  //   // alert("Hello");
  //   console.log(this.state={});
    
  // };
  //event binding with handling
  buttonClickHandler(){
    // alert("Hello");
    console.log(this.state);
    
  };
  render()
  {
     return(
     <>
     <h1 className='App'>Hello</h1>
     {/* <Rahul name="Rocky"/>
     <Ricky name="Ricky"/>
    <Person></Person>
    <Person></Person>
    <Personn/>
    <Man/> */}

      {/* <Rproperties name="Rahul"/>
      <Democounting number="1"></Democounting>
      <Rproperties name="Rocky"/>
      <Democounting number="2"></Democounting>
      <Rproperties/>
      <Democounting number="3"></Democounting> */}
      <Personn name="Rahul Sanghavi" age="36"/>
      <Person name="Tops Technologies... " age="15"/>
      {/* <button type='submit' onClick={() => this.buttonClickHandler()}>Click Here</button> */}
      <button type='submit' onClick={this.buttonClickHandler.bind(this)}>Click Here</button>
      <label className="Label">Testing - Rahul</label>
     </>
     );
  }  
//   const name = "Learner";
 
// const element = (
//     <h1>
//         Hello,
//         {name}.Welcome to GeeksforGeeks.
//     </h1>
//);
}

export default App;
