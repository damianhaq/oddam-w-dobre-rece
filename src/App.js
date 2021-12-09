import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import Nav from "./components/Nav";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<LogIn />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
