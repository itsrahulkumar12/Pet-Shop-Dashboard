import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
