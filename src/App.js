import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Open from "./demo/open";
import Admin from "./pages/adminp";
import AddProduct from "./pages/addproduct";
import Qrmenu from "./pages/qrmenu";
import Demo from "./demo/demo";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Open />} />
        <Route path={"/demo"} element={<Qrmenu />} />
        <Route path={"/profil"} element={<Demo />} />
        <Route path={"*"} element={<Demo />} />
        {user && <Route path={"/admin"} element={<Admin />} />}
        {user && <Route path={"/admin/add"} element={<AddProduct />} />}
      </Routes>
    </Router>
  );
}

export default App;
