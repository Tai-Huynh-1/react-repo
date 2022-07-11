import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PizzaPage from './pages/PizzaPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  )
}

export default App;


