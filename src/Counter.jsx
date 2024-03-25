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


// function Counter({ count, onIncrement, onDecrement, onDelete }) {
//   return (
//     <div>
//       <span>-</span>
//       {count}
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button> {/* Add onClick handler */}
//       <br />
//     </div>
//   );
// }

// function CounterContainer({ initialCount, onDelete }) {
//   const [count, setCount] = useState(initialCount);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   const handleDelete = () => {
//     onDelete(); // Call onDelete to remove the current CounterContainer and its children
//   };

//   return (
//     <div>
//       <Counter
//         count={count}
//         onIncrement={handleIncrement}
//         onDecrement={handleDecrement}
//         onDelete={handleDelete}
//       />
//       {count > 1 && (
//         <div>
//           {[...Array(count - 1)].map((_, index) => (
//             <CounterContainer key={index} initialCount={1} onDelete={handleDelete} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   const [count, setCount] = useState(1);

//   const handleDelete = () => {
//     setCount(0);
//   };

//   return (
//     <CounterContainer initialCount={1} onDelete={handleDelete} />
//   );
// }





