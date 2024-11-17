import { useState, memo, useCallback, useMemo } from 'react';
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal';


const MemoisedSlowComponent = memo(function modifiedSlowComponent({time, custom, x}){
  return (
    <SlowComponent time={time} custom={custom} x={x}/>
  )
});

function App() {
  
  const [open, setIsOpen] = useState(false);
  const [x, setX] = useState(0);

  const someFunction = useCallback(()=>{ }, [])

  const timeArray = useMemo(()=>{
    return [1000];
  },[])

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
      <MemoisedSlowComponent time={ timeArray } custom={someFunction} x={x} />
    </>
  );
};

export default App

// element passed as a prop in component does not re-render when component is re-render
