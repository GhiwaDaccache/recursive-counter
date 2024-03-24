import React from 'react';
import {useState} from 'react';
import "./styles/style.css";

const divs = [{id: 1, counter: 1, children: []}];
let id=1;

const CounterDiv = (counter, key) =>{
  return(
    <div id={key}>
          <span>-</span>
          {counter}
          <button onClick={() => plus(counter)}>+</button>
          <button>-</button>
          <br />
    </div>
  )
}

const plus = (counter) =>{
  <CounterDiv key={id++} counter={counter++} />
  console.log(CounterDiv)
};


const Counter = () => {
  const [div, setDiv] = useState(1)
    



    return(
    <div>
        {divs.map((div) => {
          return <CounterDiv key={divs.id} />
        })}
        
    </div>
)
}

export default Counter; 