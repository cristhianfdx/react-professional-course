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
      showPersons: false,
    };
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Cristhian', age: 28 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  nameChangeHandler(event) {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 31 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Cristhian!')}
              changed={this.nameChangeHandler.bind(this)}
            >
              My Hobbies: Racing
            </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
        ) : null}
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
