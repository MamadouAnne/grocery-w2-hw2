import React, { Component } from "react";
import items from "./data";
import Groceries from "./components/grocery";
import "./App.css";
class App extends Component {
  state = {
    items,
  };
  render() {
    return (
      <div>
        <div>
          {this.state.items.map((product) =>
            !product.isPurchased ? (
              <Groceries product={product} key={product.item} />
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default App;
