import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>Contact Me</p>
        <div>

        <form action="http://localhost:3001/savecontact">
        <label>Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>

        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email"/><br/>

        <label>Comment</label>
        <input type="comment" id="comment" name="comment" placeholder="Your comment"/><br/>

        <input type="submit" value="Submit"/>
        </form>

        </div>
    </div>
  );
}

export default App;
