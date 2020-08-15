import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component   {

  static getDerivedStateFromProps (props, state){
    console.log('[Person.js] getDerivedStateFromProps ');
  }

  componentWillReceiveProps(props){
    console.log('[Person.js] componentWillReceiveProps',props);
  }

  shouldComponentUpdate (nextProps, nextstate){
    console.log('[Person.js] shouldComponentUpdate');
    if(
      nextProps.persons !== this.props.persons || 
      nextProps.changed !== this.props.changed || 
      nextProps.clicked !== this.props.clicked
      ) {
      return true;
    } else {
      return false;
    } 
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate()
  {
    console.log('[Person.js] componentDidUpdate');
  }

  componentWillMount() {
    console.log('[Person.js] componentWillMount');
  }

  render(){
    console.log('[Person.js] rendering ...');
return this.props.persons.map((person, index)=>{
    return(
  <Person
  click ={() => this.props.clicked(index)}
  name={person.name}
  age ={person.age}
  key={person.id}
  changed={event => this.props.changed(event, person.id)}
  isAuth={this.props.isAuthenticated}
  >
  </Person>
);
    })
  }
}

      export default Persons;
