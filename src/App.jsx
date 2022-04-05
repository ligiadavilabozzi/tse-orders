import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/styles.css";
import Info from "./components/Info";
import Nav from "./components/Nav";
import { Table } from "./components/Table";

import JsonOrders from "./data/orders.json";
import Sellers from "./data/sellers.json";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Orders} />
          <Route path="/info" component={Info} />
        </Switch>
      </div>
    </Router>
  );
}

function Orders() {
  const columns = [
    { accessor: "orderId", label: "Order ID" },
    { accessor: "product", label: "Product" },
    { accessor: "price", label: "Price" },
    { accessor: "seller", label: "Seller" },
    { accessor: "country", label: "Country" }
  ];

  const rows = JsonOrders;
  const sellers = Sellers;

  return (
    <div className="App">
      <Table rows={rows} columns={columns} sellers={sellers} />
    </div>
  );
}
