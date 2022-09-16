import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      <h1>This is my fancy fb app #fancyDinner</h1>
      <h3>{user ? `The user logged in is ${user}` : 'No user is logged in'}</h3>
      <Login setUser={setUser}/>
    </div>
  );
}

export default App;
