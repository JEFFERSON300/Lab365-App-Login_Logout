import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout/Logout";

import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
