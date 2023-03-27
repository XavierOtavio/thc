import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutFront from "./components/LayoutFront";
import Home from "./components/Home";
import LayoutBack from "./components/LayoutBack";
import PageNotFound from "./components/PageNotFound";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";
import RoomDetails from "./components/RoomDetails";
import RoomSearch from "./components/RoomSearch";
import CheckIn from "./components/CheckIn";
import CheckOut from "./components/CheckOut";
import RoomDetailsFront from "./components/RoomDetailsFront";
import Cart from "./components/Cart";
import BookingDetail from "./components/BookingDetail";
import AddRoom from "./components/AddRoom";
import ClientsList from "./components/ClientsList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutFront />}>
            <Route index element={<Home />} />
            <Route path="/roomsearch" element={<RoomSearch />} />
            <Route path="/roomdetails/:1" element={<RoomDetailsFront />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/dashboard" element={<LayoutBack />}>
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="bookings" element={<Booking />} />
            <Route path="bookings/:id" element={<BookingDetail />} />
            <Route path="checkin" element={<CheckIn />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="rooms/:id" element={<RoomDetails />} />
            <Route path="rooms/addroom" element={<AddRoom />} />
            <Route path="clientslist" element={<ClientsList />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
