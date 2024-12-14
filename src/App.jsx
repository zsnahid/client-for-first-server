import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <Link to="/phones">All Phones</Link>
        <Outlet />
      </div>
    </>
  );
}

export default App;
