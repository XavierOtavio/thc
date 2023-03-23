import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutFront from "./components/LayoutFront";
import Home from "./components/Home";
import LayoutBack from "./components/LayoutBack";
import PageNotFound from "./components/PageNotFound";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutFront />}>
            <Route index element={<Home />} />
            <Route path="/productsList" element={<h1>404</h1>} />
          </Route>
          <Route path="/dashboard" element={<LayoutBack />}>
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="booking" element={<Booking />} />
            <Route path="checkin" element={<h1>CheckIn</h1>} />
            <Route path="checkout" element={<h1>CheckOut</h1>} />
            <Route path="rooms" element={<Rooms />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
