import "./Logout.css";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <div className="all">
      <div className="afterButton">
        <button type="submit" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
