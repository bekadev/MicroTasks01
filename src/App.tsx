import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./NestedComponets/Header/Header";
import {Map} from "./MethodMap/Map";
import {Button} from "./Button/Button";
import {Filter} from "./Filter/Filter";

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

  return (
        <div className="App">
        <Header name={'beka'}/>
        <Map students={students}/>
        <Button />
        <Filter />
    </div>
  );
}

export default App;
