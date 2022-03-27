import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Open from "./demo/open";
import Admin from "./pages/adminp";
import AddProduct from "./pages/addproduct";
import Qrmenu from "./pages/qrmenu";
import Demo from "./demo/demo";
import { useAuthContext } from "./hooks/useAuthContext";
import Page from "./components/Page";
import { useCollection } from "./hooks/useCollection";
import Notfound from "./components/notfound";

function App() {
  const { user } = useAuthContext();
  let items = useCollection("qrmenu").documents;

  return (
    <Router>
      <Routes>
        {!JSON.parse(localStorage.getItem("login")) && (
          <Route path={"/"} element={<Open />} />
        )}
        <Route path={"/profil"} element={<Qrmenu />} />
        <Route path={"/demo"} element={<Demo />} />
        {items &&
          items.map((item, i) => (
            <Route
              key={i}
              path={`/${item.uid}`}
              element={<Page item={item} items={items} />}
            />
          ))}

        <Route path={"*"} element={<Notfound />} />
        {user && <Route path={"/admin"} element={<Admin />} />}
        {user && <Route path={"/admin/add"} element={<AddProduct />} />}
      </Routes>
    </Router>
  );
}

export default App;
