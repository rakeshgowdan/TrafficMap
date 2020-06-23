import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Container } from 'reactstrap';
import Map from './Components/Map';
require('dotenv').config({ path: require('find-config')('.env') })
function App() {
  return (
    <div className="App">
     <Header/>

     <Container>
     
       <Map/>
     </Container>
    
    </div>
  );
}

export default App;
