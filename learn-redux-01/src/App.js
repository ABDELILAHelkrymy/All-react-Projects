import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const account = useSelector(state => state.account)

  return (
    <div className="App">
      <h1>{account}</h1>
    </div>
  );
}

export default App;
