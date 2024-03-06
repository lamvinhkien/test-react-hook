import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav.js";
import { useState } from 'react';
import Customers from './Components/Customers.js';
import Count from './Components/Count.js';
import Name from './Components/Name.js';

function App() {

  let [name1, setName1] = useState("") // set event onChange for show name
  let [name2, setName2] = useState("") // set show name
  let [changeName, setChangeName] = useState("Add name") // set button name
  let [listCustomer, setListCustomer] = useState([
    { id: "1", name: "abc" },
    { id: "2", name: "xyz" },
  ]) // set list customer
  let [customer, setCustomer] = useState("") // set event onChange for list customer
  let [number, setCount] = useState(0) // set count number + -

  const handleEventClick = (event) => {
    if (!name1) {
      alert("Empty !!!")
    } else {
      setName2(name1)
      setChangeName("Change name")
      setName1("")
    }
  }

  const handleEventOnChange = (event) => {
    setName1(event.target.value);
  }

  const handleEventOnChange2 = (event) => {
    setCustomer(event.target.value);
  }

  const handleEventClick2 = (event) => {
    if (!customer) {
      alert("Empty !!!")
    } else {
      let newCustomer = { id: "abc", name: customer }
      setListCustomer([
        ...listCustomer, newCustomer
      ]);
      setCustomer("")
    }
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Data */}
        <Name  name2 = {name2} />
        <input type='text' value={name1} onChange={(event) => { handleEventOnChange(event) }} />
        <button type='button' onClick={(event) => handleEventClick(event)}>{changeName}</button>

        {/* List data */}
        <Customers myCustomers={listCustomer} />
        <input type="text" value={customer} onChange={(event) => { handleEventOnChange2(event) }} />
        <button type="button" onClick={(event) => { handleEventClick2(event) }}>Add customer</button>

        {/* Count */}
        <Count number={number} />
        <button type='button' onClick={() => { setCount(number + 1) }}>+</button>
        <button type='button' onClick={() => { setCount(number - 1) }}>-</button>
        
      </header>
    </div>
  );
}

export default App;
