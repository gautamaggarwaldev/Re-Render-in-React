import { useState } from 'react';
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal';

function App() {

  const [open, setIsOpen] = useState(false);
  
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
      <SlowComponent />
    </>
  );
};

export default App

// element passed as a prop in component does not re-render when component is re-render
