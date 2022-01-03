import './App.css';
import Count from './component/Count';
import Click from './component/Click';

function App(){
  return(
    <div>
      <Count render={(count, incrementCount) => <Click count={count} incrementCount={incrementCount} /> } /> 
    </div>
  )  
}
export default App;
