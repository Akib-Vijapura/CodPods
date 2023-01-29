import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Rooms from "./pages/Rooms/Rooms";

// importing protected route here...
import ProtectedRoute from "./utils/ProtectedRoute";


function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* this is protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/rooms" element={<Rooms />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" isAuth  element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
