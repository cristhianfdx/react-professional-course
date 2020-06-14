import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Cristhian', age: 31 },
        { id: 3, name: 'Stephanie', age: 26 },
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={index}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        {/* {this.state.showPersons === true ? (
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
        ) : null} */}
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
