import Footer from "../components/footer/Footer";
import "./open.css";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from "../hooks/useAuthContext";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";

function Open() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginpage, setloginpage] = useState(false);
  const { signup } = useSignup();
  const { error, login } = useLogin();
  const { authIsReady, user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);

    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  const handleSubmitlogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    login(email, password);
    setPassword("");
  };
  return (
    <div
      style={{
        backgroundColor: "#313131",
        minHeight: "100vh",
      }}
    >
      <div className="container" style={{ height: "100%", color: "white" }}>
        <form>
          <div class="row" style={{ paddingTop: "90px" }}>
            <div class="col" style={{ paddingTop: "3.2%" }}>
              <h3 style={{ color: "white" }}>
                WELC
                <div
                  style={{ margin: "4px", width: "20px", height: "21px" }}
                  className="spinner-grow text-primary"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                ME, Let's make your qr menu!
              </h3>

              <input
                type="email"
                name="username"
                placeholder="e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />

              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  paddingTop: "7px",
                }}
              >
                <button
                  style={{ width: "49.1%" }}
                  value="Register"
                  className="btn btn-warning"
                  onClick={handleSubmit}
                >
                  Register
                </button>
                <button
                  className="btn btn-success"
                  style={{ width: "49.1%", color: "white" }}
                  value="Login"
                  onClick={handleSubmitlogin}
                >
                  Login
                </button>
                {error && <p style={{ color: "orangered" }}>{error}</p>}
              </div>
            </div>
            <div class="col" style={{ padding: "35px", marginTop: "1%" }}>
              <QRCode
                style={{ boxShadow: "1px 1px 0px 15px white" }}
                value={"http://qrmenu-bice.vercel.app/demo"}
                size={228}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                renderAs={"svg"}
                imageSettings={{
                  src: "https://upload.wikimedia.org/wikipedia/commons/3/31/QR_icon.svg",
                  x: null,
                  y: null,
                  height: 24,
                  width: 24,
                  excavate: true,
                }}
              />
              <div>
                <Link style={{ color: "white" }} to={"/demo"}>
                  <button
                    style={{ width: "300px" }}
                    className="btn btn-primary"
                  >
                    For DEMO
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Open;
