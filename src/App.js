import React from 'react';
import LoginForm from './components/Login/LoginForm';
import UpdateForm from './components/Update/UpdateForm';
import "./App.css";

function App() {
  return (
    <div className="validate">
      <div className='validate-left'><LoginForm/></div>
      <div  className='validate-right'><UpdateForm/></div>  
    </div>
  );
}

export default App;
