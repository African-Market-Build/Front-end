import { BrowserRouter ,Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
