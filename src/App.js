import React from 'react';
import logo from './logo.svg';
import './App.css';
 import { Route, Link } from 'react-router-dom';
  import Landing from './components/Landing';

function App() {
  return (
    <div className="App">

         <main>
           <Route exact path="/" component={Landing} />
       </main>
    </div>
  );
}

export default App;
