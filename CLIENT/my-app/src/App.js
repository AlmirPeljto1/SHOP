import "./App.css";
import Cart from "./PAGES/Cart";
//IMPORTS
import Home from "./PAGES/Home";
import Login from "./PAGES/Login";
import Product from "./PAGES/Product";
import ProductList from "./PAGES/ProductList";
import Register from "./PAGES/Register";
import Success from "./PAGES/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
//APP-SOURCE
function App() {
  //REDUX-USER
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/products/:category" element={<ProductList />} />

          <Route exact path="/product/:id" element={<Product />} />

          <Route exact path="/cart" element={<Cart />} />

          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />

          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}
//EXPORT
export default App;
