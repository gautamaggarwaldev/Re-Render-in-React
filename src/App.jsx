import { useState, memo, useCallback, useMemo } from 'react';
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal';
import AnotherSlowComponent from './AnotherSlowComponent';


// const MemoisedSlowComponent = memo(function modifiedSlowComponent({time, custom, x}){
//   return (
//     <SlowComponent time={time} custom={custom} x={x}/>
//   )
// });

const MemoAnotherComponent = memo(AnotherSlowComponent);

function App() {
  
  const [open, setIsOpen] = useState(false);
  const [x, setX] = useState(0);

  // const someFunction = useCallback(()=>{ }, [])

  // const timeArray = useMemo(()=>{
  //   return [1000];
  // },[])

  return(
    <>
      <button onClick={()=>setIsOpen(true)}>Open modal</button>
      <button onClick={()=>setX(x+1)}>Increment</button>
      <div>
        Something is written...
      </div>
      {open && <Modal close={()=> setIsOpen(false)} />}
      <div>
        Something is written...
      </div>
      {/* <MemoisedSlowComponent time={ timeArray } custom={someFunction} x={x} /> */}
      <MemoAnotherComponent>
        <div>Hello, I am Child</div>
      </MemoAnotherComponent>
    </>
  );
};

export default App

// element passed as a prop in component does not re-render when component is re-render
