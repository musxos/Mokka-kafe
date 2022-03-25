import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import AdminMenu from "./adminMenu";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Add() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState("");
  const [desc, setdesc] = useState("");
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const q = query(movieCollectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setproduct(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" && category === "") {
      return;
    }

    //const moviesCollRef = collection(db, "movies");
    addDoc(movieCollectionRef, {
      title: title,
      category: category,
      price: price,
      img: img,
      desc: desc,
      timestamp: serverTimestamp(),
      uid: user.uid,
    })
      .then((response) => {
        settitle("");
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(product);
  }

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

        <Link to={"/" + user.uid} className="w3-bar-item w3-button">
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

      <div className="App" style={{ paddingLeft: "70px" }}>
        <div className="w3-container" style={{ padding: "30px" }}>
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div
              className="col-auto"
              style={{
                margin: "20px",

                justifyContent: "center",
                display: "flex",
              }}
            >
              <input
                style={{ margin: "3px" }}
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                id="title"
                placeholder="title"
              />

              <input
                style={{ margin: "3px" }}
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                id="category"
                placeholder="category"
              />

              <input
                style={{ margin: "3px" }}
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                id="price"
                placeholder="price"
              />

              <input
                style={{ margin: "3px" }}
                type="text"
                className="form-control"
                value={img}
                onChange={(e) => setimg(e.target.value)}
                id="image"
                placeholder="image"
              />
              <textarea
                style={{ margin: "3px" }}
                type="text"
                className="form-control"
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                id="desc"
                placeholder="desc"
              />
              <button
                style={{
                  margin: "5px",
                  width: "300px",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                Add
              </button>
            </div>
            <AdminMenu />
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
