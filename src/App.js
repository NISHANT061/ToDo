import React from 'react';
import './App.scss';
import AddToDo from './Components/AddToDo/AddToDo';
import ShowToDo from './Components/ShowToDo/ShowToDO';


function App() {
  return (
    <div className="App">
      <div className="App-title"><h1>ToDo App</h1></div>
     <AddToDo/>
    </div>
  );
}

export default App;
