import { useState } from 'react'

import './App.css'

function App() {

  // useState is responsible for changing the state
  // change doesn't mean that update value but change ko propogate kia jata hain UI ke ander
  // useState me default value kya dena chahten hain as true, false, '' , [], {} or anything
//  useState se 2 chizen milti hain array ke formate me
//  0 index pe counter and 1 index pe ek function hota hain usko setCounter
// setCounter ek method hain jo controle karega counter varible ko
  const [counter, setCounter] = useState(0)

  // let counter = 0;

  const addValue = () => {
    //counter += 1;
    setCounter(counter+1)
    //console.log("clicked", counter);
  }

  const removeValue = () => {
    //counter -= 1;
    setCounter(counter-1)
    //console.log("clicked", counter);
  }

  return (
    <>
      <h1>Hi, Abdul Rahman </h1>
      <h2>counter value : {counter}</h2>

      <button
        onClick={addValue}
      >increase value {counter}</button>

      <br />
      <button
        onClick={removeValue}
      >decrease value {counter}</button>
    </>
  )
}

export default App
