import React from 'react';
import './App.css';
import contacts from "./contacts.js";
import Card from "./Card.jsx";






function App() {
  return (
    <div className="App">
      
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card 
        name={contacts[0].name}
        imgURL ={contacts[0].imgURL}
        phone= {contacts[0].phone}
        email={contacts[0].email}
        />
        <Card 
        name={contacts[1].name}
        imgURL ={contacts[1].imgURL}
        phone= {contacts[1].phone}
        email={contacts[1].email}
        />
        <Card 
        name={contacts[2].name}
        imgURL ={contacts[2].imgURL}
        phone= {contacts[2].phone}
        email={contacts[2].email}
        />
    </div>
  


    </div>
  );
}

export default App;
