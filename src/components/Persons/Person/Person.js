import React, { Component } from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-content';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef(); //any reference object
    }

    static contextType = AuthContext;

    componentDidMount() {
       // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);    
    }
    

    render(){
        console.log('[Person.js] rendering ...');
    
        return(
            
            <Aux>
        
         {this.context.authenticated ? <p>Authenticated</p>: <p>Please Login</p>}
        
                <p onClick={this.props.click}> 
                I'm  {this.props.name}  and I am  
                {this.props.age}  Years old </p>
                <p key="i2">{this.props.children}</p>
        <input 
        key="i3"
       // ref={(inputEl) => {this.inputElement = inputEl}}
       ref={this.inputElementRef}
        type="text" 
        onChange={this.props.changed}
         value={this.props.name}></input>
    
</Aux>            
        );
    }
}

Person.propTypes ={

    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
