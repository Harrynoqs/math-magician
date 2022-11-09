import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
