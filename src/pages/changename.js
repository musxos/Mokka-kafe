import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/useLogin';
import { updateProfile } from 'firebase/auth';
import { db } from '../db/Firebase';
import { doc, updateDoc } from 'firebase/firestore';

 function Changename({items, item}) {
  items = items && items.filter((a) => item.uid === a.uid);
  console.log(items);
    const { login } = useLogin();
    const { logout } = useLogout();

    const { user } = useAuthContext();

  const [name, setname] = useState("");
  
 


    const handleSubmit = async (e,displayName=name) => {
        e.preventDefault()
        updateProfile(user, { displayName });
      items.map((item) => {
        const docRef = doc(db, "qrmenu", item.id
        );
        updateDoc(docRef, { displayName: name })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error.message));
      } )
        
      window.location.href = "https://qrmenu-bice.vercel.app/admin";

        
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
      
      <Link to={`/${user.uid}`} className="w3-bar-item w3-button">
        <i className="fa fa-link"></i>
      </Link>

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
      <label style={{textAlign:"center",border:"2px solid black",padding:"50px",borderRadius:"5px"}}><h2 >Change Restaurant Name </h2>

      <input
      style={{border:"1px solid"}}
                type="text"
                placeholder="restaurant name"
                onChange={(e) => setname(e.target.value)}
                value={name}
                  
              />
              <button
                  className="btn btn-primary"
                  style={{ width: "49.1%", color: "white",border:"1px solid black" }}
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