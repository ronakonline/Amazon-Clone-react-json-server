import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductContext from "../context/ProductContext";
import "../assets/css/App.css";
import ProductListing from "../pages/ProductListing";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts((previousState) => {
          previousState = data;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));

    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories((previousState) => {
          previousState = data;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  console.log("App");

  return (
    <ProductContext.Provider value={{ products, categories }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Register">
            <Registration />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/ProductDetail/:id">
            <ProductDetail />
          </Route>

          <Route path="/ProductListing/:cat">
            <ProductListing />
          </Route>
        </Switch>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;
