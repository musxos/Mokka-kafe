import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/useLogin';
import { updateProfile } from 'firebase/auth';

 function Changename() {
    const { login } = useLogin();
    const { logout } = useLogout();

    const { user } = useAuthContext();

  const [name, setname] = useState("");



    const handleSubmit = async (e,displayName=name) => {
        e.preventDefault()
        updateProfile(user, { displayName });
          setTimeout(() => {
            window.location.href = "https://qrmenu-bice.vercel.app/admin";
          }, 1000);
      
        
      };
 
  return (
    <>
    <div
      className="w3-sidebar w3-bar-block w3-light w3-xxlarge"
      style={{ width: "70px", backgroundColor: "#313131", color: "white" }}
    >
      <Link to="/admin" className="w3-bar-item w3-button">
        <i className="fa fa-home"></i>
      </Link>
      <Link to="/admin/add" className="w3-bar-item w3-button">
        <i className="fa fa-plus"></i>
      </Link>
      <button
        type="button"
        className="w3-bar-item w3-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <i className="fa fa-qrcode "></i>
      </button>
      <Link to="/admin/settings" className="w3-bar-item w3-button">
        <i className="fa fa-wrench"></i>
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
      <div className="w3-container" style={{justifyContent:"center",alignItems:"center",display:"flex",height:"90vh", padding:"50px"}}>
      <label style={{textAlign:"center"}}><h2>Change Restaurant Name </h2>

      <input
                type="text"
                placeholder="restaurant name"
                onChange={(e) => setname(e.target.value)}
                value={name}
                  
              />
              <button
                  className="btn btn-primary"
                  style={{ width: "49.1%", color: "white" }}
                  value="Login"
onClick={handleSubmit}                  
                >
                  Change
                </button></label>
        </div>
        </div>
  </>
  )
}
export default Changename