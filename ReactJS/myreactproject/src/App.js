import './App.css';
import Rahul, { Ricky } from './Rahul';
import Person from "./Components/Person";
// import Man from "./Components/Man";
import {Man} from "./Components/Man";
function App() {
   return (
     <>
     <h1 className='App'>Hello</h1>
     <Rahul name="Rocky"/>
     <Ricky name="Ricky"/>
    <Person></Person>
    <Person></Person>
    <Man/>
     </>
   );
   
//   const name = "Learner";
 
// const element = (
//     <h1>
//         Hello,
//         {name}.Welcome to GeeksforGeeks.
//     </h1>
//);
}

export default App;
