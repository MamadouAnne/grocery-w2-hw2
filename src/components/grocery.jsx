import React, { Component } from "react";
import "../App.css";

class Groceries extends Component {
  render() {
    return (
      <div>
        {/* I used bootstrap to display data in the table. */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">item</th>
              <th scope="col">brand</th>
              <th scope="col">units</th>
              <th scope="col">quantity</th>
              <th scope="col">isPurchased</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.props.product.item}</td>
              <td>{this.props.product.brand}</td>
              <td>{this.props.product.units} </td>
              <td>{this.props.product.quantity} </td>
              <td>{this.props.product.isPurchased} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Groceries;
