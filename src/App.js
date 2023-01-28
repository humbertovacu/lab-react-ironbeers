import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import AllBeers from './components/AllBeers';
import IndividualBeer from './components/IndividualBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/beers' element={<AllBeers />}/>
        <Route path='/beers/:id' element={<IndividualBeer />}/>
        <Route path='/beers/random' element={<RandomBeer />}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
