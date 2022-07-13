import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Home from './pages/Home';
import PizzaPage from './pages/PizzaPage';
import ProfilePage from './pages/user/ProfilePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes> 

          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<PizzaPage />} />

          <Route path="/user" element={<UserPage />}>
            <Route path=":username" element={<ProfilePage />} />
          </Route>

          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          
        </Routes>
      </Layout>
    </div>
  )
}

export default App;


