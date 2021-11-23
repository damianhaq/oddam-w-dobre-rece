import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <div className="App">
          <p>hello world</p>
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
