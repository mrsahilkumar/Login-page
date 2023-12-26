import React from 'react';
import './App.css';
import Home from './Home';
import Registration from './Register';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1><u>Login page</u></h1>
        <nav>
          <ul className="nav-links">
            <li>
             <Link to="/register"> Register</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
          </ul>
        </nav>
  <Home></Home>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
