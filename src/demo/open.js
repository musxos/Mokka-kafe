import Footer from "../components/footer/Footer";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";

function Open() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginpage, setloginpage] = useState(false);
  const { signup } = useSignup();
  const { error, login } = useLogin();

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
    <div className="container">
      <div className="row">
        <div
          style={{
            backgroundColor: "grey",
            padding: "30px",
            minHeight: "400px",
          }}
          className="col-sm-5"
        >
          {loginpage ? (
            <div>
              <h2>Sign In</h2>
              <form onSubmit={handleSubmitlogin}>
                <label>
                  <span>Email Adresiniz:</span>
                  <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </label>
                <label>
                  <span>Parola:</span>
                  <input
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </label>
                <button>Giriş</button>
                {error && <p style={{ color: "orangered" }}>{error}</p>}
              </form>
            </div>
          ) : (
            <div>
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <span>Email Adresiniz:</span>
                  <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </label>
                <label>
                  <span>Parola:</span>
                  <input
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </label>
                <button>Üye Ol</button>
                {error && <p style={{ color: "orangered" }}>{error}</p>}
              </form>
            </div>
          )}
          <button
            onClick={() => setloginpage(!loginpage)}
            className="btn btn-success"
          >
            {!loginpage ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Open;
