import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LagosBar from "./pages/LagosBar"
import Rooms from "./pages/Rooms"
import RoomDetails from "./pages/RoomDetails"
import ScrollToTop from "./hooks/ScrollToTop"
import BookingPage from "./pages/BookingPage"
import BookingInfoPage from "./pages/BookingInfoPage"

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-room" element={<BookingPage />} />
          <Route path="/the-lagos-bar" element={<LagosBar />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room-details/:roomId" element={<RoomDetails />} />
          <Route path="/your-info" element={<BookingInfoPage />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
