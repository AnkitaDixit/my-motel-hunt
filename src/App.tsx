import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import DetailPage from './components/DetailPage/DetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/"  Component={SearchBar} />
      <Route path="/details" Component={DetailPage} />
      </Routes>
    </Router>
  );
}
export default App;
