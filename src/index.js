import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home"
import PizzaPage from "./pages/PizzaPage"
import UserPage from "./pages/UserPage"
import ProfilePage from "./pages/user/ProfilePage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import UserRoute from './routes/user';
import AuthRoute from './routes/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes> 
          
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />

              <Route path="pizzas" element={<PizzaPage />} />
              <Route path="users" element={<UserRoute />}>
                <Route path=":username" element={<ProfilePage />} />
                <Route index element={<UserPage />} />
              </Route>

              <Route path="auth" element={<AuthRoute />}>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
              </Route>
            </Route>
         


        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
