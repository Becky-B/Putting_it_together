import React from 'react'; 
import './App.css';

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div classname="App">
      <PersonCard firstname ="Jane" lastname = "Doe" age = {45} hairColor = "Black"/>
      <PersonCard firstname ="John" lastname = "Smith" age = {88} hairColor = "Brown"/>
    </div>
  );
}

export default App;
