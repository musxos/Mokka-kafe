import "./admin.css";
import { useLogout } from "../hooks/useLogout";

import Demo from "../demo/demo";
import { Link } from "react-router-dom";
import Qrmenu from "./qrmenu";
function Admin() {
  const { logout } = useLogout();

  return (
    <>
      <div
        className="w3-sidebar w3-bar-block w3-light w3-xxlarge"
        style={{ width: "70px" }}
      >
        <Link to="/admin" className="w3-bar-item w3-button">
          <i className="fa fa-home"></i>
        </Link>
        <Link to="/admin/add" className="w3-bar-item w3-button">
          <i className="fa fa-plus"></i>
        </Link>

        <Link to="/demo" className="w3-bar-item w3-button">
          <i className="fa fa-book"></i>
        </Link>

        <Link
          to="#"
          className="w3-bar-item w3-button"
          style={{ bottom: "10px", position: "absolute" }}
        >
          <i onClick={logout} className="fa fa-power-off"></i>
        </Link>
      </div>

      <div style={{ paddingLeft: "70px" }}>
        <div className="w3-container" style={{ border: "30px solid white" }}>
          <Qrmenu />
        </div>
      </div>
    </>
  );
}

export default Admin;
