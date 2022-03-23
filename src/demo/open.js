import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Login from "../pages/login";

function Open() {
  const navigate = useNavigate();
  return (
    <div className="App  row g-0">
      <div style={{ marginTop: "170px" }}></div>

      <div
        className="col-6 col-md-5"
        style={{
          marginBottom: "48px",
          padding: "60px",
        }}
      >
        <h2 style={{ marginBottom: "28px" }} className="subtitle">
          Welcome 👋 Let's make your QR menu!
        </h2>
        <form style={{ justifyContent: "center" }} class="row g-2">
          <div class="col-auto">
            <button type="submit" class="btn btn-outline-primary mb-3">
              Login
            </button>
          </div>
          <div class="col-auto">
            <button
              onClick={() => navigate("/login")}
              type="submit"
              class="btn btn-outline-primary mb-3"
            >
              Sing Up
            </button>
          </div>
        </form>
      </div>
      <div className="col-sm-6 col-md-7">
        <label>
          <a href="/demo" style={{ textDecoration: "none", color: "#2c2891" }}>
            <img
              className="picture"
              alt="demo"
              src="https://i.hizliresim.com/eeikfcf.png"
              style={{
                marginBottom: "2%",
                width: "70%",
                padding: "10px",
              }}
            />
          </a>
        </label>
      </div>

      <Footer />
    </div>
  );
}

export default Open;
