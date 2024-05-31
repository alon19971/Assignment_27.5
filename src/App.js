import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { UserProvider } from './UserContext';
import UserForm from './UserForm';
import Header from './Header';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <nav>
            <Link to="/form">User Form</Link>
          </nav>
          <header className="App-header">
            <Routes>
              <Route path="/form" element={<UserForm />} />
              <Route path="/" element={<div>Home</div>} />
            </Routes>
          </header>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
