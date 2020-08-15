import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-content';
import authContext from '../../context/auth-content';


const cockpit =(props) => {

    const toggleBtnRef = useRef(null);
    
    const authContext =useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');
    //   setTimeout(() =>{
    //     alert('Saved data to cloud!');
    // }, 1000);
    
toggleBtnRef.current.click();

    return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
    }
    }, []); // array tells that useeffect() will only run for the first time and will never runs again.

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }   
    })


    const assignedClass =[];
    let btnClass='';
    if(props.showPersons){
        btnClass=classes.Red;
    }
    
if(props.personsLength <= 2){
  assignedClass.push(classes.red);
}
if(props.personsLength <= 1) {
  assignedClass.push(classes.bold);
}

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>    
            <p className={assignedClass.join('')}>This is really working</p>
            <button ref={toggleBtnRef} 
            className={btnClass} onClick={props.clicked}>
                Toogle Persons
            </button>


             <button onClick={authContext.login}>Log in</button>


        </div>
    
    );
}

export default React.memo(cockpit);



