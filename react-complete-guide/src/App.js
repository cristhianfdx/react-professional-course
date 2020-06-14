import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Cristhian', age: 31 },
        { name: 'Stephanie', age: 26 },
      ],
    };
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Lucy', age: 28 },
        { name: 'Cristhian', age: 31 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies:{' '}
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

// Functional Component

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Cristhian', age: 31 },
//       { name: 'Stephanie', age: 26 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Lucy', age: 28 },
//         { name: 'Cristhian', age: 31 },
//         { name: 'Stephanie', age: 26 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My Hobbies: Racing
//       </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// };

export default App;
