import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "../../src/store";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Board from "../components/Board";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      {/* <CategoryMenu /> */}
      <Provider store={store}>
        <Board />
      </Provider>,
      {/* <ProductList />
      <Cart /> */}
    </div>
  );
};

export default Home;
