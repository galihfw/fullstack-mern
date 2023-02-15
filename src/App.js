import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <Fragment>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-querter">
            <Routes>
              <Route exact path="/" element={<ProductList/>}>
                {/* <ProductList /> */}
              </Route>
              <Route path="/add" element={<AddProduct/>}>
                {/* <AddProduct /> */}
              </Route>
              <Route path="/edit/:id" element={<EditProduct/>}>
                {/* <EditProduct /> */}
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      </Fragment>
    </Router>
    
  );
}

export default App;
