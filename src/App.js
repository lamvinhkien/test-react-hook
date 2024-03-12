import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav.js";
import { useEffect, useState } from 'react';
import Customers from './Components/Customers.js';
import Count from './Components/Count.js';
import Name from './Components/Name.js';
import Shoes from './Components/Shoes.js';


function App() {

  let [name1, setName1] = useState("") // set event onChange for show name
  let [name2, setName2] = useState("") // set show name
  let [changeName, setChangeName] = useState("Add name") // set button name
  let [listCustomer, setListCustomer] = useState([
    { id: "1", name: "abc", type: "A" },
    { id: "2", name: "xyz", type: "B" },
    { id: "3", name: "mnp", type: "A" },
    { id: "4", name: "ljk", type: "B" },
  ]) // set list customer
  let [customer, setCustomer] = useState("") // set event onChange for list customer

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
      let newCustomer = { id: Math.floor(Math.random() * 100) + 1, name: customer, type: "A" }
      setListCustomer([
        ...listCustomer, newCustomer
      ]);
      setCustomer("")
    }
  }

  const DeleteCustomer = (id) => {
    let customer = listCustomer.filter(item => item.id !== id)
    setListCustomer(customer)
  }

  // useEffect(()=>{
  //   console.log("Change name successful")
  // }, [name2])

  // useEffect(()=>{
  //   console.log("List Customer KKK")
  // }, [listCustomer])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* Data */}
        {/* <Name name2={name2} />
        <input type='text' value={name1} onChange={(event) => { handleEventOnChange(event) }} />
        <button type='button' onClick={(event) => handleEventClick(event)}>{changeName}</button> */}

        {/* List data */}
        {/* <Customers
          title={"All customer"}
          listCustomer={listCustomer}
          DeleteCustomer={DeleteCustomer}
        />

        <Customers
          title={"Type A"}
          listCustomer={listCustomer.filter(item => item.type === "A")}
          DeleteCustomer={DeleteCustomer}
        />

        <input type="text" value={customer} onChange={(event) => { handleEventOnChange2(event) }} />
        <button type="button" onClick={(event) => { handleEventClick2(event) }}>Add customer</button> */}

        {/* Count */}
        <Shoes/>
      </header>


    </div>
  );
}

export default App;
