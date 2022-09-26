import logo from './logo.svg';
import './App.css';
import Nav from './components/Common/Navigation';
import { Outlet } from 'react-router-dom';
import { UserContext } from './components/User/UserProvider';
import { useContext } from 'react';

function App() {
  const { user, changeUser } = useContext(UserContext)
  const newUser = { name: 'hi', age: 18 }
  return (<div>
    <div className='App'>
      <Nav user={user} />
    </div>
    <Outlet />
  </div>
  );
}

export default App;
