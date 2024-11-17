import './App.css'
import ButtonWithModal from './ButtonWithModal';
import RefactorComponent from './RefactorComponent';
import SlowComponent from './SlowComponent'

function App() {

  return(
    <>
      <RefactorComponent>
        <div>
          Something is written...
        </div>
        <ButtonWithModal />
        <div>
          Something is written...
        </div>
        <SlowComponent />
      </RefactorComponent>
    </>
  );
};

export default App

// element passed as a prop in component does not re-render when component is re-render
