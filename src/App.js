import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Users from "./components/Users";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
          <Navbar/>
            <Routes>
            <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
