import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import AllBeers from './components/AllBeers';
import IndividualBeer from './components/IndividualBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [beer, setBeer] = useState({});
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/beers' element={<AllBeers />}/>
        <Route path='/beers/:id' element={<IndividualBeer beer={beer} setBeer={setBeer}/>}/>
        <Route path='/beers/random' element={<RandomBeer beer={beer} setBeer={setBeer}/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
