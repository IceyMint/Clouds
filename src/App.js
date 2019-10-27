import React from 'react';
import Auth from './components/Auth/Auth'
import Welcome from './components/Welcome/Welcome'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import { Button } from 'grommet'
import './App.css';

const toggleMenu = (e) => {
  e.preventDefault()
  console.log("test")
}

function App() {
  const [layer, setLayer] = React.useState()
  return (
    <div>
      <Header />
      {Auth.isAuthenticated ? <Main /> : <Welcome toggleMenu={toggleMenu} props={this}/>}
    </div>
  );
}

export default App;
