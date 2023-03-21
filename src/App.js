import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutFront from "./components/LayoutFront";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/dashboard" element={<LayoutBackend />}>
          <Route index element={<Dashboard />} />
        </Route> */}
          <Route path="/" element={<LayoutFront />}>
            <Route index element={<Home />} />
            <Route path="/productsList" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
