
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Order from './components/Order';
function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
       <Navigation></Navigation>
            <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/menu' element={<Menu/>} />
            <Route exact path='/gallery' element={<Gallery/>} />
            <Route exact path='/team' element={<Team/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/order' element={<Order/>} />
            </Routes>    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
