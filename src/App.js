import React from 'react';
import './App.css';
import contacts from "./contacts.js";
import Card from "./components/Card.jsx";
import Avatar from "./components/Avatar";

function createCard(contact) {
  return (
    <Card 
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone= {contact.phone}
      email={contact.email}
    />)
}




function App() {
  return (
    <div className="App">
      
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGbWN0KpNPejhkQTGODE5zp7_P03OvFNaf8g&usqp=CAU" />

      {contacts.map(createCard)}

      {/* <Card 
        name={contacts[0].name}
        img ={contacts[0].imgURL}
        phone= {contacts[0].phone}
        email={contacts[0].email}
        />
        <Card 
        name={contacts[1].name}
        img ={contacts[1].imgURL}
        phone= {contacts[1].phone}
        email={contacts[1].email}
        />
        <Card 
        name={contacts[2].name}
        img ={contacts[2].imgURL}
        phone= {contacts[2].phone}
        email={contacts[2].email}
      />*/}
    </div>
  


    </div>
  );
}

export default App;
