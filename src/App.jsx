import { useState, memo, useCallback } from 'react';
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal';


const MemoisedSlowComponent = memo(function modifiedSlowComponent({time, custom}){
  return (
    <SlowComponent time={time} custom={custom}/>
  )
});

function App() {
  
  const [open, setIsOpen] = useState(false);

  const someFunction = useCallback(()=>{ }, [])

  return(
    <>
      <button onClick={()=>setIsOpen(true)}>Open modal</button>
      <div>
        Something is written...
      </div>
      {open && <Modal close={()=> setIsOpen(false)} />}
      <div>
        Something is written...
      </div>
      <MemoisedSlowComponent time={ 1000 } custom={someFunction} />
    </>
  );
};

export default App

// element passed as a prop in component does not re-render when component is re-render
