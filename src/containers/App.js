import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/WithClass';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-content';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

state = {
persons: [
  {id: 'asfa1', name: 'Max', age: 28},
  {id: 'vasdf1', name: 'Manu', age: 29},
  {id: 'asdf11', name: 'Stepanie', age: 26}
],
otherState: 'some other state',
showPersons: false,
showCockpit: true,
changeCounter: 0,
authenticated: false
}

static getDerivedStateFromProps (props, state){
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
}

componentWillMount(){
  console.log('[App.js] componentWillMount');
}

componentDidMount (){
  console.log('[App.js] componentDidMount');
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate ');
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

nameChangeHandler =(event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id ===id;
  });

const person ={
  ...this.state.persons[personIndex]
};

person.name =event.target.value;

const persons =[... this.state.persons];
persons[personIndex]=person;

this.setState((prevState, props) => {
  return {

  persons: persons,
  changeCounter: prevState.changeCounter +1

  }
})

}


deletePersonHandler =(personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons: persons});
}

tooglePersonHandler =() => {
  const doesShow =this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

loginHandler =() => {
this.setState({authenticated: true})
}

  render() {
    console.log('[App.js] render');
    

    const style ={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
};
let persons = null;

if(this.state.showPersons) {
  persons = 
<Persons 
  persons={this.state.persons}
  clicked={this.deletePersonHandler}
  changed={this.nameChangeHandler}>
  isAuthenticated={this.state.authenticated}  
</Persons>
  
}
    return (
     <Aux> 
        <button onClick={() => {this.setState({showCockpit: false});
      }}>

        Remove Cockpit
        </button>

      <AuthContext.Provider value={{
        authenticated: this.state.authenticated, 
        login: this.loginHandler}}>

        {this.state.showCockpit ? 
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.tooglePersonHandler}
        login={this.loginHandlerc}
        >
        </Cockpit> : null}
  {persons}   
  </AuthContext.Provider>
</Aux>

    );
  }
}

export default withClass(App, classes.App);
