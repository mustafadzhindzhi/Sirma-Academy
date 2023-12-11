import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Main from "./pages/Main.jsx";
import Profile from "./pages/Profile.jsx";
import UserTickets from "./pages/UserTickets.jsx";
import Home from "./pages/Home.jsx";
import Tickets from "./pages/Tickets.jsx";
import ProtectedRouth from "./components/ProtectedRouth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element=
        {<ProtectedRouth>
          <Main />
        </ProtectedRouth>}>
        <Route path="" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="user-tickets" element={<UserTickets />} />
        <Route path="ticket/:id" element={<Tickets />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
