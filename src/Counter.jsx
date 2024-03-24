import React from 'react';
import {useState} from 'react';
import "./styles/style.css";


const CounterDiv = ({counter, id, plus}) =>{
  return(
    <div id={id}>
          <span>-</span>
          {counter}
          <button onClick={() => plus(id, counter)}>+</button>
          <button>-</button>
          <br />
    </div>
  )
}


const Counter = () => {
  const [divs, setDivs] = useState([{id: 1, counter:1, children: []}])
  const [id, setId] = useState(1);
  const [counter, setCounter] = useState(1);
    
  const plus = (id, counter) =>{
    const newDiv = {id: id+1, counter: counter+1, children:[]}
    setId(id + 1);
    console.log(id)
    setCounter(counter + 1);
    console.log(counter)

    setDivs([...divs, newDiv])
    console.log(divs)
  };


  return (
    <div>
      {divs.map((div) => (
        <CounterDiv key={div.id} counter={div.counter} plus={plus} />
      ))}
    </div>
  );
}

export default Counter; 